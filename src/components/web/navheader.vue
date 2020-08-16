<template>
	<el-collapse-transition>
	<header class="nava">
    <i class="el-icon-menu menu" @click="table=!table"></i>
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			active-text-color="#607D8B"
			:router="router"
			>
			<el-menu-item index="/"  >技术分享</el-menu-item>
			<!-- <el-menu-item index="/dddd">留言</el-menu-item> -->
			<el-menu-item index="/about" >关于我</el-menu-item>
			<el-menu-item index="/intro" >求职简介</el-menu-item>
			<el-menu-item index="" @click="open" >练习项目集</el-menu-item>
		<div class="title"><strong><router-link to="login" >路</router-link></strong>   <a href="http://houlai.fun"> 个人网站</a></div>
		</el-menu>
    <el-drawer
      class="drawer"
      title="导航"
      :visible.sync="table"
      direction="ltr"
      size="60%">
      <el-menu
      	:default-active="activeIndex"
      	id="el-menu-nav"
        active-text-color="#FFF"
      	:router="router"
      	>
      	<el-menu-item index="/"  @click="table=!table">技术分享</el-menu-item>
      	<!-- <el-menu-item index="/dddd">留言</el-menu-item> -->
      	<el-menu-item index="/about" @click="table=!table">关于我</el-menu-item>
        <el-menu-item index="/intro" @click="table=!table">求职简介</el-menu-item>
        <el-menu-item index="" @click="open" >练习项目集</el-menu-item>
     </el-menu>
      <!--  右侧 统计 -->
      <statistics :isSeek="false" />
    </el-drawer>
	</header>
	</el-collapse-transition>
</template>
<script>
    import statistics from "./statistics.vue";
    import Bus from './bus.vue'
	export default {
	  name: 'navheader',
	  data () {
	    return {
				router:true,
        table:false,
	    }
	  },
    methods:{
      open(){
        window.open("http://47.100.99.23/hui/")
      }
    },
    computed: {
	  	activeIndex() {
        let path = this.$route.path;
        if(path == '/essay'){
          return '/'
        }else{
          return this.$route.path;
        }
	  	}
	  },
    components:{
      statistics
    }
	}
</script>

<style  lang="scss" scoped>
	.nava{
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    z-index: 998;
		box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
    .menu{
      display: none;
    }
		.el-menu-demo{
      padding: 0px 10px;
			max-width: 21rem;
			margin: 0 auto;
        li{
          font-size: 0.254545rem;
          height: 1.090909rem;
          line-height: 1.090909rem;
        }
				.title{
          text-align: center;
					color: #795548;
					letter-spacing: 2px;
					float: right;
					height: 1.090909rem;
          line-height: 1.090909rem;
          font-size: .3rem;
          margin-right: 5%;
          outline: none;
          a:hover{
            color: #455A64;
          }
          strong{
            color: #000;
            font-size: .5rem;
            font-weight: 900;
          }
				}
			}
	}
  #el-menu-nav{
    .el-menu-item{
      border-bottom: 1px solid #134;
    }
    .is-active{
      color: #fff;
      background: rgb(96, 125, 139);
    }
  }
  .drawer{
    font-size: 0.363636rem;
  }

  @media (max-width: 795px) {
    // .title{
    //   display: none;
    // }
    .nava{
     .menu{
       display: block;
       z-index: 998;
       position: absolute;
       height: 100%;
       font-size:0.636363rem;
       line-height: 1.090909rem;
       margin: 0 0.181818rem;
       cursor: pointer;
       &:hover{
         color: #0066CC;
       }
     }

     .el-menu-demo{
       li{
         display: none;
       }
       .title{
         width: 100%;
         margin: 0;
       }
     }

    }
  }


</style>
