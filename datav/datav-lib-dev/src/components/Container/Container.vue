<template>
    <div id="container" :ref="refName">
        <slot></slot>
    </div>
</template>

<script>
import {ref,getCurrentInstance,onMounted} from 'vue'
export default {
    name:'container',
    props:{
        //用于接收数据大屏的宽高
        options:Object 
    }, 
    setup(ctx){
        const refName = 'Container'

        const width = ref(0)
        const height = ref(0)
        //组件视口宽
        const originalWidth = ref(0)
        //组件视口高
        const originalHeight = ref(0)
        let context,dom  
        const init = ()=>{
             dom =  context.$refs[refName]
            if(ctx.options && ctx.options.width && ctx.options.height){ //判断是否传入宽高
                //将传入的宽高记录下来
                width.value = ctx.options.width 
                height.value = ctx.options.height
            }else{
                //如果用户没有传入宽高就从dom去拿
                width.value = dom.clientWidth
                height.value = dom.clientHeight
            }

            //判断是否拿到真实的视口宽高，没有拿到则赋值
            if(!originalWidth.value || !originalHeight.value){
                //传入真实视口的宽
                originalWidth.value = screen.width
                //传入真实视口的高
                originalHeight.value = screen.height
            }
        }

        const updateSize = () =>{
            //判断当前有没有宽高
            if(width.value && height.value){
                dom.style.width = `${width.value}px`
                dom.style.height = `${height.value}px`
            }else{
                dom.style.width = `${originalWidth.value}px`
                dom.style.height = `${originalHeight.value}px`
            }
        }

        const updateScale = () =>{
         //拿到当前实际视口的宽高 
         c  


        //创建变量计算出宽度压缩比和高度压缩比
            const widthScale = 1
            const heightScale = 1


            dom.style.transform = `scale(${widthScale},${heightScale})`
        }



        onMounted(() => {
             context =getCurrentInstance().ctx
            //第一步调用init方法拿到视口的尺寸
             init()

            //视口压缩算法
            updateScale()

            //更新窗口大小
             updateSize()
            

        })
        return {
            refName
        }
    }
}
</script>

<style lang="scss" scoped>

 

</style>