   
<template>
    <div class="test">
        <div> {{message}} </div>
        <div> doubleCount:{{doubleCount}} </div>
        <button @click="add">AddCount</button>
        <svg width="30" height="30"  style="color:black">
            <use href="#more"></use>
        </svg>
        <svg width="0" height="0" viewBox= "0 0 100 100">
        <defs>
            <symbol id="more" viewBox="0 0 100 100">
                <circle r="5" cx="20" cy="25" fill="currentColor"/>
                <circle r="5" cx="20" cy="50" fill="currentColor"/>
                <circle r="5" cx="20" cy="75" fill="currentColor"/>
                <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor"></line>
                <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor"></line>
                <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor"></line>
            </symbol>
        </defs>
      </svg>
    </div>
</template>

<script>
import {computed,ref} from 'vue'
 /* eslint-disable */
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