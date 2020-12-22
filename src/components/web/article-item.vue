<template>
  <transition name="el-zoom-in-bottom">
    <!-- 文章列表区 -->
    <div v-show="aritcledh" class="articleItem" id="articleItem">
      <article class="item"  v-for="(content,index) in blogs" :key="index"  >
        <i v-if="isadmin" class="el-icon-circle-close close" @click.stop="delect(index,content.id,content.image)"></i>
        <router-link :to="!isadmin ? ({name: 'essay', query: { id: content.id }}) : ({name: 'news', params: { id: content.id }})" class="box">
          <figure is="el-image" lazy v-if="content.image!=''" class="image" :src="isUrl+content.image" :alt="content.title">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
          </figure>
          <div class="txt">
            <h3 class="title" @mouseover="tool(content.title)">{{content.title}}</h3>
            <p class="brief" v-html="content.brief"></p>
            <div class="make">
              <span class="browse el-icon-view"> 浏览: {{content.browse}}</span>
              <time class="time el-icon-date" :datatime='content.time'> {{content.time.substring(0,content.time.length-9) }}</time>
              <el-tag class="label" v-for="item in content.labels" :key="item" effect="plain">
                {{item}}
              </el-tag>
            </div>
          </div>
        </router-link>
      </article>
    </div>
  </transition>
</template>

<script>
  // var se;
  // var i;

  export default {
    name: 'articleItem',
    data () {
      return {
        se:"",  // 定时器 执行
        out:"", // 定时器 循环
        aritcledh:true,    //显示动画
        // isUrl:"https://houlai.fun/"
        isUrl:"http://localhost/"
      }
    },props:{
      "blogs":"",
	  "isadmin":false,
    },
    methods:{
      tool(e){
		  if(window.location.href.indexOf("blog")!=-1){
			  return;
		  }
        window.clearTimeout(this.se);
         window.clearInterval(this.out);
        let live = document.querySelector(".dialogue-live2d");
        if(live!=null){
          live.innerHTML="您想要看 <span style='color:#409EFF'>"+e+"</span>吗？";
          live.style.opacity=1;
          this.se=setTimeout(()=>{
               this.out=setInterval(()=>{
                if(document.querySelector(".dialogue-live2d").style.opacity<=0){
                  window.clearInterval(this.out);
                }
                document.querySelector(".dialogue-live2d").style.opacity=document.querySelector(".dialogue-live2d").style.opacity-0.1;
            },200);
             // document.querySelector(".dialogue-live2d").style.opacity=0;
          },5000);
        }

      },      // 删除 文章
      delect(index,id,imagesrc) {
        this.$confirm('此操作将永久删除文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.get('/admin/removeArticles?id=' + id+"&imgsrc="+imagesrc)
            .then(res => {
              if (res.data.code == 0) {
                this.blogs.splice(index, 1);
              }else{
                this.$message.error(res.data.data);
              }
            })
            .catch(error => {
              console.log(error);
            })
        }).catch(() => {
          //取消
        });
      },
    },mounted() {

      if (!!window.ActiveXObject || "ActiveXObject" in window){
        let content= document.querySelector(".content");
        let item = document.querySelector(".item");
        if(content != null && item != null){
          content.style.height=item.offsetHeight*this.blogs.length+320+"px";
        }

         // content.style.height=item.offsetHeight*12+"px";
      }

      setTimeout(()=>{
        this.aritcledh=true;
      },500);

      // setTimeout(()=>{
      //   document.body.scrollTop=10;
      //   document.body.scrollTop=0;
      // },1000);

    }
  }

</script>


<style scoped="scoped" lang="scss">
  //动画时间
    // .duration{
    //   transition-duration: 1.2s;
    //   -moz-transition-duration: 1.2s; /* Firefox 4 */
    //   -webkit-transition-duration: 1.2; /* Safari 和 Chrome */
    //   -o-transition-duration: 1.2s; /* Opera */
    // }
  // 文章显示
  .articleItem{
    // flex: 1;
    .item{
      cursor: pointer;
      margin: 0.363636rem;
      border-radius: 5px 0 0 5px;
      border: 1px solid #EBEEF5;
      background-color: #FFF;
      color: #303133;
      transition: .3s;
      overflow: hidden;
      position: relative;
      &:hover{
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
      }
      // 删除标签
      .close{
        position: absolute;
        right:0.145454rem;
        top: 0.145454rem;
        font-size: 0.454545rem;
      }
      //单项 盒子
      .box{
        display: flex;
      }
      // 图片
      .image{
        height: 2.90909rem;
        width: 3.636363rem;
        border-radius: 5px 0 0 5px;
        // 图片未加载
        .image-slot{
          background: #33333d;
          font-size: 0.2rem;
          color: #fff;
          text-align: center;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .txt{
        flex: 1;
        margin: 0.30636rem .05rem 0.30636rem 0.30636rem ;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .title{
          // font-size:0.386363rem;
          font-size: 0.327272rem;//18px
          line-height: 2em;
          font-weight: 700;
        }
        .brief{
          flex: 1;
          min-height: 1.2em;
          line-height: 1.5;
          font-size:0.240909rem;
          // font-size: 0.254545rem;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          white-space: nowrap;
        }
        .make{
          font-size: 0.181818rem;
          margin-top: 0.090909rem;
          [class*=" el-icon-"], [class^=el-icon-]{
            margin-right: 0.363636rem;
          }
          .browse{
          }
          .time{
          }
          .label{
            height: auto;
            line-height:0.4rem;
            font-size:0.181818rem;
            margin-left: 0.090909rem;
          }
        }
      }
    }
  }

  @media (max-width: 521px) {
    .articleItem{
      .make{
        .browse,.label{
          margin-top: 0.190909rem;
        }
      }

    }
  }
</style>
