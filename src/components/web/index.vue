<template>
  <div id="indexa">
    <transition name="el-zoom-in-top" >
      <topnav v-show="navAm" class="duration"    id="nav"></topnav>
    </transition>

    <transition name="el-fade-in-linear"  >
      <div v-show="navAm" class="box duration" ref="box" id="box">
      <!--      <keep-alive>
            <router-view id="content"  />
          </keep-alive> -->
        <keep-alive>
              <router-view id="content" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <router-view id="content" :key="key" v-if="!$route.meta.keepAlive"></router-view>

        <bottomfooter id="footer"></bottomfooter>

        <!-- <live2d> </live2d> -->
        <live2d v-if="isdesk()" > </live2d>

        <el-backtop style="background-color: rgba(10, 10, 10, 0.8);box-shadow: 0 0 6px rgba(25,25,25,1);" target="body" :bottom="100" :right="50"></el-backtop>

          <!-- <el-backtop target="body" visibility-height="1"></el-backtop> -->
      </div>
    </transition>
  </div>
</template>

<script>
	import topnav from "./navheader.vue";
	import bottomfooter from "./footer.vue";
	import live2d from "./live2d.vue";
  //   mounted() {
  //   document.getElementById("content").style.minHeight=document.documentElement.clientHeight-document.getElementById("nav").clientHeight-document.getElementById("footer").clientHeight-50+"px";
  // }
export default {
  name: 'index',
	data(){
		return {
      navAm:false
		}
	},methods:{
    handleScroll(e){
      let scrollTop=e.target.scrollTop;
      if(scrollTop>200){
        this.ifscroll=true;
      }else{
        this.ifscroll=false;
      }
    },
    isdesk(){
      let isyd= navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      // console.log(isyd);
      if(isyd){
        return false;
      }else{
        return true;
      }
    }
  },
  computed:{
     key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      },
  },
	components:{
		topnav,bottomfooter,live2d
	},mounted(){

      //绑定 滚动 事件
      this.$refs.box.addEventListener("scroll", this.handleScroll);
        // 绑定加载完成后 设置 box 的高度
      document.addEventListener("DOMContentLoaded",() =>{
          const html = document.querySelector("html");
          this.$refs.box.style.height=html.offsetHeight+"px";
        })
        // 设置 最小高度
    let content = document.getElementById("content");
    if(content){
      content.style.minHeight=document.documentElement.clientHeight-document.getElementById("nav").clientHeight-document.getElementById("footer").clientHeight-30+"px";
    }

      this.navAm=true;
  },

}

</script>
<style  lang="scss" scoped="scoped">
  //动画时间
    .duration{
      transition-duration: 1.2s;
      // -moz-transition-duration: 1.2s; /* Firefox 4 */
      // -webkit-transition-duration: 1.2; /* Safari 和 Chrome */
      // -o-transition-duration: 1.2s; /* Opera */
    }
  #indexa{
    // height: 100%;
    margin-top: 1.090909rem;
  }
  #content{

  }

  #box{
    // overflow: auto;
    background: #f4f4f4;
    padding-top: 0.3rem;
  }

  @media (max-width: 795px) {
    #box{
      padding-top: 0rem;
    }

  }
</style>
