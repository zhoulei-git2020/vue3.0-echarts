<template>
    <div  style="width:100%;height:100%;">
      <VueEcharts 
        :options="options" 
      />
    </div> 
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
 setup(){
    const options = ref({})
    const update = () =>{
      options.value = {
        baseOptions:{},
        options:[]
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
 
</style>