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
                :style="{
                    width: `${columnWidth[i]}px`,
                    ...headerStyle[i]                 
                    }"
                 v-html="headerItem"
            >   
            </div>
        </div>

        <!-- 内容展示容器 -->

        <!-- 行内容 -->
        <div 
            class="base-scroll-list-rows"
            v-for="(rowData , rowIndex) in rowsData"
            :key="rowIndex"
            :style="{
                height:`${rowHeight[rowIndex]}px`,
                backgroundColor:rowIndex % 2 === 0 ? 'red' : 'yellow'
            }"
        >
        <!-- 列内容 -->
            <div
                class="base-scroll-list-columns"
                v-for="(colData,colIndex) in rowData"
                :key="colData+colIndex"
                :style="{
                    width: `${columnWidth[colIndex]}px`,  
                    ...rowStyle[colIndex]           
                }"
                v-html="colData"
            >
                
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted,ref} from 'vue'
import {v4 as uuidv4} from 'uuid'
import useScreen from '../hooks/useScreen'
import  cloneDeep  from "loadsh/cloneDeep"
import assign from 'loadsh/assign'

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
            //显示序号列标题样式
            headerIndexStyle:{
                width:'50px',
                color:'yellow'  
            },
            //数据项，二维数组
            data:[],
            rowNum:10,
            //行样式
            rowStyle:[],
            //序号列内容样式
            rowIndexStyle:{
               width:'50px', 
            },
        }


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
       //用于存放每一列的宽度
       const columnWidth = ref([])

       //每一行的渲染数据
       const rowsData = ref([])

       //每行的高度
       const rowHeight = ref([])

        //数据的行数
       const rowNum = ref(defaultConfig.rowNum)

       //行样式
      const rowStyle = ref([])

       const handleHeader = (config)=>{
            const _headerData = cloneDeep(config.headerData)
            const _headerStyle = cloneDeep(config.headerStyle)
            const _rowsData = cloneDeep(config.data)
            const _rowStyle = cloneDeep(config.rowStyle)
           //判断header元素大小是否为空
            if(_headerData.length === 0){
               return
           }
           if (config.headerIndex){
            _headerData.unshift(config.headerIndexContent)
            _headerStyle.unshift(config.headerIndexStyle)
            _rowStyle.unshift(config.rowIndexStyle)
            _rowsData.forEach((rows,index) =>{
                rows.unshift(index+1)
            })
           }

           //动态计算header中每一列的宽度 
            
            let usedWidth = 0 //获取定义过的宽度
            let usedColumnNum = 0 //获取定义过的宽度列数的个数

            //遍历_headerStyle的每个元素把定义过的宽度综合和列数个数记录下来
            _headerStyle.forEach(style => {
                if(style.width){
                    usedWidth += +style.width.replace('px','')
                    usedColumnNum ++
                }
            });
            //(总宽度-定义过的宽度综合) / (列数总个数-定义过的列数) = 剩余的宽度除以剩余的列数
           const avgWidth = (width.value -usedWidth) /(_headerData.length - usedColumnNum)  
           //动态定义一个数组，数组的长度和_headerData.length相同
           const _columnWidth = new Array(_headerData.length).fill(avgWidth)
           
            _headerStyle.forEach((style,index) => {
                if(style.width){
                    const headerWidth = +style.width.replace('px','')
                    _columnWidth[index] = headerWidth
                }
            });


           
          
           columnWidth.value = _columnWidth
           headerData.value = _headerData
           headerStyle.value = _headerStyle
           rowsData.value = _rowsData
           rowStyle.value = _rowStyle
        }

        //动态计算行数据高度
       const handleRows = (config) =>{

           const {headerHeight} = config
           rowNum.value = config.rowNum
           const unusedHeight = height.value - headerHeight
           //如果rowNum的值大于实际数据长度则以实际数据长度为准
            if(rowNum.value > rowsData.value.length){
                 rowNum.value = rowsData.value.length
            }
               const avgHeight = unusedHeight/rowNum.value
            
           rowHeight.value = new Array(rowNum.value).fill(avgHeight)

        } 

        onMounted(()=>{
            //将传入的值和默认值进行合并
           const _actualConfig = assign(defaultConfig,props.config)
           //赋值rowsData
           rowsData.value = _actualConfig.data || []
           handleHeader(_actualConfig)
           handleRows(_actualConfig)
           actualConfig.value = _actualConfig
           
        })

        return{
            id,
            headerData,
            headerStyle,
            actualConfig,
            columnWidth,
            rowsData,
            rowHeight,
            rowStyle
            
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
        .base-scroll-list-rows{
            display: flex;
            align-items: center;
            .base-scroll-list-columns{
                
                font-size: 28px;
            }
        }

    }
</style>