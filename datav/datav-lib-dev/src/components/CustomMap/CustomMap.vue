<template>
    <div style="width:100%;height:100%">
        <VueEcharts
            :options="options"
        />
    </div>
</template>

<script>
import {ref,onMounted,onUnmounted} from 'vue'
import Echarts from 'echarts'
import cloneDeep from 'loadsh/cloneDeep'

export default {
    name:'CustomMap',

    setup(){
        const options = ref({})
        let timer = null
        const update = () =>{
            fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
            .then(response=>response.json())
            .then(data =>{
                Echarts.registerMap('js',data) //注册地图
                const center = []
                data.features.forEach(item => {
                   if(item.properties) {
                      center.push({
                          key:item.properties.name,
                          value:item.properties.center
                      }) 
                   }
                });
                options.value = {
                    visualMap:{
                        show:true, //标识是否展示
                        max:100,    //表示最大值100
                        seriesIndex:[0],//使用第几组数据
                        inRange:{
                            color:['#a5dcf4','#006edd']
                        }

                    },
                     geo:[{
                        map:'js',//使用自定义地图
                        zoom:1,   //默认地图放大倍数
                        roam:false,//启动鼠标滚轮地图缩放
                        //zoom放大系数调节
                        scaleLimit:{
                            min:0, //最小为0
                            max:3,  //最大为3
                        },
                        itemStyle:{
                           areaColor:'#013c62', //背景颜色
                           shadowColor:'#013c62',//阴影色
                           shadowBlur:20, //阴影长度
                           shadowOffsteX:-5, //阴影位移X轴
                           shadowOffsetY:15,//阴影Y轴向上偏移10像素
                        }
                    }],
                    series:[{
                        type:'map',
                        mapType:'js',
                        zoom:1,
                        roam:false,
                        label:{
                            show:true,
                            color:'#fff',
                            emphasis:{
                                color:'#fff',
                                show:false

                            }
                        },
                        itemStyle:{
                            //边框默认状态
                           normal:{
                               borderColor:'#2980b9',
                               borderWidth:1,
                               areaColor:'12235c' 
                           } ,
                            //边框高亮状态
                            emphasis:{
                               areaColor:'#fa8c16',
                               borderWidth:0,
                               
                            },
                        },
                         //绑定数据
                            data: center.map(centerItem=>{
                                const value = Math.random()*100
                                return{
                                    name:centerItem.key,
                                    value:value
                                }
                            }),
                    },
                    //地图报警点绘制
                    {
                        type:'effectScatter',
                        data:[],
                        coordinateSystem:'geo',
                        symbolSize:16, //散点大小
                        itemStyle:{
                            color:'#feae21'
                        },
                        label:{
                            //默认的展示形式
                            normal:{
                                show:true,//是否展示
                                position:'top',//展示位置
                                formatter:function(params){
                                    console.log(params);
                                    return`{titel|${params.data.city}}\n{content|发生XXX事件}`
                                },
                                backgroundColor:'rgba(254,174,33,.8)',
                                padding:[0,0],
                                borderRadius:3,
                                lineHeight:32,
                                color:'#f7fafb',
                                rich:{
                                  title:{
                                      padding:[0,10,10,10],
                                      color:'',
                                  },
                                  content:{
                                      padding:[10,10,0,10],
                                      color:'#fff'
                                  }
                                }
                            },
                            //鼠标选中高亮展示形式
                            emphasis:{
                                show:true,
                            }
                        }
                    },
                    {
                        type:'effectScatter',
                        data:[],
                        coordinateSystem:'geo',
                        symbolSize:16, //散点大小
                        itemStyle:{
                            color:'#e93f42'
                        },
                        label:{
                            //默认的展示形式
                            normal:{
                                show:true,//是否展示
                                position:'top',//展示位置
                                formatter:function(params){
                                    console.log(params);
                                    return`{titel|${params.data.city}}\n{content|发生XXX事件}`
                                },
                                backgroundColor:'rgba(233,63,66,.9)',
                                padding:[0,0],
                                borderRadius:3,
                                lineHeight:32,
                                color:'#ffffff',
                                rich:{
                                  title:{
                                      padding:[0,10,10,10],
                                      color:'#fff',
                                  },
                                  content:{
                                      padding:[10,10,0,10],
                                      color:'#fff'
                                  }
                                }
                            },
                            //鼠标选中高亮展示形式
                            emphasis:{
                                show:true,
                            }
                        }
                    },
                    {
                        type:'effectScatter',
                        data:[{value:center[0].value,city:center[0].key}],
                        coordinateSystem:'geo',
                        symbolSize:16, //散点大小
                        itemStyle:{
                            color:'#08baec'
                        },
                        label:{
                            //默认的展示形式
                            normal:{
                                show:true,//是否展示
                                position:'top',//展示位置
                                formatter:function(params){
                                    console.log(params);
                                    return`{titel|${params.data.city}}\n{content|发生XXX事件}`
                                },
                                backgroundColor:'rgba(8,186,236,.9)',
                                padding:[0,0],
                                borderRadius:3,
                                lineHeight:32,
                                color:'#ffffff',
                                rich:{
                                  title:{
                                      padding:[0,10,10,10],
                                      color:'#fff',
                                  },
                                  content:{
                                      padding:[10,10,0,10],
                                      color:'#fff'
                                  }
                                }
                            },
                            //鼠标选中高亮展示形式
                            emphasis:{
                                show:true,
                            }
                        } 
                    }
                    ],
                }
                //测试：随机展示事件信息
                timer = setInterval(()=>{
                    const _options = cloneDeep(options.value)
                   //初始化数组
                   for(let i = 1; i < 4; i++){
                       _options.series[i].data = []
                   }
                    //生成城市随机数
                    const Citylength = center.length
                    const cityIndex = Math.floor(Math.random()*Citylength)
                    const eventIndex = Math.floor(Math.random()*3)+1
                    _options.series[eventIndex].data = [{
                        city:center[cityIndex].key,
                        value:center[cityIndex].value
                    }]

                    options.value = _options
                },2000)

            } )
            
            
        }
        onMounted(update)
        onUnmounted(()=>timer && clearInterval(timer))

         return{
            options 
         }
    }
}
</script>

<style lang="scss" scoped>
    
</style>