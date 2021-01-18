<template>
    <div  class="SalesList">
        <BaseScrollList
          :config="config"
        />
    </div> 
</template>

<script>
import {ref,onMounted,watch} from 'vue'
export default {
    name:'SalesList',
    props:{
      data: Array
    },

    setup(props){
      const config = ref({})
      const update = ()=>{
            const data = []
            const aligns = []
            const headerIndexData = []
            
            
            
            
            
            
            
           
            
            for(let i = 0; i < props.data.length; i++){
                data[i] = []
               
                if(i % 2 === 0){
                  headerIndexData[i] = `<div
                                          style="width:100%;
                                          height:100%;
                                          display:flex;
                                          align-items:center;
                                          background:rgb(40,40,40);
                                          justify-content:center;"
                                          >
                                            <div
                                              style="width:15px;
                                              height:15px;
                                              background:rgb(72,122,72);
                                              border-radius:50%;
                                              border:1px solid #fff;"
                                            />
                                        </div>`
                }else{
                  headerIndexData[i] = `<div
                                         style="width:100%;
                                         height:100%;
                                         display:flex;
                                         align-items:center;
                                         background:rgb(40,40,40);
                                         justify-content:center;"
                                        >
                                          <div 
                                            style="width:15px;
                                            height:15px;
                                            background:rgb(38,88,104);
                                            border-radius:50%;
                                            border:1px solid #fff;"
                                          />
                                        </div>`
                }

                for (let j = 0; j < 5; j++){
                   aligns.push('center')
                   let text = ''
                   switch(j){
                       case 0 :
                        text = props.data[i].order
                       break
                       case 1 :
                        text = props.data[i].shop
                       break
                       case 2 :
                        text = props.data[i].rider
                       break
                       case 3 :
                        text = props.data[i].newShop
                       break
                       case 4 :
                        text = props.data[i].avgOrder
                       break 
                       default:
                   }

                   if(j % 2 ===0){
                    data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`)
                        
                   }else{
                   data[i].push(`<div>${text}</div>`)
                   }
                   
                }

            }


            config.value = {
            data,
            //rowStyle,
            headerData :['当前时间','当前湿度','当前亮度','当前温度','当前氧含量'], //表头内容
            headerFontSize : 20,//表头字大小
            headerBackground:'rgb(80,80,80)',//表头背景色
            headerIndexContent:'',//表头序号列内容定制
            headerColor :'#fff' ,//表头序号列文本颜色
          //headerIndexStyle:{width:'80px',color:'red'},//表头序号列文字样式定制
          //headerStyle : [{color:'red',width:'150px'}] //表头文字样式
            headerHeight:55,//表头高度
            headerIndex:true,
            rowNum:11,//一次展示多少条数据
            rowBg : ['rgb(40,40,40)','rgb(55,55,55)'], //内容背景颜色
            rowColor :'#fff',//批量更改每页内容的文字颜色
          //rowStyle : [{},{color:'red'}] //列内容样式
            rowFontSize : 24,//批量修改每页内容的文字大小
            aligns,//居中方式
            headerIndexData
            }
          }
            onMounted(()=>{
              update()
            })

              watch(()=>props.data,()=>{
              update()
            })

     

      return{
        config
      }
    }
}
</script>


<style lang="scss" scoped>
  .SalesList{
    width: 100%;
    height: 100%;
  }
</style>