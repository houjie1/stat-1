<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="https://mtj.baidu.com/webrpt/images/logo@2x.png"
             alt="" />
        <span>分析</span>
      </div>
      <el-button type="info"
                 @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="this.isCollapse ? '64px' : '200px'">
        <div class="toggle-button"
             @click="collapse">|||</div>
        <!-- 侧边栏菜单区 -->
        <el-menu text-color="#808492"
                 active-text-color="#409fff"
                 :collapse="isCollapse"
                 :collapse-transition="false"
                 router
                 :default-active="$route.path">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''"
                      v-for="item in menuList"
                      :key="item.id">
            <!-- 1 级菜单模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="'/' + subItem.path"
                          v-for="subItem in item.children"
                          :key="subItem.id">
              <template slot="title">
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menuList: [
        { authName: '应用概况', id: 0 },
        {
          authName: '定制分析',
          id: 1,
          children: [
            { authName: '实时分析', path: 'time' },
            { authName: '定制报告', path: 'port' }
          ]
        },
        {
          authName: '用户分析',
          id: 2,
          children: [
            { authName: '用户趋势', path: 'userqushi' },
            { authName: '活跃用户', path: 'huoyuq' },
            { authName: '用户画像', path: 'paint' },
            { authName: '地域分布', path: 'earth' },
            { authName: '终端分析', path: 'tem' },
            { authName: '版本分析', path: 'banben' },
            { authName: '实时访客', path: 'fangke' }
          ]
        },
        {
          authName: '使用行为',
          id: 3,
          children: [
            { authName: '事件分析', path: 'shijainfenix' },
            { authName: '热力图', path: 'relitu' },
            { authName: '页面分析', path: 'yemianfenxi' },
            { authName: '页面路径', path: 'yemianlijung' },
            { authName: '使用习惯', path: 'shiyongxiguan' }
          ]
        },
        {
          authName: '渠道分析',
          id: 4,
          children: [{ authName: '渠道分析', path: 'qudaofenxi' }]
        },
        {
          authName: '启动来源',
          id: 5,
          children: [
            { authName: '启动来源概况', path: 'gaikuang' },
            { authName: ' APP 调起分析', path: 'API' }
          ]
        },
        {
          authName: '留存分析',
          id: 6,
          children: [
            { authName: '新用户分析', path: 'fenxi' },
            { authName: '活跃用户留存', path: 'liucun' },
            { authName: '自定义留存', path: 'zidingyi ' }
          ]
        },
        {
          authName: '转化分析',
          id: 7,
          children: [{ authName: '转换漏斗', path: 'loudou' }]
        }
      ],
      iconObj: {
        0: 'el-icon-user-solid',
        1: 'el-icon-s-tools',
        2: 'el-icon-shopping-bag-1',
        3: 'el-icon-s-order',
        4: 'el-icon-s-marketing',
        5: 'el-icon-s-marketing',
        6: 'el-icon-s-marketing',
        7: 'el-icon-s-marketing'
      },
      isCollapse: false
      // 被激活的连接地址
      // activePath: ''
    }
  },
  created() {},
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },

    // 折叠菜单
    collapse() {
      this.isCollapse = !this.isCollapse
    }
    // 保存连接时的点击状态
    // saveNavState(activePath) {
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = window.sessionStorage.getItem('activePath')
    // }
  }
}
</script>
<style scoped lang="scss">
.home-container {
  height: 100%;
}
.el-header {
  background: #1d2438;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  img {
    width: 160px;
    height: 26px;
    margin: 15px 50px 15px 18px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background: #fafafb;
  .el-menu {
    border: none;
  }
}
.el-main {
  background: #eaedf1;
}
.toggle-button {
  background: #eaedf1;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
</style>
