<template>
  <div class="home"> 
      <container :options="{width:3840, height:2160}">
          <div class="test">111</div>
      </container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  },
  mounted(){
    window.addEventListener('resize',function(e){
      console.log(e);
    })
  }
}
</script>

<style lang="scss" scoped>
  .test{
    html,body,#app{
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }
</style>
