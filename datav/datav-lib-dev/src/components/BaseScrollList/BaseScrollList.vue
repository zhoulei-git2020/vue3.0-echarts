<template>
    <div class="base-scroll-list">
        <!-- 标题容器 -->
        <div class="base-scroll-list-header" 
        :style="{
            backgroundColor:headerBackground,
            height:`${headerHeight}px`
         }"
        >
            <!-- 标题每一列 -->
            <div 
                class="header-item base-scroll-list-text" 
                v-for="(headerItem,i) in header"
                :key="headerItem +i"
                :style="headerStyle[i]"
                 v-html="headerItem"
            >   
            </div>
        </div>

        <!-- 内容展示容器 -->
        <div class="base-scroll-list-rows"></div>
    </div>
</template>

<script>
export default {
    name:'BaseScrollList',
    props:{
        //标题数据,格式:['a','b','c']
        header:Array,
        //标题文字样式,格式:[{},{},{}]
        headerStyle:Array,
        //标题背景颜色
        headerBackground:{
          type:String,
          default:'rgb(90,90,90)'
        },
        //标题高度
        headerHeight:{
          type:[String,Number],
          default:'50'
        }
    },
    setup(ctx){


      
      
    }

   

}
</script>


<style lang="scss" scoped>
    .base-scroll-list{
        /*默认文本样式*/
        .base-scroll-list-text{
            padding: 0 10px;
            white-space: nowrap; /*文本不换行*/
            overflow: hidden;/*多出部分隐藏*/
            text-overflow: ellipsis;/*文本超出部分用省略号代替*/
            box-sizing: border-box;

        }
        .base-scroll-list-header{
            display: flex; /*水平布局*/
            font-size: 15px; /*字体大小*/
            align-items: center;/*垂直居中*/
            .header-item{

            }
        }
    }
</style>