const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname,'./src/index.js') //得到绝对路径+输入文件路径
const outputPath = path.resolve(__dirname,'./dist/datav.js')//输出文件路径
const outputEsPath = path.resolve(__dirname,'./dist/datav.es.js')//输出文件路径


console.log(inputPath);
module.exports= {
  input: inputPath,
  output:[
    {
      file:outputPath,
      format:'umd',
      name:'Datav'
    },
    {
      file:outputEsPath,
      format:'es'
    }
],
  plugins:[
    vue(),//执行rollup-plugin-vue ***npm i -D rollup-plugin-vue --save*** 还需要安装***npm i -D @vue/compiler-sfc --save***
    resolve(), //执行rollup-plugin-node-resolve ***npm i -D rollup-plugin-node-resolve --save***
    commonjs(),//执行rollup-plugin-commonjs ***npm i -D rollup-plugin-commonjs --save***
    babel({//执行rollup-plugin-babel ***npm i -D rollup-plugin-babel --save***
      exclude:'node_modules/**'//哪些文件夹不进行babel编译
    }),
    json(),//执行rollup-plugin-json ***npm i -D rollup-plugin-json --save***
   
    postcss({//执行rollup-plugin-postcss ***npm i -D rollup-plugin-postcss --save
      plugins:[]
    }),
    
  ],
  external:[
    'vue' //将vue模块进行外部引用而不是将模块代码打包进文件
  ]

  
}