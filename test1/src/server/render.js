import React from "react";
import App from "./App";
import ReactDom from "react-dom/server";
import createHtmlText from "./htmlTemplate";

export default  (req, res) => {
  try {
    const componentHTML = ReactDom.renderToString(
      <App templateData={req.body} />
    );

    const html =  createHtmlText(componentHTML, req.body);

    // 确保没有其他代码干扰
    res.removeHeader("Content-Type");
    res.removeHeader("Content-Disposition");

    // 设置响应头以触发文件下载
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="download.html"'
    );
    res.setHeader("Content-Type", "text/html");

    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Internal Server Error"); // 渲染出现错误
  }
};
