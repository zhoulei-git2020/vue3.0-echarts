import {ref,onMounted,nextTick} from 'vue'



export default function useScreen(id){
        const width = ref(0)
        const height = ref(0)
        let dom 
    onMounted(()=>{
         dom = document.getElementById(id)
        //从dom去拿宽高
        width.value = dom.clientWidth
        height.value = dom.clientHeight

       
    })
    

    return{
        width,
        height
    }
}