// auth.js
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { JWTUser, User } from "../routers/users/users";
export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, _id } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  // try {
  bcrypt.hash(password, 10).then(
    async (hash) => {
      await JWTUser.create({
        username,
        password: hash,
        _id,
      })
        .then((user) =>
          res.status(200).json({
            message: "User successfully created",
            user,
          })
        )
        .catch((err: any) =>
          res.status(401).json({
            message: "User not successful created",
            error: err.mesage,
          })
        );
    }
    // } catch (err: any) {
    //   res.status(401).json({
    //     message: "User not successful created",
    //     error: err.mesage,
    //   });
    // }
  );
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  // Check if username and password is provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }
  // Check if username and password is provided
  try {
    const user = await JWTUser.findOne({ username });
    if (user) {
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          res.status(200).json({
            message: "Login successful",
            user,
          });
        } else {
          res.status(400).json({ message: "Login not succesful" });
        }
      });

      // res.status(200).json({
      //   message: "Login successful",
      //   user,
      // });
    } else {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { role, _id } = req.body;
  // First - Verifying if role and id is presnt
  if (role && _id) {
    // Second - Verifying if the value of role is admin
    if (role === "admin") {
      // Finds the user with the id

      await JWTUser.findById(_id)
        .then((user) => {
          // Third - Verifies the user is not an admin
          if (user?.role !== "admin") {
            if (user) {
              user.role = role;
              // user.save((err:any) => {
              //   //Monogodb error checker
              //   if (err) {
              //     res.status(400).json({ message: "An error occurred", error: err.message });
              //     process.exit(1);
              //   }
              //   res.status(201).json({ message: "Update successful", user });
              // });
              user
                .save()
                .then((savedUser: any) => {
                  res.status(201).json({ message: "Update successful", savedUser });
                })
                .catch((error: any) => {
                  res.status(400).json({ message: "An error occurred", error: error.message });
                  process.exit(1);
                });
            }
          } else {
            res.status(400).json({ message: "User is already an Admin" });
          }
        })
        .catch((error) => {
          res.status(400).json({ message: "An error occurred", error: error.message });
        });
    }
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body;
  await JWTUser.findByIdAndDelete(_id)
    // .then((user) => user?.remove())
    .then((user) => res.status(201).json({ message: "User successfully deleted", user }))
    .catch((error) => res.status(400).json({ message: "An error occurred", error: error.message }));
};
