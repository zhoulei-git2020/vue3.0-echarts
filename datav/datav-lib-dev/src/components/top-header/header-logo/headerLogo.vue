<template>
    <svg t="1609564740298" class="header_logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26347" width="200" height="200">
    <path 
        class="headerLogo_path"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        d="M843.5 284.4c-24.4-94.6-110.1-164.5-212.2-164.5-45.4 0-87.5 13.8-122.5 37.4-35-23.6-77.1-37.4-122.5-37.4-102.2 0-187.8 69.9-212.2 164.5-87.2 29-150.2 111.2-150.2 208.1 0 99.4 66 183.2 156.6 210.2-4.8 13-8.3 27-10.6 41-22.1 79.7-42 184.9-54.8 280.2h715c1.2-77-3.9-187.3-22.7-314.4 105.5-16 186.5-106.9 186.5-216.9-0.2-97-63.1-179.2-150.4-208.2zM243.4 574.1c-45.1 0-81.7-36.6-81.7-81.7s36.6-81.7 81.7-81.7 81.7 36.6 81.7 81.7c-0.1 45.1-36.6 81.7-81.7 81.7zM406.7 278c45.1 0 81.7 36.6 81.7 81.7s-36.6 81.7-81.7 81.7-81.7-36.6-81.7-81.7 36.6-81.7 81.7-81.7z m173.6 475.3H427.1c-45.1 0-81.7-39.4-81.7-84.5s36.6-84.5 81.7-84.5c0.9 0 1.7 0.2 2.6 0.2 9-35.3 40.9-61.5 79-61.5 38.2 0 70.2 26.2 79.1 61.7 41.5 3.8 74 41.6 74 84.1 0.1 45.1-36.4 84.5-81.5 84.5z m30.6-311.9c-45.1 0-81.7-36.6-81.7-81.7s36.6-81.7 81.7-81.7 81.7 36.6 81.7 81.7c-0.1 45.1-36.6 81.7-81.7 81.7zM764 574.1c-45.1 0-81.7-36.6-81.7-81.7s36.6-81.7 81.7-81.7 81.7 36.6 81.7 81.7-36.6 81.7-81.7 81.7z m77.4-429.4c2.4 0.6 59.6 15.4 46.2 83.1-0.7 3.3 0.4 6.7 2.7 9 2.4 2.3 5.7 3.3 9 2.7 2.4-0.5 59-11.4 77.7 62.7 1.2 4.6 5.4 7.7 10 7.5 0.7 0 1.4-0.1 2-0.3 5.3-1.4 8.6-6.7 7.2-12.1-17.3-68.5-64-78-87.4-78.3 7.5-75.5-62.1-93.5-62.8-93.6-5.3-1.3-10.7 1.9-12 7.3-1.2 5.3 2.1 10.7 7.4 12z" fill="#1296db" p-id="26348"></path>
</svg>
</template>
<script>
  import { onMounted } from 'vue';
export default {
   name:'headerLogo',
    props:{
        strokeWidth:{
            type:[String,Number],
            default:1
        },
        
        stroke:{
            type:String,
            default:'#000'
        }

    },


   
   setup(){

    
      onMounted(()=>{

          //获取svg的长度必须以path标签内的元素 
          //如果有多条线段的不规则图形就以最长的线段为基准
          //得出最长线段为6617
          const logo = document.getElementsByClassName('headerLogo_path')[0]
          console.log(logo.getTotalLength());
      }) 
   }
}
</script>

<style lang="scss" scoped>
     /*svg容器样式*/
    .header_logo{
        width: 100%;
        height: 100%;
    }

    /*svg图形线段样式*/
    .headerLogo_path{
        fill:none;
        animation: headerlogo_animation 5s linear infinite forwards;

    }

    /*svg图形描边动画*/
    @keyframes headerlogo_animation {
        /*整个图形不出现*/
        0%{
            stroke-dasharray: 6825;
            stroke-dashoffset: 6825;
        }
        /*在50%的时间内绘制完整个logo*/
        100%{
             stroke-dasharray: 6825;
             stroke-dashoffset: 0;
        }
        /*在剩余50%的时间内保持整个动画绘制完成状态*/
        100%{
            stroke-dasharray: 6825;
             stroke-dashoffset: 0;
             fill:#f40be2;

        }
    }
</style>





