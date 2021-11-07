import express from "express";
import { db } from "..";

const getPackageRouter = async (req: express.Request, res: express.Response) => {
    const packageId = await db.get(req.params.pkgid)
    if (packageId === null) {
        res.status(404).send("Package not found")
    }
    res.json({ "httpStatus": "200 OK", "package": packageId });
}

export { getPackageRouter }