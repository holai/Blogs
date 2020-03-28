<template>
	<div class="edit_container">
     <!-- 标签选择和操作按钮列表 -->
    <el-row>
      <el-col :xs="24" :sm="12" >
        <el-select
          class="select"
          v-model="my_data.labels"
          multiple
          filterable
          default-first-option
          placeholder="请选择文章标签">
          <el-option
            v-for="item in selectOptions"
            :key="item"
            :label="item"
            :value="item"
            >
          </el-option>
        </el-select>
      </el-col>
      <el-col class="btnlist" :xs="24" :sm="12"  >
          <el-button  class="hidden-sm-and-down xs_show" type="danger" icon="el-icon-delete" plain>删除</el-button>
<!--          <el-button type="warning" icon="el-icon-star-off" plain>草稿箱</el-button>
          <el-button type="success" icon="el-icon-check" plain>保存草稿</el-button> -->
          <el-button  type="primary" icon="el-icon-upload" @click="dialogFormVisible=true" plain>{{!isroutr ? '发布' : '修改'}}</el-button>
      </el-col>
    </el-row>
    <!-- 标题输入框 -->
		<el-input
      class="titleInput"
      spellcheck="false"
		  placeholder="输入文章标题"
		  v-model="my_data.title"
		  clearable>
		</el-input>
    <!-- 富文本编辑器 -->
    <quill-editor
      id="editor"
      class="editor"
      v-model="my_data.text"
      spellcheck="false"
      ref="myQuillEditor"
      :options="editorOption">
    </quill-editor>
    <!-- HTML显示框 -->
    <textarea id="show" spellcheck="false"></textarea>
    <!-- 上传 -->
    <el-dialog title="确认发布" :visible.sync="dialogFormVisible"  width="10rem">
      <el-form >
        <el-form-item label="上传封面" >
          <el-upload
            v-loading="loading"
            class="avatar-uploader"
            action="/admin/imageFile"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="my_data.image" :src="my_data.image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="upload">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
  // 引入 vue-quill-editor
import { Quill,quillEditor } from "vue-quill-editor";
import quillConfig from "@/assets/js/quill-config.js";
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
// import '@/assets/styles/show.scss';

export default {
    components: {
          quillEditor
         // 'quillEditor': () => import('vue-quill-editor')   // 懒加载
    },
    data() {
      return {
        my_data:{
          title:"",
          text:"",
          labels:[],
          image:"",
        },
        editorOption: quillConfig,
        selectOptions: [
          "HTML",
          "CSS",
          "javascript",
          "Java"
        ],
        dialogFormVisible:false,
        loading:false,
        isroutr:false,
      }
    },
    methods: {
       handleAvatarSuccess(res, file) {
        if(res.code==0){
          this.my_data.image=res.data;
          this.loading=false;
        }else{
          this.$message.error('失败!');
        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type.indexOf('image');
        const isLt2M = file.size / 1024 / 1024 < 4;
        if (isJPG) {
          this.$message.error('上传图片!');
        }else if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 4MB!');
        }else{
          this.loading=true;
          return true;
        }
        return false;
      },
      upload(){
        let data = this.my_data;
        if(data.title ==""){
          this.$message.error('请填写标题!');
          return;
        }
        if(data.text ==""){
          this.$message.error('请书写内容!');
          return;
        }
        if(data.labels ==""){
          this.$message.error('请选择标签!');
          return;
        }
        if(typeof(data.image) == "undefined"){
          data.image="";
        }
        var params = new URLSearchParams();
        params.append("title",data.title);
        params.append("text",data.text);
        params.append("labels",data.labels);

        params.append("image",data.image);
        let url = "/admin/addArticles";
        if(this.isroutr){
          params.append("id",this.$route.params.id);
          url ="/admin/alterArticles"
        }
        this.$axios({
        	method: 'post',
        	url:url,
        	data:params,
          withCredentials:true
        }).then(res=>{
        	if(res.data.code==0){
            this.$message({
              type: 'success',
              message: res.data.data,
            });
            data.image="";
            data.title="";
            data.text="";
            data.labels="";
            this.dialogFormVisible = false;
        	}else{
        	console.log(res);
        	}
        })
        .catch(error=>{
          console.log(error);
        })
      }
    },
    computed: {
    },mounted(){

      // const code = Quill.import("formats/code-block"); // 导出link模块的formats方法
      // class Mycode extends code {  // 继承父类
      //   static create(value) {
      //     let node = super.create(value); //调用父类的方法生成node节点
      //     // console.log(node.appendChild(li));
      //     // console.log(this.sanitize(value));
      //     // value = this.sanitize(value); // 使用sanitize取出value
      //     value = "";
      //     //判断是否拥有协议前缀 无则添加默认前缀
      //     if (!(value.indexOf("http://") === 0 || value.indexOf("https://") === 0)) {
      //       value = "http://" + value;
      //     }
      //     // 设置href属性
      //     // node.setAttribute("href", value);
      //     return node;
      //   }
      // }
      // Quill.register(Mycode, true);

      quillConfig.initButton(); // 初始化工具栏配置
      if(this.$route.params.id){
        	this.$axios.get("/article?id="+this.$route.params.id)
          .then(res=>{
            if(res.data.code==0){
              this.isroutr=true;
                this.my_data=res.data.data;
            }
          })
          .catch(error=>{
            console.log(error)
          })
      }else{
         	this.$axios.get("/labels")
         	.then(res=>{
         		if(res.data.code==0){
         				this.selectOptions=res.data.data;
         		}
         	})
         	.catch(error=>{
         		console.log(error)
         	})
      }
    },

}
</script>

<style lang="scss" scoped="scoped">
	.edit_container{
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    height: 100%;
    padding: 0.10909rem;
      .titleInput{
        border-radius:0px;
        margin-top: 20px;
      }
      #editor{
        display: flex;
        flex-direction: column;
        flex: 1;
        border-bottom: 1px solid #ccc;
		overflow: auto;
      }
      #show{
        font-size: .4rem;
        line-height: .5rem;
        letter-spacing: 1px;
        font-weight: 550;
        padding: 0;
        margin: 0;
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: none;
      }

      .btnlist{
        text-align: end;
      }
      .ql-toolbar.ql-snow{
        border-top: none;
      }
    // 上传图片 样式
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
	}




  // 响应
  @media (max-width: 768px) {
    .edit_container{
      .select{
      	width: 100%;
       }
      .btnlist{
        text-align: left;
      }
      .xs_show{
        display: inline-block !important;
      }
    }

  }

  @media (max-width: 533px) {
    .edit_container{
      width: 100%;

      .btnlist{
        text-align: left;
        .el-button{
        }
      }
    }
  }

   @media (max-width: 476px) {

   }
</style>
<style lang="scss">
  @import '@/assets/styles/show.scss';
  @import '@/assets/styles/snow.scss';
</style>
