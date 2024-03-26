import { DATABASE_URL } from "@repo/common/config";
import express from "express";

const app = express();

app.get("/", (req: any, res: any) => {
    console.log(DATABASE_URL);

    res.json({
        message: "its an healthy endpoint",
    });
});

app.listen(3000);
