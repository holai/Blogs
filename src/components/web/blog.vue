<template>
     <transition name="el-zoom-in-center"  >
       <div>

      <div   class="blogs " :style="isadmin ? 'width:100%;flex-direction: column;' : '' ">

      <div class="leftBox" v-loading="loading_articles">
        <!-- 筛选标签 -->
        <div class="lable" >
          <!-- <el-tag @click="lablesactive('')" :class="(count=='') ? 'lablecolor' : '0'">全部</el-tag> -->
          <el-tag
           style="user-select:none;"
            v-for="(i,index) in lables" :key="index"
            @click="lablesactive(lables[index])"
            :class=" count==lables[index] ? 'lablecolor' : '0'  "
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


          <div class="hint">
            <!-- 搜索内容显示 -->
            <div class="search" v-if="is_search"> 您搜索内容为：<span style="color: #F56C6C;">"{{search_value}}"</span></div>
            <!-- 如果为 文章列表 为空时显示 -->
            <div class="ts" v-if="blogs.length<=0">这里什么也没有o</div>
            <article-item   :isadmin="isadmin" :blogs="blogs" v-if="blogs.length>0" />
          </div>

      </div>
      <!--  右侧 统计 -->
      <statistics  v-if="!this.isadmin" @search="lablesactive" />



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
      lablesactive(e,f = false) {
        let mode = -1;
        if(e==this.count){e='';}; //是否重复点击了这个标签 是的话 就取消选中
        if(f){
          this.count = '';   //取消标签
          this.search_value=e;
          mode = -2;
        }
        this.is_search=f; // 是否显示搜索
        // get 方式 有些特殊字符 不能提交 所以使用 post
         var params = new URLSearchParams();
         params.append('mode', mode);
         params.append('page', "-1");
         params.append('type', e);
         params.append('size',this.page_size);
        this.$axios({
          method: 'post',
          url:"/articles",
          data:params,
        }).then(res=>{
            if(res.data.code==0){
              this.loading_articles=false;
              this.page_max = res.data.data.count;
              this.blogs = res.data.data.list;
            }else{
              this.$message.error(res.data.data);
            }
        })
        .catch(error=>{
          console.log(error)
        })
        this.count = e;
      },
      // 翻页  e为页数
      pageClick(e) {
        let mode=-1;
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
        this.$confirm('此操作将永久删除标签 , 是否继续?', '提示', {
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
      transition-duration: 1s;
    }
  .blogs {

	  // background: #fff;
    display: flex;
    // flex-direction: column;
	  padding: 0.4rem;
	  padding-top: 0;
    margin: 0 auto;
    max-width: 20.8rem;
    position: relative;
    overflow-y: auto;
    .leftBox{
      min-width: 0;
      background: #fff;
      padding: 0.2rem;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }
    .lable {
      text-align: left;
      border-bottom: 1px solid #f56c6c;
      margin-bottom: .2rem;
      display: flex;
      flex-wrap: wrap;
      padding: 0.090909rem;
      // padding-top: 0.363636rem;
      font-size:0.181818rem;
      .el-tag {
        margin:.1rem;
        margin-right: .2rem;
        cursor: pointer;
        font-size: .2.2rem;
        // line-height: .7rem;
        // height: .7rem;

      }
      .lablecolor {
        background-color: rgba(245, 108, 108, .1);
        border-color: rgba(245, 108, 108, .2);
        color: #f56c6c;
        user-select:none
      }
    }
    // 主页 主页展示

    .hint{
      flex:1;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
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

    .else{
      border-radius: 4px;
      background: #fff;
      display: inline-table;
      margin-top:0 ;
      padding: 0.2rem;
      min-width: 5rem;
    }
    // page

  }
  .page{
    margin-top: 0.272727rem;
    text-align: center;
  }


  // @media (max-width: 768px) {
  //   .box {
  //     padding: 0px !important;
  //   }
  // }

  @media (max-width: 992px) {
    .blogs {
       padding: 0;
      .else{
        min-width: 3rem
      }
    }
  }
  @media (max-width: 795px) {
    .blogs{
      .leftBox{
        padding: 0.1rem;
      }
      .else{
        display: none;
      }
    }

  }

  @media (max-width: 470px) {
    .el-tag {
      margin-top:.1rem;
      margin-right: .1rem;
    }
  }
</style>
