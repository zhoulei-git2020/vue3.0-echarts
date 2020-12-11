<template>
  <div class="top-view" >
      <el-row :gutter="20">
          <el-col :span="6">
            <el-card shadow="hover" >
                <total-sales />
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
                <total-order />
            </el-card>
          </el-col >
          <el-col :span="6">
            <el-card shadow="hover">
                <today-users />
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
                <total-users />
            </el-card>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import TotalSales from "../TotalSales"
import TotalOrder from "../TotalOrder"
import TodayUsers from "../TodayUsers"
import TotalUsers from "../TotalUsers"


export default {
  components: {
    TotalSales,
    TotalOrder,
    TodayUsers,
    TotalUsers
  }
}
</script> 
<style lang="scss" scoped>
  
</style>