<template>
  <!-- 右侧 其他展示区 -->
  <div class="else">
    <!-- prefix-icon="el-icon-search" -->
    <div class="shadow seek" v-if="isSeek">
      <el-input placeholder="" maxlength="10" v-model="search_value">
          <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
      </el-input>
    </div>
    <div class="shadow stat">
      <img src="@/assets/tx.png" width="80px" alt="后来的路" />
      <!-- <el-avatar :size="50" :src="txUrl"></el-avatar> -->
      <div class="text">
        <span>{{this.articleCount}}</span>篇文章,<span>{{this.browseCount}}</span>次访问,<span>{{commentCount}}</span>条评论
      </div>
      <div class="link">
        <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1270123648&website=www.oicqzone.com"><img src="@/assets/qq.png" width="16px" alt="QQ:1270123648" /></a>
        <a target="_blank" href="https://github.com/holai"><img src="@/assets/github.png" width="16px" alt="Github:houlai" /></a>
        <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=59zCjrq"><img src="@/assets/qqq.png" width="16px" alt="Github:houlai" /></a>
      </div>
    </div>
    <div class="shadow borwse">
      <h6>最多浏览：</h6>
      <ul>
        <router-link  v-for="(content,index) in articlelist" :to="{name: 'essay', query: { id: content.id }}" :key="index">
          <li>
            {{content.title}}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="shadow">
      <h6>友情链接：</h6>
      <a href="#"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'statistics',
    data () {
      return {
        articlelist:[ //浏览量前 十 的文章
          {"browse":"1","id":"39","title":"子网掩码"},
        ],
        articleCount:18, // 文章总数
        browseCount:200, //浏览总数
		commentCount:22,		// 总
        search_value:"", // 搜素框的值
      }
    },
    props:{
      page_size: {    //请求一页的数量
        type: Number,
        default: 10
      },
      isSeek:{
        type:Boolean,
        default:true
      }
      // articleCount:{
      //   type:Number,
      //   default:0
      // },

    },
    methods:{
      //向父组件传递
      //搜索
      search(){
        // this.$axios.get('/articles?mode=-2&page=-1&type='+this.search_value.replace("#",)+"&size=" +this.page_size)
      		// get 方式 有些特殊字符 不能提交
          var params = new URLSearchParams();
      		params.append('mode', "-2");
      		params.append('page', "-1");
          params.append('type', this.search_value);
          params.append('size',this.page_size);
      		this.$axios({
      			method: 'post',
      			url:"/articles",
      			data:params,
      		}).then(res=>{
           if(res.data.code==0){
             res.data.data.search_value=this.search_value;
             this.$emit("search",res.data.data);
              // this.page_max = res.data.data.count;
              // this.blogs = res.data.data.list;
           }else{
             this.open(res.data.data);
           }
         })
         .catch(error=>{
           console.log(error)
         })
      }
    },
    created() {
      this.$axios.get('/statistics')
        .then(res => {
          if (res.data.code == 0) {
            this.articleCount = res.data.data.article;
            this.browseCount = res.data.data.browse;
			this.commentCount = res.data.data.comment;
            this.articlelist = res.data.data.list;
          }
        }).catch(error => {
          console.log(error);
        });
    }
  }
</script>

<style scoped="scoped" lang="scss">
  //主页 侧栏
  .else{
    // margin-top: 0.363636rem;
    // margin-right: 0.363636rem;
    margin: 0.363636rem;
    .shadow{
      font-size: 0.218181rem;
      display: flex;
      margin-bottom: 20px;
      padding: 10px 20px;
      background: #fff;
      border: 1px solid #EBEEF5;
      overflow: hidden;
      &:hover{
        box-shadow: 0 1px 2px 0 #e2e2e2;
      }
    }
    .seek{
    }
    .stat{
      height: 150px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .text{
        color: #606266;
        span{
          font-weight: 700;
          color:#000000;
        }
      }
      .link{
        width: 100%;
        display: flex;
        align-content: space-between;
        a{
          flex: 1;
          text-align: center;
        }
      }
    }
    .borwse{
      flex-direction: column;
      h6{
        font-weight: 700;
        font-size: 0.236363rem;
        line-height: 2em;
      }
      ul{
        font-size: 0.254545rem;
        padding-left: 0.181818rem;
        li{
          line-height: 1.5em;
          cursor:pointer;
          text-decoration: underline;
        }
      }
    }
  }
  // @media (max-width: 992px) {
  //   .else{
  //     display: none;
  //   }
  // }
</style>
