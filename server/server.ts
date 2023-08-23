import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { defineConfig } = require("vite");
import { resolve } from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import cors from "cors";
import koa from "koa";
import koaRouter from "koa-router";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

// induces order ugppdpl => uglypoodle
/*
use
get
post
put
delete
patch
listen
*/

// setting up the server
const app = new koa();

app.use(cors());

const router = new koaRouter();
app.use(router.routes());
const port = 3000;

// setting up the routes

router.get("/", async (ctx) => {
    ctx.body = "Hello World";
});

router.get("/api", async (ctx) => {
    // data here 
});

router.get("/api/:id", async (ctx) => {
    // data call by id 
});

router.post('/user', async (ctx) => {
    // create user
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
