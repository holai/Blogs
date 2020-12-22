<template>
	<div class="acticles" v-loading="loading_article">
    <div class="acticlesBox">

      <div style="position: relative;">
        <el-page-header class="back" style="position: absolute;font-size: 0.236363rem;" @back="goBack"></el-page-header>
        <h1 class="title">
          {{data.title}}
        </h1>
      </div>

      <div class="mate">
        <i class="el-icon-edit"></i>
        <!-- <span class="time_title" icon="el-icon-platform-eleme">编辑时间:</span> -->
        <span class="time"> {{ data.time.substring(0,data.time.length-5)}} </span>
        <span class="call_title">浏览量:</span>
        <span class="call">{{data.browse}}</span>
        <div class="label_box">
          <span class="label_title">标签:</span>
          <el-tag class="label" type="danger" v-for="(label,i) in data.labels" :key="i">{{label}}</el-tag>
        </div>
      </div>

          <!-- <hr class="myhr"/> -->

        <!-- <el-divider></el-divider> -->
      <div>
        <div class="ql-editor" v-html='(data.text)'  id="editor" > </div>
        <!-- <el-tree :data="date" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
      </div>

        <!-- 分享 -->
    <!--        <div class="social-share"
           data-sites="weibo,wechat,qzone,qq"
           source="http://47.100.99.23"
           :data-title="分享标题">
        </div> -->

        <div class="line"></div>


      <div class="share">
        分享至:
        <svg t="1576666422746" @click="openShare('qzon')" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="894" width="24" height="24"><path d="M955.728 428.224c8.385-8.785 3.76-23.536-8.073-25.753l-276.832-51.854c-4.838-0.906-9.02-3.987-11.38-8.383L525.873 93.229c-2.798-5.23-8.342-7.85-13.875-7.896-5.532 0.045-11.075 2.667-13.873 7.896L364.558 342.234c-2.36 4.396-6.543 7.477-11.381 8.383L76.345 402.471c-11.833 2.217-16.458 16.968-8.073 25.753L269.64 639.086c3.564 3.733 5.205 8.952 4.433 14.1l-46.015 282.032c-1.819 12.126 10.394 21.407 21.298 16.182L505 827.827a16.098 16.098 0 0 1 7-1.58 16.1 16.1 0 0 1 7.003 1.58L774.644 951.4c10.904 5.225 23.117-4.056 21.298-16.182l-46.88-287.298 206.666-219.696z" fill="#FFCD00" p-id="895"></path><path d="M559.42 493.63c-4.517-3.772-110.987-40.332-273.968-16-3.16 0.47-5.913-0.394-8.04-1.992-0.717 4 3.587 7.152 8.988 7.527 115.064 8.021 179.42 54.987 199.492 71.501 40.78-28.923 71.882-50.606 73.063-51.527 3.668-2.856 3.695-6.811 0.465-9.51m135.65-29.972c-41.744 35.168-160.159 116.897-201.52 148.468-4.864 3.711-3.177 9.424 2.098 11.43 17.045 6.488 36.23 11.95 56.421 16.445l159.784-152.228c12.544-13.184 5.238-29.152-10.422-32.661-1.025 3.011-3.259 5.933-6.36 8.546M817.187 640l-0.101 0.045c-70.456 29.709-241.54 79.623-451.762 72.33-25.386-0.88-50.63-3.715-64.786-6.325-2.067-0.38-3.878-1.012-5.476-1.846-10.567 12.224 2.073 21.462 47.148 30.58 131.886 26.676 286.047 38.934 415.304 30.665l-8.884-54.324c43.727-31.431 64.996-58.546 67.524-62.57 2.899-4.616 1.033-8.555 1.033-8.555" fill="#F1A308" p-id="896"></path><path d="M818.863 646.995c-53.31 5.137-215.894 3.686-311.826-33.167-5.107-1.962-6.834-7.566-2.129-11.194 40.025-30.84 154.62-110.68 195.014-145.035 7.872-6.696 9.95-15.437 0.375-22.542-18.36-13.623-83.168-36.203-158.198-36.816-107.373-0.88-212.858 29.498-259.133 54.09-10.983 5.837-4.392 21.221 6.83 19.495 164.223-25.24 271.495 12.756 276.045 16.67 3.255 2.798 3.074 6.906-0.5 9.715-3.036 2.389-199.263 143.36-258.23 193.11-9.286 7.834-6.845 24.246 8.35 27.018 14.152 2.582 39.406 5.412 64.784 6.284 210.173 7.214 381.314-42.24 451.755-71.63 0 0-2.148-7.057-13.137-5.998" fill="#FFFFFF" p-id="897"></path></svg>
        <svg t="1576666434251" @click="openShare('qq')"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1049" width="24" height="24"><path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08" p-id="1050"></path><path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08" p-id="1051"></path><path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000" p-id="1052"></path><path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017" fill="#000000" p-id="1053"></path><path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF" p-id="1054"></path><path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08" p-id="1055"></path><path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000" p-id="1056"></path><path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF" p-id="1057"></path><path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26" p-id="1058"></path><path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26" p-id="1059"></path></svg>
        <svg t="1576666477641" @click="openShare('weibo')" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1211" width="24" height="24"><path d="M851.4 590.193c-22.196-66.233-90.385-90.422-105.912-91.863-15.523-1.442-29.593-9.94-19.295-27.505 10.302-17.566 29.304-68.684-7.248-104.681-36.564-36.14-116.512-22.462-173.094 0.866-56.434 23.327-53.39 7.055-51.65-8.925 1.89-16.848 32.355-111.02-60.791-122.395C311.395 220.86 154.85 370.754 99.572 457.15 16 587.607 29.208 675.873 29.208 675.873h0.58c10.009 121.819 190.787 218.869 412.328 218.869 190.5 0 350.961-71.853 398.402-169.478 0 0 0.143-0.433 0.575-1.156 4.938-10.506 8.71-21.168 11.035-32.254 6.668-26.205 11.755-64.215-0.728-101.66z m-436.7 251.27c-157.71 0-285.674-84.095-285.674-187.768 0-103.671 127.82-187.76 285.674-187.76 157.705 0 285.673 84.089 285.673 187.76 0 103.815-127.968 187.768-285.673 187.768z" fill="#E71F19" p-id="1212"></path><path d="M803.096 425.327c2.896 1.298 5.945 1.869 8.994 1.869 8.993 0 17.7-5.328 21.323-14.112 5.95-13.964 8.993-28.793 8.993-44.205 0-62.488-51.208-113.321-114.181-113.321-15.379 0-30.32 3.022-44.396 8.926-11.755 4.896-17.263 18.432-12.335 30.24 4.933 11.662 18.572 17.134 30.465 12.238 8.419-3.46 17.268-5.33 26.41-5.33 37.431 0 67.752 30.241 67.752 67.247 0 9.068-1.735 17.857-5.369 26.202a22.832 22.832 0 0 0 12.335 30.236l0.01 0.01z" fill="#F5AA15" p-id="1213"></path><path d="M726.922 114.157c-25.969 0-51.65 3.744-76.315 10.942-18.423 5.472-28.868 24.622-23.5 42.91 5.509 18.29 24.804 28.657 43.237 23.329a201.888 201.888 0 0 1 56.578-8.064c109.253 0 198.189 88.271 198.189 196.696 0 19.436-2.905 38.729-8.419 57.16-5.508 18.289 4.79 37.588 23.212 43.053 3.342 1.014 6.817 1.442 10.159 1.442 14.943 0 28.725-9.648 33.37-24.48 7.547-24.906 11.462-50.826 11.462-77.175-0.143-146.588-120.278-265.813-267.973-265.813z" fill="#F5AA15" p-id="1214"></path><path d="M388.294 534.47c-84.151 0-152.34 59.178-152.34 132.334 0 73.141 68.189 132.328 152.34 132.328 84.148 0 152.337-59.182 152.337-132.328 0-73.15-68.19-132.334-152.337-132.334zM338.53 752.763c-29.454 0-53.39-23.755-53.39-52.987 0-29.228 23.941-52.989 53.39-52.989 29.453 0 53.39 23.76 53.39 52.989 0 29.227-23.937 52.987-53.39 52.987z m99.82-95.465c-6.382 11.086-19.296 15.696-28.726 10.219-9.43-5.323-11.75-18.717-5.37-29.803 6.386-11.09 19.297-15.7 28.725-10.224 9.43 5.472 11.755 18.864 5.37 29.808z" fill="#040000" p-id="1215"></path></svg>
      </div>



      <div class="control">
        <router-link  :to="{name: this.$route.path.name, query: { id: last.id }}" class="last-article" v-show="last!=''"> 上一篇： <span>{{last.title}}</span> </router-link>
        <router-link :to="{name: this.$route.path.name, query: { id: next.id }}" class="first-article" v-show="next!=''"> 下一篇： <span>{{next.title}}</span> </router-link>
      </div>


    </div>


		<comment class="box-card" :articleId="$route.query.id"></comment>

		<!-- <div class="footer"></div> -->

	</div>
