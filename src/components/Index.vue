<template>
  <div>
    <el-container>
      <el-aside width="150px">
        <el-menu router
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="/add">
            <i class="el-icon-setting"></i>
            <span slot="title">添加管理</span>
          </el-menu-item>
          <el-menu-item index="/bijiao">
            <i class="el-icon-menu"></i>
            <span slot="title">疫情比较</span>
          </el-menu-item>
          <el-menu-item index="/index">
            <i class="el-icon-document"></i>
            <span slot="title">数据展示</span>
          </el-menu-item>
          <el-menu-item index="/map">
            <i class="el-icon-location"></i>
            <span slot="title">导航地图</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>{{msg}}</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '疫情监控管理系统'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0 20px 20px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
