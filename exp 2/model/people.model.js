import mongoose from "mongoose";

const PeopleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const People = mongoose.model("User", PeopleSchema);
export default People;
