import express, { Request, Response } from "express";
import { Schema, model, connect } from "mongoose";
import User, { IUser } from "./users";

export const userRouter = express.Router();

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  _id: Number,
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number
  // }
});
const Blog = model("Blog", blogSchema);
// middleware that is specific to this router
userRouter.use((req: Request, res: Response, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
userRouter.get("/", (req: Request, res: Response) => {
  res.send("user");
});
// define the about route
userRouter.get("/about", (req: Request, res: Response) => {
  res.send("about user");
});

// Get all users
userRouter.get("/api/users", async (_req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    // users.forEach((user) => console.dir(user));
    // console.log(JSON.parse(users));
    const parsedUsers = users.map((user: IUser) => ({
      id: user._id, // Assuming the user document has an _id property
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
    console.dir(parsedUsers);
    res.json(parsedUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// Create a new user
userRouter.post("/api/users", async (req: Request, res: Response) => {
  try {
    const { name, email, _id } = req.body;
    console.log(req.body);
    const user: IUser = new User({ name, email, _id });
    const savedUser: IUser = await user.save();
    res.json({ savedUser, status: "created" });
  } catch (error) {
    res.status(500).json({ error: `Failed to create user because -- ${error}` });
  }
});

// Get a specific user by ID
userRouter.get("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const user: IUser | null = await User.findById(userId);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to create user because -- ${error}` });
  }
});

// Update a user
userRouter.put("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const { name, email } = req.body;
    const updatedUser: IUser | null = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (updatedUser) {
      res.json({ updatedUser, status: "updated" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Delete a user
userRouter.delete("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const deletedUser: IUser | null = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json({ deletedUser, status: "deleted" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});
