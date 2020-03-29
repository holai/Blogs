<template>
     <transition name="el-zoom-in-center"  >
    <div  class="blogs " :style="isadmin ? 'width:100%' : '' ">
       <transition name="el-zoom-in-center"  >
      <!-- 筛选标签 -->
      <div class="lable" >
        <!-- <el-tag @click="lablesactive('')" :class="(count=='') ? 'lablecolor' : '0'">全部</el-tag> -->
        <el-tag
          v-for="(i,index) in lables" :key="index"
          @click="lablesactive(lables[index])"
          :class="count==lables[index] ? 'lablecolor' : '0'"
          :closable="isadmin" :disable-transitions="false"
          @close="open(index)">{{i}}</el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-if="isadmin && !inputVisible"  class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
      </transition>

      <!-- 主要显示内容 -->
      <div class="content" v-loading="loading_articles">
        <div class="hint">
          <!-- 搜索内容显示 -->
          <div class="search" v-if="is_search"> 您搜索内容为：<span style="color: #F56C6C;">"{{search_value}}"</span></div>
          <!-- 如果为 文章列表 为空时显示 -->
          <div class="ts" v-if="blogs.length<=0">这里什么也没有o</div>
          <article-item   :isadmin="isadmin" :blogs="blogs" v-if="blogs.length>0" />
        </div>
        <!--  右侧 统计 -->
        <statistics  v-if="!this.isadmin" :page_size="page_size" @search="search" />
      </div>

      <el-pagination id="pageination" background :hide-on-single-page="true" class="page" layout="prev, pager, next"
        :page-size="page_size" :total="page_max" @current-change="pageClick">
      </el-pagination>

    </div>
    </transition>
</template>

<script>
  import articleItem from "./article-item.vue";
  import statistics from "./statistics.vue";
  export default {
    name: 'blog',
    data() {
      return {
        lables: ["Java", "JavaScript"], // 标签列表
        count: "",  // 当前选中的为几号标签
        isadmin:false, // 是否为后台界面
        inputVisible: false,  // 是否显示增加标签输入框
        inputValue: '', // 输入框的值
        is_search:false, // 是否为搜索
        search_value:'', // 搜索的值
        loading_articles:true, // 加载中
        blogs:[],     // 文章列表
        page_size: 10,//每页 几 篇文章
        page_max: 1, //当前筛选标签的总文章数
      }
    },
    components:{
      statistics,articleItem
    },
    methods: {
      //筛选 类型
      lablesactive(e) {
		if(e==this.count){e='';};
        this.is_search=false; // 不是搜索
        this.$axios.get('/articles?mode=-1&page=-1&type=' + e + "&size=" +this.page_size)
          .then(res => {
            if (res.data.code == 0) {
              this.loading_articles=false;
              this.page_max = res.data.data.count;
              this.blogs = res.data.data.list;
            }
          })
          .catch(error => {
            console.log(error);
          })
        this.count = e;
      },
      // 翻页  e为页数
      pageClick(e) {
        let mode=0;
        if(this.is_search){mode=-2};
        this.$axios.get('/articles?mode='+mode+'&page=' + e + '&type=' + this.count + "&size=" + this.page_size)
          .then(res => {
            if (res.data.code == 0) {
              this.blogs = res.data.data;
            }
          })
          .catch(error => {
            console.log(error);
          })
      },
      open(index) {
        // 删除标签
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.get("/admin/removeLabels?value="+this.lables[index])
          .then(res=>{
            if(res.data.code==0){
              this.lables.splice(index, 1);
            }else{
              this.$message.error(res.data.data);
            }
          })
          .catch(error=>{
            console.log(error)
          })
        }).catch(() => {
          //取消
        });
      },
      showInput() {
        //显示 输入框
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        // 写入新标签
        let inputValue = this.inputValue;
        if (inputValue) {
           this.$axios.get("/admin/addLabels?value="+inputValue)
            .then(res=>{
              if(res.data.code==0){
                 this.lables.push(inputValue);
              }else{
                this.open(res.data.data);
              }
            })
            .catch(error=>{
              console.log(error)
            })
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      search(data){
        console.log(data);
        this.is_search=true;
        this.page_max = data.count;
        this.blogs = data.list;
        this.search_value=data.search_value;
      }
    },
    mounted() {

       // 请求 标签
      this.$axios.get("/labels")
        .then(res => {
          if (res.data.code == 0) {
            this.lables = res.data.data;
          }
        })
        .catch(error => {
          console.log(error)
        })

      setTimeout(()=>{this.lablesactive("")},500);
    },
    created() {
      // 接收 路由 传值
      if(this.$route.query.is != null){
        this.isadmin=true;
      }
    }

  }
</script>

<style lang="scss" scoped="scoped">
  //动画时间
    .duration{
      transition-duration: 1.2s;
      -moz-transition-duration: 1.2s; /* Firefox 4 */
      -webkit-transition-duration: 1.2; /* Safari 和 Chrome */
      -o-transition-duration: 1.2s; /* Opera */
    }
  .blogs {
    margin: 0 auto;
    max-width: 20.8rem;
    position: relative;
    overflow-y: auto;
    .lable {
      text-align: left;
      border-bottom: 1px solid #f56c6c;
      margin-bottom: .2rem;
      display: flex;
      flex-wrap: wrap;
      padding: 0.090909rem;
      padding-top: 0.363636rem;
      font-size:0.181818rem;
      .el-tag {
        margin:.1rem;
        margin-right: .2rem;
        cursor: pointer;
        font-size: .2.2rem;
        // line-height: .7rem;
        // height: .7rem;
        &:nth-child(1){
          margin-right: 0.363636rem;
        }
      }
      .lablecolor {
        background-color: rgba(245, 108, 108, .1);
        border-color: rgba(245, 108, 108, .2);
        color: #f56c6c;
      }
    }
    // 主页 主页展示
    .content{
      display: flex;
      .hint{
        flex:1;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        //搜索内容显示
        .search{
          margin: 20px;
          font-size: 0.254545rem;
        }
        // 内容无时提示
        .ts{
          color: #444444;
          font-weight: 200;
          margin-top: 3.636363rem;
          font-size: 0.427272rem;
          text-align: center;
        }
      }
    }

    // admin
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
      display: inherit;
      margin: .1rem;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: text-bottom;
    }
    .dialog{
      font-size: .5rem;
    }

    // page
    .page{
      text-align: center;
    }
  }


  // @media (max-width: 768px) {
  //   .box {
  //     padding: 0px !important;
  //   }
  // }

  @media (max-width: 992px) {
    .else{
      flex: .4;
    }
  }
  @media (max-width: 795px) {
    .else{
      display: none;
    }
  }

  @media (max-width: 470px) {
    .el-tag {
      margin-top:.1rem;
      margin-right: .1rem;
    }
  }
</style>
