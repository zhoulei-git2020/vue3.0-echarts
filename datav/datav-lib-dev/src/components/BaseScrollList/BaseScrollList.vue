<template>
    <div class="base-scroll-list" :id="id">
        <!-- 标题容器 -->
        <div class="base-scroll-list-header" 
        :style="{
            backgroundColor:actualConfig.headerBackground,
            height:`${actualConfig.headerHeight}px`
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
import  cloneDeep  from "loadsh/cloneDeep"
import assign from 'loadsh/assign'
export default {
    name:'BaseScrollList',
    props:{
        config:{
        type:Object,
        default:()=>({})
      }
    },
    setup(props){
        const id = `base-scroll-list${uuidv4()}`
        const {width,height} = useScreen(id)
        const headerData = ref([])
        const headerStyle = ref([])
       
       //合并后的对象
       const actualConfig = ref([])

        //默认值对象
        const defaultConfig = {
            //标题数据,格式:['a','b','c']
            headerData:[],
            //标题文字样式,格式:[{},{},{}]
            headerStyle:[],
            //标题背景颜色
            headerBackground:'rgb(90,90,90)',
            //标题高度
            headerHeight:35,
            //标题是否展示序号
            headerIndex:false,
            //显示序号需要展示的内容
            headerIndexContent:'#',
            //显示序号需要展示的内容样式
            headerIndexStyle:{
                width:'50px'
            }
        }
        
        //用于存放每一列的宽度
        const columnWidth = ref([])

        const handleHeader = (config)=>{
            const _headerData = cloneDeep(config.headerData)
            const _headerStyle = cloneDeep(config.headerStyle)
           //判断header元素大小是否为空
            if(_headerData.length === 0){
               return
           }
           if (config.headerIndex){
            _headerData.unshift(config.headerIndexContent)
            _headerStyle.unshift(config.headerIndexStyle)
           }

           //动态计算header中每一列的宽度 
           const avgWidth = width.value/_headerData.length  
           //动态定义一个数组，数组的长度和_headerData.length相同
           const _columnWidth = new Array(_headerData.length).fill(avgWidth)
           columnWidth.value = _columnWidth
           console.log(columnWidth.value)

           headerData.value = _headerData
           headerStyle.value = _headerStyle
        }

        onMounted(()=>{
            //将传入的值和默认值进行合并
           const _actualConfig = assign(defaultConfig,props.config)
          
           
           handleHeader(_actualConfig)
           actualConfig.value = _actualConfig
        })

        return{
            id,
            headerData,
            headerStyle,
            actualConfig,
            columnWidth,
            
            


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