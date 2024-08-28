import getScripts from "./getScripts.js";
import getLinks from "./getLinks.js";
import fs from "fs";
import path from "path";

/**
 * 生成html代码
 * @param {*} componentHTML   html模版
 * @param {*} templateInfo    数据
 * @returns
 */
export default function createHtmlText(componentHTML, templateInfo) {
  
  //const filePath = path.resolve(__dirname, '../../../ssrRender/public/css/main.css');
   /* const result = fs
    .readdirSync("./public/js")
    .filter(file => file.endsWith(".js"))
    const filePath1 = path.resolve(__dirname, `../../../ssrRender/public/js/${result[0]}`); */
  

  
    //const css = fs.readFileSync(filePath, "utf8"); // 传递编码值
    //const js = fs.readFileSync(filePath1, 'utf8');
    


  const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>SSR</title>
              ${ getLinks() }
            </head>
            <body>
              <div id="root">${componentHTML}</div>
              <script>
               window.__INITIAL_DATA__ = ${JSON.stringify(templateInfo)}
               function getDeviceType() {
                   var userAgent = navigator.userAgent;
                   
                   if (/iPhone|iPod|Android|Windows Phone/i.test(userAgent)) {
                       return "Mobile";
                   } else if (/iPad/i.test(userAgent) || window.innerWidth <= 1024) {
                       return "iPad";
                   } else {
                       return "PC";
                   }
              };
              const root = document.querySelector('#root');
              root.classList.add(getDeviceType());
              </script>
             ${ getScripts() }
            </body>
            </html>
   `;

  return html;
}
