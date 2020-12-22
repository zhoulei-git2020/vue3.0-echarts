<template>
    <ve-wordcloud :data="chartData" height="100%" srttings="chartSettings"/>
</template>

<script>
export default {
    data(){
       return{
          chartData:{
              columns:['name','value'],
              rows:[{
                  name:  '初音未来',
                  value: 100 * Math.random()
              },
              {
                 name:'小当家',
                 value:100 * Math.random()
              },
              {
                 name:'小浣熊',
                  value:100 * Math.random()
              },
              {
                 name:'康师傅',
                  value:100 * Math.random()
              },
              ]
          },
          chartSettings:{
              color:['rgba(97,2160,.7)'] //手动配色，例如数组有一个元素对应rows第一个元素的颜色
          }

       } 
    }
}
</script>

<style lang="scss" scoped>

</style>