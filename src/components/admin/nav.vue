<template>
  <div>
    <el-menu
         id="admin-nav"
         :style="isCollapse ? 'width: 1.3rem;' :'' "
    			  :default-active="$route.path"
    			  @open="handleOpen"
    			  @close="handleClose"
    			  background-color="#545c64"
    			  text-color="#fff"
    			  active-text-color="#ffd04b"
            :collapse="isCollapse"
            :collapse-transition="false"
    			  :router="nav_router">
    			  <el-menu-item id="title" v-show="!isCollapse">
    				  后台管理系统
    			  </el-menu-item>
          <el-menu-item v-if="isCollapse">
            <span slot="title"></span>
          </el-menu-item>
         <el-menu-item index="/news">
           <i class="el-icon-setting"></i>
           <span slot="title">发布</span>
         </el-menu-item>
    			  <el-menu-item index="/blog" :route="{path:'/blog',query:{is:true}}" >
           <i class="el-icon-document"></i>
           <span slot="title">文章管理</span>
    			  </el-menu-item>
    			  <el-menu-item index="/aboutManage" > <!-- disabled -->
           <!-- <router-link  to="/food" ></router-link> -->
           <i class="el-icon-edit"></i>
           <span slot="title">个人信息</span>
    			  </el-menu-item>
            
            <el-menu-item index="/chart" > <!-- disabled -->
            <!-- <router-link  to="/food" ></router-link> -->
            <i class="el-icon-date"></i>
            <span slot="title">浏览分析</span>
             </el-menu-item>
            
    </el-menu>
    <i @click="isCollapse=!isCollapse" :class="isCollapse ? 'el-icon-right fh' : 'el-icon-back fh'"></i>
  </div>

</template>

<script>

let data = {
  nav_router: true,
  isCollapse:false,
};

  navcomputed();
   function navcomputed(){
     if(document.documentElement.clientWidth < 763){
            data.isCollapse=true;
            // Vue.$set(data,'isCollapse',true);
          }else{
            data.isCollapse=false;
          }
   }

  window.onresize = navcomputed;
	export default {
	  name: 'navAdmin',
	  data () {
	    return data;
	  },
	  methods: {
		  handleOpen(key, keyPath) {
			console.log(key, keyPath);
		  },
		  handleClose(key, keyPath) {
			console.log(key, keyPath);
		  }
    },
    computed: {
	  }
	}


</script>


<style scoped="scoped">
  #admin-nav{
    min-width: 60px;
    width: 4.363636rem;
    height: 100%;
  }
  .fh{
    z-index: 9999;
    position: absolute;
    left: 0.181818rem;
    top: 0;
    font-size: 0.363636rem;
    display: inline-block;
    width: 0.727272rem;
    height: 0.727272rem;
    background-color: #484848;
    text-align: center;
    border-radius: 90px;
    line-height: 0.727272rem;
    vertical-align: middle;
    margin-top: 0.145454rem;
    color: #FFFF00;
  }
	#title{
    background-color: rgb(15,34,10) !important;
		font-size: .3rem;
		font-weight:600;
		color: #303133;
		text-align: center;
	}
   @media (max-width: 768px) {

    }
</style>
