   
<template>
    <div>
      
        <div class="container" >
            <svg width="440" height="440" viewBox="0 0 440 440">
                <circle cx="220" cy="220" r="200"  stroke-width="20" stroke="#d1d3d7" fill="none"></circle>

                <!-- 2*3.1415926*180 = 1131 -->
                 <circle class="circle" cx="220" cy="220" r="200" stroke-width="20" stroke="#00a5e0" fill="none"
                    transform = "matrix(0 -1 1 0 0 440)"
                 ></circle>

            </svg>
        </div> 
    </div>
    
</template>

<script>
import {computed,ref} from 'vue'
 /* eslint-disable */
export default {
    name:'SvgAnimation',
    

}
</script>

<style lang="scss" scoped>
   .container{ 
    svg{
        border:1px solid #000;
       
      }
     
   }
   .circle{
       
        animation: circle 3s linear infinite; 
   }
   @keyframes circle {
       from{
           stroke-dasharray: 0 1257;
       }
       to{
          stroke-dasharray: 1257 0;
       }
   }

</style>