<template>
  <div class="sales-view">
     <el-card shadow='hover'>
        <template v-slot:header> 
            <div class="menu-wrapper">
                <el-menu
                mode="horizontal"
                :default-active="activeIndex"
                @select="onMenuSelect"
                >
                  <el-menu-item index="1">销售额</el-menu-item>
                  <el-menu-item index="2">访问量</el-menu-item>
                </el-menu>
                <div class="menu-right">
                    <el-radio-group v-model="radioSelect" size="small">
                      <el-radio-button label="今日"></el-radio-button>
                      <el-radio-button label="本周"></el-radio-button>
                      <el-radio-button label="本月"></el-radio-button>
                      <el-radio-button label="本年"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker
                      type='daterange'
                      v-model="date"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      size="small"
                      :picker-options="pickerOptions"
                      unlink-panels

                    />

                   
                    
                </div>
            </div>
        </template>
     </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeIndex:'1', //默认的索引
      radioSelect:'今日',//默认的选项卡
      date:'null',
      pickerOptions:{
        shortcuts:[{
            text:'最近一周',
            onClick(picker){
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600*24*1000*7)
              picker.$emit('pick',[start,end])
            }
          },{
            text:'最近一月',
            onClick(picker){
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600*24*1000*30)
              picker.$emit('pick',[start,end])
            }
          },{
            text:'最近三个月',
            onClick(picker){
               const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600*24*1000*90)
              picker.$emit('pick',[start,end])
            }
          }
        ]
      }
    }
  },
  methods:{
    onMenuSelect(index){
      this.activeIndex = index
    }
  }
}
</script> 
<style lang="scss" scoped>
    .sales-view{
      margin-top: 20px;
      .menu-wrapper{
        display: flex;

      }
    }
</style>