</template>
<script>

  import comment from './comment.vue'
  // 已改用外部引入
  // import 'highlight.js/styles/googlecode.css'
  // import hljs from 'highlight.js'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')

  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}
	export default {
		name:"essay",
		data() {
			return {
        data:
        {
          title: "",
          time: "0000.0.0",
          browse: 0,
          labels: [],
          text:"<div style='font-size: .1rem;' >出现错误</div>",
        },
        last:"",
        next:"",
        loading_article:true,
        // x:"d ",
        date: [{
                  label: '一级 1',
                  children: [{
                    label: '二级 1-1',
                    children: [{
                      label: '三级 1-1-1'
                    }]
                  }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
		},
    components: {
      comment,
    },
    methods:{
      goBack() {
        window.history.back();
      },
      openShare(type){
         let url = encodeURIComponent(location.href);
         let title = '每用博客%7C个人博客';
         let desc = '';
         let pics = "&pics=http://47.100.99.23/src/assets/tx.png";
         let typeUrl;
        switch (type){
          case "qq":
            typeUrl = "http://connect.qq.com/widget/shareqq/index.html";
            break;
          case "qzon":
            typeUrl = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey";
            break;
          case "weibo":
            typeUrl = "http://service.weibo.com/share/share.php";
            pics="&pic=http://47.100.99.23/src/assets/tx.png";
            title = this.data.title;
            break;
        }
        window.open(typeUrl+'?url='+url+'&title='+title+'&desc='+desc+'&summary='+this.data.title+'&site=http%3A%2F%2F47.100.99.23'+pics);
      },
       handleNodeClick(data) {
          console.log(data);
      }
    },
    mounted(){
      var dd =document.body;
      dd.scrollTop=0;


      // 请求 文章
        if(this.$route.query.id){//判断id是否有值
          // 请求 ip
          this.$axios.get("/pageView?id="+this.$route.query.id);
          //调数据
          this.$axios.get("/article?id="+this.$route.query.id)
          .then(res=>{
            if(res.data.code==0){
                this.loading_article=false;
                this.data=res.data.data;
            }
          });
          this.$axios.get("/ArticleNL?id="+this.$route.query.id)
          .then(res=>{
            if(res.data.code>=0){
                if(res.data.code==1){
                  if(res.data.data[0].id > this.$route.query.id){
                    this.next = res.data.data[0];
                    this.last ="";
                  }else{
                    this.last = res.data.data[0];
                    this.next ="";
                  }
                }else if(res.data.code == 2){
                  this.last=res.data.data[0];
                  this.next=res.data.data[1];
                }
            }
          });

        }

        highlightCode()
    }, updated () {
        highlightCode()
    }
	}


</script>
<style lang="scss" scoped="scoped">
	.acticles{
    border-radius: 4px;


    box-sizing: border-box;
    margin: 0 auto;
    max-width: 960px;
    width: 65%;
    min-width: 640px;
    .acticlesBox{
       background: #fff;
       padding: 0.4rem;
       padding-top: 0.65rem;
       padding-left: 0.18rem;
       padding-right: 0.18rem;
    }
    .back{
      font-size: 18px;
      margin-right: 6px;
      align-self: center;
    }
		.title{
			// font-size: 0.545454rem;
		  font-size: 0.50909rem;  //28px
		  word-break: break-word;
			width:100%;
			text-align:center;
		}
	  .mate{
      margin-top: 10px;
      height: 20px;
      position:relative;
      color: darkgray;
      padding: 10px 10px;
      font-size: .2rem;
      line-height: 30px;
      .call_title{
        margin-left: 20px;
      }
      .label_box{
      line-height: 20px;
      float: right;
          .label{
            margin: 0 5px;
          }
      }
    }
    .myhr{
      margin: 6px;
      border-color: #F56C6C;
      clear: both;
    }
    #editor{
      min-height: 70vh;
      width: 100%;
    }
    // 文章分割线 下
    .line{
      margin: .3rem auto;
      // width: 2.818181rem;
      border-bottom: 1px #e0e0e0 solid;
      text-align: center;
      font-size: 0.181818rem;
      line-height: 1.2em;
    }
    // 分享
    .share{
      font-size: 0.181818rem;
      margin: 0.363636rem;
      margin-bottom: 0;
      svg{
        cursor: pointer;
        vertical-align: middle;
      }
    }

    //上下篇
    .control{
      display: flex;
      justify-content: space-between;
      width: 100%;
      cursor:pointer;
      color:rgba(0,0,11,0.8) ;
      font-weight: 600;
      box-sizing: border-box;
      word-break: break-word;
      font-size: 0.254545rem;
      margin-top: 0.181818rem;
      span{
        color: #0e90d2;
      }
      .last-article{
        float: left;
        padding: 0.181818rem;
        &:hover{
        	color:#6495ed;
        }
      }
      .first-article{
        float:right;
        padding: 0.181818rem;
        &:hover{
          color:#6495ed;
        }
      }
    }
    .footer{
      margin-top:30px;
    }
	}
// @media (max-width: 1000px) {
//   .acticles{
//   	margin: 20px 20px;
//    }
// }

@media (max-width: 48rem){
  .acticles{
     width:98%;
     min-width: 0px;
     overflow: hidden;
  }
}

  @media (max-width:450px) {
    .back{
      display: none;
    }

  }
</style>
<style lang="scss">
  @import '@/assets/styles/show.scss';
</style>
