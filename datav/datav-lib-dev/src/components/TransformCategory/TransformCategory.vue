<template>
  <div class="country-category">
    <div
      class="category"
      v-for="(item,index) in data" :key="item"
      @click="onClick(index)"
      @mouseenter="onMouseIn(index)"
      @mouseleave="onMouseOut(index)"
      @mousemove="onMouseIn(index)"
    >
      <div class="selected" v-if="index === selected" :style="{background:color[0]}">
         {{item}} 
      </div>
      <div class="hovered" v-else-if="index === hover" :style="{background:color[1]}">
         {{item}}
      </div>
      <div v-else>
         {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import {ref,onUnmounted,onMounted} from 'vue'
  export default {
    name: 'TransformCategory',
    props: {
      data: Array,
      color: {
        type: Array,
        default() {
          return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
        }
      }
    },
    setup(props) {
        const selected = ref(0)//当前被选中的元素的编号默认从第0号元素开始切换
        const hover = ref(-1) //创建hover元素
        let task
        //点击事件
        const onClick = (index) =>{
            //将鼠标点击区域的索引传入，将selected的值修改成鼠标点击的索引值
            selected.value = index  
        }

        const onMouseIn = (index) =>{
            hover.value = index
        }

        const onMouseOut = () =>{
            hover.value = -1
        }

        const update = ()=>{
            task && clearInterval(task) //线判断task是否存在，存在则清除定时器
            task = setInterval(()=>{
                //首先判断selected的值是否大于传入数组的元素个数
                if(selected.value +1 > props.data.length -1){
                  //将selected的值置为0
                  selected.value = 0 
                }else{
                  selected.value += 1
                }   
            },2000)  
        }

        onMounted(update)

        onUnmounted(() => task && clearInterval(task))

        return{
            selected,
            onClick,
            onMouseIn,
            hover,
            onMouseOut,
        }

    }
  }
</script>

<style lang="scss" scoped>
  .country-category {
    display: flex;
    width: 100%;
    height: 100%;

    .category {
      flex: 1;
      background: rgb(53, 57, 65);
      font-size: 24px;
      color: rgb(144, 160, 174);

      .hovered {
        background: rgb(80, 80, 80);
      }

      .selected {
        background: rgb(140, 160, 173);
        color: #fff;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>