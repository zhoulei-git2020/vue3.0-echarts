<template>
    <v-chart :options="options" />
</template>

<script>
import 'echarts/extension/bmap/bmap'
const testPoint = [{
  name: '海门',
  value: [121.15, 31.89, 80]
}, {
  name: '南京',
  value: [118.78, 32.04, 100]
},]
const testPoint2 = [{
    name: '商务花园',
    value:[117.08641,30.546745,180]
},{
    name: '华中路第三小学',
    value:[117.07607,30.514587,160]
},{
    name: '淮北职大',
    value:[116.797628,33.951612,150]
},{
    name: '花亭新村',
    value:[117.050333,30.537634,140]
},]
export default {
    data(){
        return {
            options: {

            }
        }
    },
    mounted(){
        this.options = {
            /* eslint-disable */
            title:{
                    text:'全国宅男分布统计大盘',
                    subtext:'宅男数量统计',
                    sublink: 'http://www.bilibili.com',
                    left:'center'
                },
            bmap:{
                key:'6sV0udkNpPBbSwU2TnByzKmqwjefNIgf', //激活码
                center:[104.114129, 37.550339], //坐标
                zoom:6,   //默认放大倍数
                roam:true, //允许鼠标滚轮缩放
                mapStyle:{
                 styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                    }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                    }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                    }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                    }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                    }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                    }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                    }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                    }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                    }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                    }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                    }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                    }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                    }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                    }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                    }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                    }] 
                }
            },
            series:[
                {
                name:'宅男分布数',
                type:'scatter',
                coordinateSystem:'bmap',
                data:testPoint,
                encode:{
                    value:2
                },
                itemStyle:{ //点的颜色
                   color:'purple' ,
                },
                symbolSize: function(val){ //更改圆点的大小
                    return val[2] / 10
                },
                label:{
                    show:false,//原点上面显示文本
                    position:'right', //文本在圆点右边显示
                    formatter:'{b}'//显示name
                },
                emphasis:{ //鼠标移动上去显示文本
                    label:{
                       show:true 
                    }
                }
            },
            {
                name:'top 2',
                type:'effectScatter',
                coordinateSystem:'bmap',
                data:testPoint2,
                symbolSize:function(val){
                    return val[2] / 10
                },
                encode:{
                    value:2
                },
                label:{
                     formatter:function(v){
                         return `${v.data.name} - ${v.data.value[2]}`
                     },
                     position:'right',
                     show:true
                },
                hoverAnimation:true, //鼠标移动上去动画效果
                rippleEffect:{ //改变波纹效果
                    brushType:'stroke'
                },
                itemStyle:{
                    color:'purple', //颜色
                    shadowBlur:10, //阴影
                    shadowColor:'#333'//阴影颜色
                }

               
            }
            ],
            tooltip:{

            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>