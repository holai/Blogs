<template>
	<div class="from" :style="bgimage">
		<div class="center">
			<strong class="title">路 _ 后台登陆 </strong>
			<el-input class="text" placeholder="请输入内容" v-model="zh" clearable> </el-input>
			<el-input class="text" placeholder="请输入密码" v-model="mm" show-password></el-input>
			<el-button type="primary"  @click="dl" :loading="load">{{load ? "提交中" : "登陆"}}</el-button>
			<a href="/" class="fh">返回登陆</a>
		</div>
	</div>
</template>

<script>
	export function checkSpecificKey(str) {
  let specialKey = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
  for (let i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) != -1) {
      return false;
    }
  }
  return true;
}

	export default {
	  name: 'login',
	  data () {
	    return {
			zh:"",
			mm:"",
			load:false,
			bgimage:{backgroundImage:"url(./static/cs.jpg)"},
			dataurl:"/login",
      }
	  },
	  methods: {
	  	dl() {
			this.load=true;
			if (this.zh && this.mm) {
				if (!checkSpecificKey(this.zh+this.mm)) {
					this.open("不能输入特殊字符！")
					this.load=false;
				}else{
					var params = new URLSearchParams();
					params.append('name', this.zh);
					params.append('mm', this.mm);
					this.$axios({
						method: 'post',
						url:this.dataurl,
						data:params,
					}).then(res=>{
						if(res.data.code==0){
								//location.href="/#/admin"
								this.$router.replace("/admin");
						}else{
							this.open(res.data.data);
						}
					})
					.catch(error=>{
						this.open(error);
					})
				}
			}else{
				this.open("账号密码不能为空！");
			}
	  	},
		open(text) {
			this.$alert(text, '错误', {
			  confirmButtonText: '确定',
			  callback: action => {
				  this.load=false;
			  }
			});
		  }
	  },created(){
		  this.$axios.get(this.dataurl)
				.then(res=>{
					if(res.data.code==0){
							//location.href="/#/admin"
							this.$router.replace("/admin");
					}
				})
				.catch(error=>{
					console.log(error);
				})
		  },
	}
</script>

<style lang="scss"  scoped="scoped">
	.from{
		position: fixed;
		width: 100%;
		height: 100%;
		background-size: cover;
		-webkit-background-size: cover;
		-o-background-size: cover;
		background-position: center 0;

			.center{
				position: absolute;
				top:50%;
				left:50%;
				transform:translate(-50%,-50%);
				text-align: center;
				width: 350px;
				padding: 10px 30px 10px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
				.title{
					font-size: 20px;
					color: #333;
				}
				.text{
					margin-top:10px;
					margin-bottom:10px;
				}
				.fh{
					float: right;
					padding: 12px 20px;
					color: dodgerblue;
					cursor: pointer;
					font-size: 14px;
					line-height: 2;
				}
		}
	}
</style>
