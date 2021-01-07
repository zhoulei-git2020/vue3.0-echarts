<template>
    <div class="base-scroll-list" :id="id">
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
                v-for="(headerItem,i) in headerData"
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
import {onMounted,ref} from 'vue'
import {v4 as uuidv4} from 'uuid'
import useScreen from '../hooks/useScreen'
import  cloneDeep  from "loadsh/cloneDeep";
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
        },
        //标题是否展示序号
        headerIndex:{
            type:Boolean,
            default:false
        },
        headerIndexContent:{
            type:String,
            default:"#"
        },

        headerIndexStyle:{
            type:Object,
            default:{}
        }
        

 
    },
    setup(props){
        const id = `base-scroll-list${uuidv4()}`
        const {width,height} = useScreen(id)
        const headerData = ref([])
        const headerStyle = ref([])
        //判断header元素大小是否为空
        const handleHeader = ()=>{
            const _headerData = cloneDeep(props.header)
            const _headerStyle = cloneDeep(props.headerStyle)
            console.log(_headerData);
            if(_headerData.length === 0){
               return
           }
           if (props.headerIndex){
            _headerData.unshift(props.headerIndexContent)
            _headerStyle.unshift(props.headerIndexStyle)
           }
           headerData.value = _headerData
           headerStyle.value = _headerStyle
        }

        onMounted(()=>{
           handleHeader()
           
        })

        return{
            id,
            headerData,
            headerStyle
        } 
    }

   

}
</script>


<style lang="scss" scoped>
    .base-scroll-list{
       /*宽高设为100% 交给父给容器确定*/
        width: 100%;
        height: 100%;

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