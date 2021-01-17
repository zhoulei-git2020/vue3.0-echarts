<template>
    <div class="base-scroll-list" :id="id">
        <!-- 标题容器 -->
        <div class="base-scroll-list-header" 
        :style="{
            backgroundColor:actualConfig.headerBackground,
            height:`${actualConfig.headerHeight}px`,
            fontSize:`${actualConfig.headerFontSize}px` ,
            color:`${actualConfig.headerColor}` 
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
                 :align="aligns[i]"
                 
            >   
            </div>
        </div>

         <!-- 内容展示容器 -->
        <div
            class="base-scroll-list-rows-wrapper"
            :style="{
              height:`${height - actualConfig.headerHeight}px` 
            }"
        >
                <!-- 行内容 -->
            <div 
                class="base-scroll-list-rows"
                v-for="(rowData , index) in currentRowsData"
                :key="rowData.rowIndex"
                :style="{
                    height:`${rowHeight[index]}px`,
                    lineHeight:`${rowHeight[index]}px`,
                    backgroundColor:rowData.rowIndex % 2 === 0 ? rowBg[1] :rowBg[0],
                    fontSize:`${actualConfig.rowFontSize}px`,
                    color:`${actualConfig.rowColor}`  
                }"
            >
            <!-- 列内容 -->
                <div
                    class="base-scroll-list-columns"
                    v-for="(colData,colIndex) in rowData.data"
                    :key="colData+colIndex"
                    :style="{
                        width: `${columnWidth[colIndex]}px`,  
                        ...rowStyle[colIndex]           
                    }"
                    v-html="colData"
                    :align="aligns[colIndex]"
                >
                    
                </div>
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
            //行背景颜色
            rowBg:[],

            //居中方式
            aligns:[],

            //批量更改标题的文字大小
            headerFontSize:28,

            //批量修改每页内容的文字大小
            rowFontSize:25,

            //标题文字颜色
            headerColor:'',

            //内容文字颜色
            rowColor:'',

            //移动的位置
            moveNum:1,

            //动画播放延时时间
            duration:2000
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

       //每页的数据
       const rowsData = ref([])

       //真正需要渲染的数据
       const currentRowsData = ref([])

       //渲染动画指针指向当前展示的动画元素
       const currentIndex = ref(0)

       //每行的高度
       const rowHeight = ref([])

        //展示数据的行数
       const rowNum = ref(defaultConfig.rowNum)

       //行样式
      const rowStyle = ref([])

      //行背景颜色
      const rowBg = ref([])

      //居中方式
      const aligns = ref([])

      //行高
      let avgHeight 


       const handleHeader = (config)=>{
            const _headerData = cloneDeep(config.headerData)
            const _headerStyle = cloneDeep(config.headerStyle)
            const _rowsData = cloneDeep(config.data)
            const _rowStyle = cloneDeep(config.rowStyle)
            const _aligns = cloneDeep(config.aligns)
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
            _aligns.unshift('center') //默认序号列居中
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
           rowsData.value = _rowsData.map((item,index)=>({
               data:item,
               rowIndex:index
           }))
           
          
           rowStyle.value = _rowStyle
           aligns.value = _aligns
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
                avgHeight = unusedHeight/rowNum.value
            
           rowHeight.value = new Array(rowNum.value).fill(avgHeight)

           if(config.rowBg){
               rowBg.value = config.rowBg
           }

        } 
        
        //过度折叠动画
       const startAnimation = async ()=>{
        const config = actualConfig.value               //拿到定制的数据
        const {data,rowNum,moveNum,duration} = config                    //取出data和rowNum
        const totalLength = data.length                 //判断data的长度
        if(totalLength<rowNum) return                   //判断数据的行数是否小于每页展示的行数如果是则退出无需动画展示
        const index = currentIndex.value                //拿到当前动画指针
        const _rowsData = cloneDeep(rowsData.value)     //深拷贝每页数据
        //将数据头尾连接  
        const rows = _rowsData.slice(index)
        rows.push(..._rowsData.slice(0,index))
        currentRowsData.value = rows
        //先将所有行的高度还原
        rowHeight.value = new Array(totalLength).fill(avgHeight)

        const waitTime = 500
        await new Promise(resolve =>setTimeout(resolve,waitTime))
        //将moveNum的行高度设为0
        rowHeight.value.splice(0,moveNum,...new Array(moveNum).fill(0))

        currentIndex.value += moveNum 
        //是否到达最后一组数据
        const isLast = currentIndex.value - totalLength
        if(isLast >=0){
           currentIndex.value  = isLast
        }
        
        //线程sleep
        //延时操作
        await new Promise(resolve=>setTimeout(resolve,duration-waitTime))
        startAnimation() 
       } 


        onMounted(()=>{
            //将传入的值和默认值进行合并
           const _actualConfig = assign(defaultConfig,props.config)
           //赋值rowsData
           rowsData.value = _actualConfig.data || []
           handleHeader(_actualConfig)
           handleRows(_actualConfig)
           actualConfig.value = _actualConfig
            //展示动画效果
           startAnimation()
           
        })

        return{
            id,
            headerData,
            headerStyle,
            actualConfig,
            columnWidth,
            rowsData,
            rowHeight,
            rowStyle,
            rowBg,
            aligns,
            currentRowsData,
            height
         
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
        .base-scroll-list-rows-wrapper{
            overflow: hidden; /*超出部分隐藏*/   
            .base-scroll-list-rows{
                display: flex;
                align-items: center;
                transition: all 0.3s linear;
                .base-scroll-list-columns{
                    
                
                }
            }
        }
    }
</style>