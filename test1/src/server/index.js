import express from "express";
import render from "./render";
import bodyParser from "body-parser";
import cors from "cors";
import https from "https";
import fs from "fs";

const app = express();

app.use(cors());

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post("/ssrRender", render);

app.post("/login", (req, res)=>{
  res.status(200).send('==');
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

// 配置 SSL 选项
/* const sslOptions = {
  key: fs.readFileSync("../certificate"),
  cert: fs.readFileSync("../certificate"),
}; */

// 启动服务器，监听指定的IP地址和端口，使用 HTTPS 协议
/* const server = https
  .createServer(sslOptions, app)
  .listen(443, "域名", () => {
    console.log("Server started on port 443 (HTTPS)");
  }); */


app.listen(8082, () => {
  console.log("server start on 8082");
});
