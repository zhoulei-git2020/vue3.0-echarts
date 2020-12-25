const path = require('path')
const inputPath = path.resolve(__dirname,'./src/index.js') //得到绝对路径+输入文件路径
const outputPath = path.resolve(__dirname,'./dist/datav.js')//输出文件路径
console.log(inputPath);
module.exports= {
  input: inputPath,
  output:{
    file:outputPath,
    format:'umd',
    name:'Datav'
  }
}