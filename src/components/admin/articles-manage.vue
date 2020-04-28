<template>
  <div class="articles-manage">
    <el-card class="box-card tag-box">
      <h4 class="tag-title">标签管理</h4>
       <el-tag
         type="danger"
         v-for="(tag,i) in dynamicTags"
          :key="i"
         closable
         :disable-transitions="false"
         @close="open(i)">
         {{tag}}
       </el-tag>
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
       <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

    </el-card>

    <blog :lablesList="dynamicTags"></blog>



  </div>
</template>

<script>
 import blog from "@/components/web/blog.vue"
  export default{
    name:"articles-manage",
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
      };
    },
    methods: {
      open(i) {
        // 删除标签
        this.$confirm('此操作将永久删除标签, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.get("/admin/removeLabels?value="+this.dynamicTags[i])
          .then(res=>{
            if(res.data.code==0){
                this.dynamicTags.splice(i, 1);
            }else{

            }
          })
          .catch(error=>{
            console.log(error)
          })
        })
      },
      showInput() {
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
                 this.dynamicTags.push(inputValue);
              }
            })
            .catch(error=>{
              console.log(error)
            })
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    },
    components:{
      blog
    },
    mounted() {
        this.$axios.get("/labels")
        .then(res=>{
          if(res.data.code==0){
              this.$data.dynamicTags=res.data.data;
          }
        })
        .catch(error=>{
          console.log(error)
        })
    }
  }
</script>
<style scoped="scoped">
  .articles-manage{
    box-sizing: border-box;
    width: 80%;
    padding: 10px;
    margin: 0 auto;
  }
  .articles-manage .blogs{
    max-width: 100%;
  }
 .tag-title{
    font-size: .5rem;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .dialog{
    font-size: .5rem;
  }

.blogs{

}


</style>
