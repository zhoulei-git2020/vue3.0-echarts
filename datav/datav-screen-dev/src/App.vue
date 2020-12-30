<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Loading 
      width="100"
      height="100"

      duration='2'
    > 
    <div style="font-size:10px;color:red">
      数据加载中，，.
    </div>
    
    </Loading>

    <div style="width:50%; background:#333">

          <flybox starDuration=6 starLength=100>
            <div>111</div>
            <div>222</div>
            <div>333</div>
            <div>444</div>
            <div>555</div>
            <div>666</div>
            <div>666</div><div>666</div>
          </flybox>
        
    </div>

    <div >
     <container/>
    </div>
        



  </div>
  <!-- <router-view/> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
