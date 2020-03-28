<template>
  <div class="aboutManage">
    <el-button type="primary" class="addBtn" icon="el-icon-edit" @click="dialogFormVisible = true">新建</el-button>
    <el-card class="box-card item" shadow="hover"
    v-for="(content,i) in mydata"
    :key="i">

     <div class="title">{{content.title}}</div>
     <div class="text">{{content.text}}</div>
     <div class="time">{{content.date}}</div>
     <i @click="open(i,content.date)" class="el-alert__closebtn el-icon-close"></i>
    </el-card>


    <el-dialog title="添加" custom-class="dialog" id="dialog" :visible.sync="dialogFormVisible"
    :close-on-click-modal="false">
      <el-form>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.date"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
         <el-form-item label="标题" :label-width="formLabelWidth">
           <el-input type="text" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
           <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default{
    name:"about-manages",
    data(){
      return {
          mydata:[],
          dialogFormVisible:false,
          form:{
            title:"",
            date:"",
            text:"",
          },
          formLabelWidth:"120px",
      }
    },
    methods:{
      add(){
        if( (this.form.date!="") && (this.form.title!="") && (this.form.text!="")){
          this.$axios.get("/admin/addIntro?date="+this.form.date+"&title="+this.form.title+"&text="+this.form.text)
          	.then(res=>{
          		if(res.data.code==0){
          				 this.$message({
          				  type: 'success',
          				  message: '添加成功!'
          				});
                  this.mydata.push(this.form);
                  this.form={};
                  this.dialogFormVisible = false;
          		}else{
                this.$message.error('添加失败！');
              }
          	})
        }else{
                this.$message({
                  type: 'warning',
                  message: '请填写完整!'
                });
        }
      },
      open(i,date) {
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
                //删除removeIntro
            this.$axios.get("/admin/removeIntro?date="+date)
          		.then(res=>{
          			if(res.data.code==0){
                   this.$message({
                    type: 'success',
                    message: '删除成功!'
                    });
          					this.mydata.splice(i, 1);
          			}else{
                   this.$message.error('删除失败！');
                }
          		})
          		.catch(error=>{
          			console.log(error);
          		})
        }).catch(() => {
          //取消
        });
      },
    },
    created(){
      // 获取 个人 列表
        this.$axios.get('/intro')
        .then(res=>{
          if(res.data.code==0){
              this.mydata=res.data.data;
          }
        })
        .catch(error=>{
          console.log(error);
        })
    },
  }
</script>
<style lang="scss" scoped="scoped">
  .aboutManage{
    box-sizing: border-box;
    width: 80%;
    padding: 10px;
    margin: 0 auto;
    .addBtn{
      margin: 10px;
      float: right;
    }
    .item{
      width: 100%;
      position: relative;
      font-size: .2rem;
      line-height: .4rem;
      margin-top:20px;
      .time{
        position: absolute;
        right: 10px;
        bottom: 5px;
        color: darkgrey;
      }
      .title{
        font-size: .35rem;
        line-height: .8rem;
        font-weight: 550;
      }
      .text{
        text-indent: 1em;
      }
    }
  }

</style>
