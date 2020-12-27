   
<template>
    <div class="test">
        <div> {{message}} </div>
        <div> doubleCount:{{doubleCount}} </div>
        <button @click="add">AddCount</button>
        <svg width="30" height="30"  style="color:black">
          
             <use href="#component"></use>
        </svg>
        <svg width="0" height="0" viewBox= "0 0 1024 1024">
        <defs>
            <symbol id="more" viewBox="0 0 100 100">
                <circle r="5" cx="20" cy="25" fill="currentColor"/>
                <circle r="5" cx="20" cy="50" fill="currentColor"/>
                <circle r="5" cx="20" cy="75" fill="currentColor"/>
                <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor"></line>
                <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor"></line>
                <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor"></line>
            </symbol>
            <symbol id="component" viewBox="0 0 1024 1024">
                <path d="M516.757333 149.333333a120.896 120.896 0 0 1 114.005334 161.173334h104.064a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-87.104c0-15.701333 11.989333-28.629333 27.306666-30.08l2.922667-0.149334a90.666667 90.666667 0 0 0 4.394667-181.226666L264.896 512a30.229333 30.229333 0 0 1-30.08-27.306667L234.666667 481.749333v-107.242666a64 64 0 0 1 64-64h104.064a120.704 120.704 0 0 1-6.869334-40.32C395.861333 184.746667 431.274667 149.333333 516.757333 149.333333z m0 64a56.896 56.896 0 0 0-53.674666 75.861334l30.144 85.312H298.666667v77.184a154.730667 154.730667 0 0 1 5.162666 300.693333l-5.162666 1.258667V810.666667h436.16V374.528l-194.56-0.021333 30.144-85.333334A56.896 56.896 0 0 0 516.736 213.333333z" p-id="6468"></path>
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