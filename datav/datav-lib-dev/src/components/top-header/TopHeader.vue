<template>
    <div class="top_header">
       <!-- <img class="logo" src="http://www.youbaobao.xyz/resource.imooc.png"> -->
       
       <!-- 使用headerLogo 组件 SVG图标作为logo -->
       <div class="logo-wrapper">
           <headerLogo stroke="#f40be2" stroke-width="10"/>
       </div>

        <!-- 标题文字 -->
        <div class="logo-text">
                 <!-- 中文标题 -->
                <div class="cn-text">物联网传感器数据大盘</div>
                <!-- 英文标题 -->
                <div class="en-text">Internet of things sensor data market</div>
        </div>
    </div>
    
</template>

<script>

 
export default {
   
   name:'topHeader',
   
      
   props:{

    },
}
</script>

<style lang="scss" scoped>
    /*top_header布局*/
    .top_header{
        display: flex; /*左右布局*/
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgb(36,31,32);
        padding: 0 64px;
        box-sizing: border-box;

        /*svg logo图标容器样式样式*/
        .logo-wrapper{
            width: 160px;
            height: 160px;
        }

        /*logo样式*/
        .logo{
            width: 120px;
            height: 120px;
        }
        /*logo文字样式*/
        .logo-text{
            flex: 1; /*充满余下整个空间*/
            margin-left: 40px; /*距离左边40px*/

            /*中文标题样式*/
            .cn-text{
                color: rgb(255,255,255);/*文字颜色*/
                font-weight: bold; /*文字粗体*/
                font-size: 60px;/*文字大小*/
                letter-spacing: 2px;/*文字间距*/

            }

            /*英文标题样式*/
            .en-text{
                color:rgb(255,255,255);
                font-size: 35px;    
                letter-spacing: 2px;

            }
        }

    }



</style>



