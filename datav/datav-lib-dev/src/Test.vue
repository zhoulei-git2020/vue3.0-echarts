<template>
    <div class="test">
        <div> {{message}} </div>
        <div> doubleCount:{{doubleCount}} </div>
        <button @click="add">AddCount</button>
        
    </div>
</template>

<script>
import {computed,ref} from 'vue'
export default {
    name:'Test',
    setup(){
        const message = 'hello world'
        const count =   ref(1)
        const doubleCount = computed(()=> count.value *2)
        const add = ()=>{
            count.value++
        }
        return{
            message,
            doubleCount,
            add
        }
    }
}
</script>

<style lang="scss" scoped>
    .test{
       color:red 
    }
</style>

