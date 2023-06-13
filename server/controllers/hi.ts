import { Request, Response } from "express";

export const hi = (req: Request, res: Response) => {
  res.json({ hi: "hey you bitch" });
};

// module.exports = hi;
