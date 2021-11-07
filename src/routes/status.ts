import express from "express";

const statusRouter = (req: express.Request, res: express.Response) => {
    res.json({"httpStatus": "200 OK", "version": "1.0.0"})
}

export { statusRouter }