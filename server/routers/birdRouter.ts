import express, { Request, Response } from "express";

export const birdsRouter = express.Router()

// middleware that is specific to this router
birdsRouter.use((req: Request, res: Response, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
birdsRouter.get('/', (req: Request, res: Response) => {
  res.send('Birds home page')
})
// define the about route
birdsRouter.get('/about', (req: Request, res: Response) => {
  res.send('About birds')
})

// module.exports = route