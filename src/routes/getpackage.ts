import express from "express";
import { db } from "..";

const getPackageRouter = async (req: express.Request, res: express.Response) => {
    const packageId = await db.get(req.params.pkgid)
    console.log(packageId)
}

export { getPackageRouter }