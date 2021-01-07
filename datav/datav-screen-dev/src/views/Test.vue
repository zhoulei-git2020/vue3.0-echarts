<template>
    <div  style="width:500px;height:400px;">
        <BaseScrollList
          :header="header"
          :headerStyle="headerStyle"
          :headerIndex = "true"

        />
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
      const header = ref([])
      const headerStyle = ref([])
      const headerIndex = ref(0)
      header.value = ['姓名','性别','年龄','身高',]
      headerStyle.value = [{color:'red'}]
      return{
        header,
        headerStyle,
        headerIndex
      }
    }
}
</script>


<style lang="scss" scoped>
 
</style>