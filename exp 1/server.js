import express, { response } from "express";
import dotenv from "dotenv";
import useAuth from "./routes/authRoute.js";
const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;

const Users = [
  {
    id: 1,
    firstname: "kavilash",
    lastname: "R",
  },
  {
    id: 2,
    firstname: "jack",
    lastname: "donald",
  },
  {
    id: 3,
    firstname: "peter",
    lastname: "parker",
  },
];

app.get("/", (req, res) => {
  res.send("hello bois");
});

app.get("/api/users", (req, res) => {
  res.send(Users);
});

// how to get a single user information from data base by using route params
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send("invalid id, id must be numbers");
  }
  const findUser = Users.find((user) => user.id === parsedId);
  if (!findUser) return res.status(404).sendStatus(404);

  return res.send(findUser);
});

//put request = in this will update the entire field in the user object if not then other fields will be deleted
app.put("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) return res.sendStatus(400);

  const findUserIndex = Users.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);

  Users[findUserIndex] = { id: parsedId, ...body };
  return res.sendStatus(200);
});

//patch request = int his we can update the fields that we want to update , unlike the put request by updating every single field
app.patch("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) return res.sendStatus(400);

  const findUserIndex = Users.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  Users[findUserIndex] = { ...Users[findUserIndex], ...body };
  return res.sendStatus(200);
});

// delete request
app.delete("/api/users/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) return res.sendStatus(400);

  const findUserIndex = Users.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  Users.splice(findUserIndex, 1);
  return res.sendStatus(200);
});

app.use("/api/auth", useAuth);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
