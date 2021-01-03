<template>
    <div id="container" :ref="refName" :style="style">
        <template v-if="ready">
            <slot></slot>
        </template>
    </div>
</template>

<script>
import {ref,getCurrentInstance,onMounted ,onUnmounted,nextTick} from 'vue'
import {debounce} from '../../utils/index'
export default {
    name:'container',
    props:{
        //用于接收数据大屏的宽高
        option:Object 
    }, 
    setup(ctx){
        const refName = 'Container'

        const width = ref(0)
        const height = ref(0)
        //组件视口宽
        const originalWidth = ref(0)
        //组件视口高
        const originalHeight = ref(0)
        const ready = ref(false)
        let context,dom,observer  
        const initSize = ()=> {
            return new Promise((resolve) => {
                nextTick( () => {
                    dom =  context.$refs[refName]
                    if(ctx.option && ctx.option.width && ctx.option.height){ //获取大屏的真实尺寸
                        //将传入的宽高记录下来
                        width.value = ctx.option.width 
                        height.value = ctx.option.height
                    }else{
                        //如果用户没有传入宽高就从dom去拿
                        width.value = dom.clientWidth
                        height.value = dom.clientHeight
                        }

                    //判断是否拿到画布宽高，没有拿到则赋值
                    if(!originalWidth.value || !originalHeight.value){
                        //传入真实视口的宽
                        originalWidth.value = window.screen.width
                        //传入真实视口的高
                        originalHeight.value = window.screen.height
                        
                        } 
                        resolve()
                    })
            })
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
         //拿到当前真实视口的宽高 
         const currentWidth = document.body.clientWidth
         const currentHeight = document.body.clientHeight 
         //获取大屏最终的宽高
         const realWidth = width.value || originalWidth.value
         const realHeight = height.value || originalHeight.value
        //创建变量计算出宽度压缩比和高度压缩比
         const widthScale = currentWidth/realWidth
         const heightScale = currentHeight/realHeight
         dom && ( dom.style.transform = `scale(${widthScale},${heightScale})`)
        }

        const onResize =  async(e)=>{
           
           await initSize()
            updateScale()
        }

            //建立监听事件
        const initMutationObserver = () => {
               
             const MutationObserver = window.MutationObserver 
             observer = new MutationObserver(onResize) //实例化传入initSize函数
             observer.observe(dom,{//开始监听传入dom元素指定监听规则
             attributes:true, //打开监听属性
             attributeFilter:['style'],//具体监听属性:style
             attributeOldValue:true
             })
        }
            //注销监听事件
        const removeMutationObserver = () =>{
             if(observer){
                 observer.disconnect()
                 observer.takeRecords()
                 observer = null
             }
        }
        onMounted( async () => {
             ready.value = false //不进行元素展示

             context =getCurrentInstance().ctx
            //第一步调用init方法拿到视口的尺寸
            await initSize()
            //更新窗口大小
             updateSize()
            //视口压缩算法
             updateScale()
            //锁定浏览器放大缩小
             window.addEventListener('resize',debounce(100,onResize))

             //启动监听事件
             initMutationObserver()

             //初始化完毕后进行元素展示
             ready.value = true
        })
        //销毁事件
        onUnmounted(()=>{
             window.removeEventListener('resize',onResize)
             removeMutationObserver()
             
        })
        return {
            refName,
            ready

        }
    }
}
</script>

<style lang="scss" >
    #container{
        position: fixed;
        top:0;
        left: 0;
        overflow: hidden;       
        transform-origin: left top; 
        z-index: 999;
    }
 

</style>