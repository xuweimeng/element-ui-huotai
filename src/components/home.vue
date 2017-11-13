<template>
	<div class="home">
		<el-container class="container">
			<!-- 头部 -->
		  <el-header>
		  	<el-row type="flex">
				  <el-col :span="6">
				  	<div class="grid-content">
				  		<a class="grid-logo text-left">
				  			<i class="el-icon-upload"></i>
				  			<span class="logo-text">认识医生--虚拟医生ai智能随访助手</span>
				  		</a>
					  </div>
					</el-col>
				  <el-col :span="6"><div class="grid-content"><input type="hidden" name=""></div></el-col>
				  <el-col :span="6">
				  	<div class="grid-content">
				  		<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
							  <el-radio-button :label="false">展开</el-radio-button>
							  <el-radio-button :label="true">收起</el-radio-button>
							</el-radio-group>
						</div>
					</el-col>
				  <el-col :span="6" class="header-four">
				  	<div class="grid-content">
				  		<div style="border-dious:5px;">
									<img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" class="user-img float-right" style="width:40px;height:40px;margin:10px 30px 0 30px ">
								</div>
				  		<el-dropdown trigger="click" class="float-right" style="color: #fff">
							  <span class="el-dropdown-link">
							    admin<i class="el-icon-caret-bottom el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item class="clearfix">
							      我的信息
							    </el-dropdown-item>
							    <el-dropdown-item class="clearfix" divided @click.native="greet">
							      退出登录
							    </el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>						
					  </div>
					</el-col>
				</el-row>
		  </el-header>
		  <!-- 内容区 -->
		  <el-container>
		    <el-aside width="200">
					 <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router> <!--router不加的话没办法实现路由，必须加 -->
						 <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
							<el-submenu :index="index+''" v-if="!item.leaf">
								<template slot="title">
									<i :class="item.iconCls"></i>
									<span>{{item.name}}</span>
								</template>
								<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}
								</el-menu-item>
							</el-submenu>
							<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
								<i :class="item.iconCls"></i>
								<span slot="title">{{item.children[0].name}}</span>
							</el-menu-item>
						</template>
					</el-menu>

		    </el-aside>
		    <el-container>
		      <el-main>
		      	<!-- 面包屑 -->
		      	<el-col :span="24">
		      		<el-breadcrumb separator-class="el-icon-arrow-right">
							  <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{item.name}}</el-breadcrumb-item>
							</el-breadcrumb>
		      	</el-col>
		      	<!-- 路由 -->
		      	<el-col :span="24" class="content-wrapper" style="height:100%">
							<transition name="fade" mode="out-in">
								<router-view></router-view>
							</transition>
						</el-col>
		      </el-main>

		      <!-- <el-footer>Footer</el-footer> -->
		    </el-container>
		  </el-container>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
	    return {
	    	isCollapse: false
	    };
	   },
	   mounted(){
	   },
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	        console.log('打开')
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	        console.log('关闭')
	      },
	      greet: function(){
	      	// alert('555')
	      }
	    }
	}
</script>

<style scoped lang="scss">

@import '../common/style/mixin';

.home, .container {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
.header-four{
	color: #fff;
}
.el-header, .el-footer {
    background-color: #409EFF;
    color: #fff;
    text-align: center;
    line-height: 60px;
    min-height: 60px;
    font-size: 22px;
  }
  
  .el-aside {
    background-color: #eef1f6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
    overflow: hidden;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    height: 100%;
  }
  .el-menu {
  	background-color: #eef1f6;
  	ul li{
  		background-color: #eef1f6;
  	}
  }
  .el-menu-item:hover{
    background-color: #DFE4ED;
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .menu-collapsed{
  	width: 60px!important;
  }
  .menu-expanded{
  	width: 200px !important;
  }
  .title {
		width: 200px;
		float: left;
		color: #475669;
	}
	.el-breadcrumb{
		padding-bottom: 20px;
	}
</style>