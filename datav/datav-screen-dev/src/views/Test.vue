<template>
    <div>
        <BaseScrollList
          :header="header"
          :headerStyle="headerStyle"

        />
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
      const header = ref([])
      const headerStyle = ref([])
      header.value = ['姓名','性别','年龄','身高',]
      headerStyle.value = [{color:'red'}]
      return{
        header,
        headerStyle
      }
    }
}
</script>


<style lang="scss" scoped>
 
</style>