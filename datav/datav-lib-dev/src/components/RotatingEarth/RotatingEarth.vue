<template>
   <div class="rotating-earth">
       <VueEcharts
        :options="options"
       />
   </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import 'echarts-gl'
const ROOT_PATH = './'
export default {
    name:'RotatingEarth',
    setup(){
        const options = ref({})
        const update = ()=>{
            options.value ={
                globe:{
                    baseTexture:`${ROOT_PATH}assets/datav-gl-texture.jpg`, //基础纹理贴图
                    heightTexture:`${ROOT_PATH}assets/datav-gl-texture.jpg`, //高度纹理贴图
                    displacementScale:0.04, //地球顶点位置可以使地球更加立体
                    environment:`${ROOT_PATH}assets/star-bg.jpg`, //环境贴图
                    shading:'realistic',
                    realisticMaterial:{
                        roughness:0.6
                    },
                    postEffect:{
                        enable:true
                    },
                    light:{
                        main:{
                          intensity:4,   //主光源强度
                          shadow:true,   //主光源是否有投射阴影
                        },
                        ambient:{
                           intensity:1
                        }
                    }

                }
            }
        }
        onMounted(update)
         return{
             options
         }
    }
}
</script>

<style lang="scss" scoped>
   .rotating-earth{
       width:100%;
       height:100%;
   }
</style>