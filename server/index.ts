import express, { Request, Response } from "express";
import next from "next";
import { hi } from "./controllers/hi";
import { birdsRouter } from "./routers/birdRouter";
import { userRouter } from "./routers/users/userRouter";
import { Schema, model, connect } from "mongoose";
import { authRouter } from "./routers/auth/authRouter";

// import * as hi from './controllers/hi';

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

/***************************************Connecting to Database***************************************/
async function connectDB() {
  try {
    await connect("mongodb://127.0.0.1:27017/config");
    console.log("Connected to MongoDB Database...");
  } catch (error) {
    console.log("Failed to connect to MongoDB Database:", error);
    process.exit(1);
  }
}
//running function
connectDB();
/******************************************************************************/

(async () => {
  try {
    await app.prepare();
    const server = express();
    // Add this line to parse JSON request bodies
    server.use(express.json());
    server.get("/hi", hi);
    //authentication
    server.use("/api/auth", authRouter);
    
    server.use("/birds", birdsRouter);
    //users routes
    server.use("/user", userRouter);
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    const closer = server.listen(3000, (err?: any) => {
      if (err) throw err;
      console.log("server ready on port 3000");
    });
    // Handling Error
    process.on("unhandledRejection", (err?:any) => {
      console.log(`An error occurred: ${err.message}`);
      closer.close(() => process.exit(1));
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
