<template>
    <div class="comment" >
		<div class="cz">
			<!-- 输入框 -->
			<el-input
			  ref="textarea"
			  :class="textStyle"
			  type="textarea"
			  :placeholder="textPlaceholder"
			  maxlength="100"
			  rows="3"
			  resize="none"
			  v-model="text"
			  show-word-limit>
			</el-input>
					<!-- 操作 -->
			<div class="handle">
			  <el-popover
				 placement="bottom"
				 width="400"
				 trigger="click">
				 <div class="emoticon" >
				   <span v-for="i in emoticon"  @click="text+=i" >{{i}}</span>
				 </div>
				 <svg slot="reference" t="1576248297187" class="icon" viewBox="0 0 1879 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1205" width="40" height="40"><path d="M939.209249 985.526012c260.439306 0 471.454335-211.163006 471.454335-471.454336S1199.500578 42.469364 939.209249 42.469364c-260.439306 0-471.602312 211.163006-471.602313 471.454335S678.621965 985.526012 939.209249 985.526012z m0-854.714451c211.606936 0 383.112139 171.505202 383.112138 383.112138s-171.505202 383.260116-383.112138 383.260116-383.112139-171.653179-383.112139-383.260116S727.602312 130.811561 939.209249 130.811561zM703.334104 384.295954c0-32.554913 26.339884-58.894798 58.894798-58.894798 32.554913 0 58.894798 26.339884 58.894797 58.894798 0 32.554913-26.339884 58.894798-58.894797 58.894797-32.406936 0-58.894798-26.339884-58.894798-58.894797z m353.66474 0c0-32.554913 26.339884-58.894798 58.894798-58.894798 32.554913 0 58.894798 26.339884 58.894797 58.894798 0 32.554913-26.339884 58.894798-58.894797 58.894797-32.406936 0-58.894798-26.339884-58.894798-58.894797z m6.215029 227.588439H815.944509c-17.313295 0-31.519075-14.20578-31.519075-31.519075v-3.847399c0-17.313295 14.20578-31.519075 31.519075-31.519075h247.269364c17.313295 0 31.519075 14.20578 31.519075 31.519075v3.847399c0 17.461272-14.20578 31.519075-31.519075 31.519075z" fill="#212121" p-id="1206"></path></svg>
			</el-popover>
			<div style="flex: 1;"></div>
				<el-button @click="isuser" size="small" :loading="commentBtn">发送</el-button>
				<el-button @click="text = ''" size="small">清除</el-button>
			</div>
		</div>

	   <!-- 评论展示 -->
	   <div class="zs">
		   <el-badge  class="title" :value="commentCount" >
				全部评论
		   </el-badge>
<!-- 			<el-switch
			  class="only"
			  v-model="only"
			  active-text="只看楼主">
			</el-switch> -->

			<div  style="flex:1"></div>

			<div class="rank">
				<el-link @click="rank=!rank"  :style="rank ? 'color:#4d4d4d;' : 'color:#909399;'" type="info">按时间正序</el-link>
				<el-divider  direction="vertical"></el-divider>
				<el-link @click="rank=!rank" :style="rank ? 'color:#909399;' : 'color:#4d4d4d;' " type="info">按时间倒叙</el-link>
			</div>

	   </div>

	   <div class="content">
		   <div class="item" v-for="(item,index) in conmmentDataSort" :key="index">
			   <div class="jj">
				   <el-image class="avatar" :src="'https://avatars0.githubusercontent.com/' + item.userName" lazy>
					 <div slot="error" class="image-slot">
					   <img width="40px" height="40px" src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
					 </div>
				   </el-image>
				   <div class="info">
					  <div class="name">{{item.userName}}</div>
					  <div class="time">{{item.date.substring(0,item.date.length-3) }}</div>
				   </div>
			   </div>
			   <div class="text">
				   {{item.txt}}
			   </div>
			   <el-divider></el-divider>
		   </div>
		   <div class="commentTs" v-if="commentCount==0">
			   暂无评论,快来抢沙发把！
		   </div>
	   </div>

	   <!--  登陆 -->
	   <el-dialog
	     title="请先登陆才能评论"
	     :visible.sync="dialogVisible"
	     width="10rem">
	     <!-- <span></span> -->
		 <div v-if="isLogin" style="display:flex;">
			<svg @click="openWindow"  style="flex:1;cursor: pointer;" t="1576420398647" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3656" width="128" height="128"><path d="M512.465 98.744c-236.05-2.401-429.41 187.034-431.998 423.242 0.894 183.912 120.176 346.283 295.332 402.018 21.6 3.93 29.451-9.04 29.451-20.436v-71.916c-120.17 25.545-145.7-56.59-145.7-56.59a112.364 112.364 0 0 0-47.914-62.089c-39.272-25.937 3.141-25.545 3.141-25.545a90.702 90.702 0 0 1 65.978 43.624c25.358 43.993 81.26 59.548 125.678 34.976a91.569 91.569 0 0 1 27.487-56.59c-95.825-10.615-196.36-46.768-196.36-209.067a163.13 163.13 0 0 1 43.591-114.358 148.652 148.652 0 0 1 4.32-111.609c15.896-35.223 36.525-11.397 117.815 43.229a419.24 419.24 0 0 1 216.002 0c82.471-54.626 117.82-43.229 117.82-43.229a148.657 148.657 0 0 1 4.32 111.61 163.145 163.145 0 0 1 45.945 113.57c0 162.695-101.321 198.458-196.36 209.067a98.273 98.273 0 0 1 29.452 78.594v115.933c0 13.752 7.856 24.756 29.457 20.43 174.63-56.071 293.466-218.106 294.545-401.622C941.878 285.778 748.52 96.343 512.465 98.744" fill="#231F20" p-id="3657"></path></svg>
		 </div>
		 <div v-if="!isLogin" style="width:100%;text-align: center;font-weight: 700;">
			 登陆成功  您的名字:{{user}}
		 </div>
	     <span slot="footer" class="dialog-footer">
	       <el-button v-if="isLogin" @click="dialogVisible = false">取 消</el-button>
	       <el-button type="primary" v-if="!isLogin" @click="dialogVisible = false">确 定</el-button>
	     </span>
	   </el-dialog>

    </div>

</template>

<script>

	import commentItem from "./comment-item.vue";
  export default {
    name:"comment",
		data() {
			return {
				textStyle:"",
				textPlaceholder:"来评论一番吧!",
				user:"",
				emoticon:["😄","😊","😃","😉","😍","😘","😚","😳","😁","😌","😜","😝","😒","😏","😓","😔","😖","😥","😰","😨","😣","😢","😭","😂","😱","😠","😪","😷","😇","😋","😧","😦","😯","😵","😛","😶","😎","😅","😟","👍","👎","👏","✌","🙏","✊","💔","💓","💖"],
				commentCount:23,
				// only:false,
				rank:true,
				conmmentData:[
					{userName:"houali",date:"2019.12.16 17:14",txt:"顶顶顶顶顶"},
					{userName:"houlai",date:"2019.12.16 17:14",txt:"CCsdfdsf大师傅犯得上发地方"},
				],
				text:"",
				dialogVisible: false,
				commentBtn:false,
				isLogin:true,
			}
		},
    methods:{
      isuser() {
        let login =this.getOneCookie("login");
        if(login){
          let id =this.getOneCookie(login);
          let userName =this.getOneCookie("name");
          if(this.text == ""){
            this.textStyle = "textarea_cw";
            this.textPlaceholder = "请填写后再提交!";
            // console.log(this.$refs.textarea);
            setTimeout(()=>{
              this.textStyle = "";
              // this.textPlaceholder = "来评论一番吧!";
            },800);
          }else{
            this.commentBtn = true;
            this.$axios.get("/AddComment?articleId="+this.articleId+"&text="+this.text+"&login="+login)
             .then(res=>{
               //this.conmmentData.push({name:userName,time:,txt:this.text});
               if(res.data.code == 0){
                 this.getComment();
                 this.commentBtn = false;
                 this.text = "";
                 this.$notify({
                           title: '提示',
                           message: '感谢您的评论',
                           offset: 100
                 });
               }else{
                 // console.log(res.data.data);
                 this.$notify({
                           title: '出现错误',
                           message: '错误问题:'+res.data.data,
                           offset: 100
                 });
               }
             })
             .catch(error=>{
               console.log(error)
             })
          }
        }else{
          this.dialogVisible=true;
        }
      },
      openWindow(){
        var isyd= navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        if(isyd){
             //移动端
             let url= 'https://github.com/login/oauth/authorize?client_id=0b8a98f25c08fe2c650b';
             location.href = url;
         return;
        }
        let url = 'https://github.com/login/oauth/authorize?client_id=0b8a98f25c08fe2c650b';
        let name='登陆';                            //网页名称，可为空;
        let iWidth=720;                          //弹出窗口的宽度;
        let iHeight=600;                         //弹出窗口的高度;
        //获得窗口的垂直位置
        let iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        //获得窗口的水平位置
        let iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        let param =  'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no';
        let loginWindow = window.open(url,name,param);
        let login;
        let out= setInterval(()=>{
          login =this.getOneCookie("login");
          if(login){
            loginWindow.close();
            this.user=this.getOneCookie("name");
            this.isLogin=false;
            // this.dialogVisible=false;
            clearInterval(out);
            return;
          }
        },200);
      },
      getOneCookie(objName){
        var arrStr = document.cookie.split("; ");
        for(var i = 0;i < arrStr.length;i ++){
          var temp = arrStr[i].split("=");
          if(temp[0] == objName){
            return unescape(temp[1]);
          }
        }
      },
      getComment(){
        //获取评论列表
        this.$axios.get("/GetComment?articleId="+this.articleId)
         .then(res=>{
           //this.conmmentData.push({name:userName,time:,txt:this.text});
          if(res.data.code == 0){
            this.commentCount = res.data.data.length;
            this.conmmentData = res.data.data;
          }
         })
         .catch(error=>{
           console.log(error)
         })
      }
    },
    components:{
      commentItem
    },
    computed:{
      conmmentDataSort(){
        return this.conmmentData.sort((a,b)=>{
          let aTimeString = a.date;
          let bTimeString = b.date;
          aTimeString = aTimeString.replace(/-/g,'/');
          bTimeString = bTimeString.replace(/-/g,'/');
          let aTime = new Date(aTimeString).getTime();
          let bTime = new Date(bTimeString).getTime();
          if(this.rank){
            return bTime - aTime;
          }else{
            return aTime - bTime;
          }
        });
      }
    },
    props:{
      articleId:""
    },
    mounted() {
      this.getComment();
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .comment{
      color: #4d4d4d;
	  box-sizing: border-box;
	  margin: 0.201818rem;
	  margin-bottom: 1.818181rem;
	.cz{
		box-sizing: border-box;
		width: 9rem;
		margin: 0.363636rem auto;
		.textarea_cw{
			color: red;
			border-color: red !important;
			animation-name: shaky-slow;
			animation-duration: 4s;
			animation-delay: 0s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
			animation-delay: 0s;
			animation-play-state: running;
		}
		.handle{
		  display: flex;
		  align-items: center;
		  .icon{
		    cursor: pointer;
			&:hover{
				color: #545454;
			}
		  }
		}
	}
	.zs{
		display: flex;
		align-items: center;
		.title{
			padding-left: 0.072727rem;
			height: 0.405454rem;
			line-height:0.405454rem;
			border-left: 3px solid #C21F39;
			font-size: 0.317272rem;
			span{
				font-size: 0.218181rem;
			}
		}
		// .only{
  //     //只读
  //     color:#4d4d4d;
  //     vertical-align: middle;
  //     font-size:0.317272rem;
		// 	margin-left: 0.545454rem;
		// }
		.rank{
      // 排序
			font-size: 0.272727rem;
		}
	}
	.content{
		margin-top:0.727272rem;
    // 每条评论
		.item{
			.jj{
				height: 0.727272rem;
				line-height: 0.363636rem;
				.avatar{
					width: 0.727272rem;
					height: 0.727272rem;
					border-radius: 90px;
					float: left;
				}
				.info{
					padding-left: 0.90909rem;
					.name{
						font-size: 0.272727rem;
						font-weight: 700;
					}
					.time{
						color: #909399;
						font-size: 0.218181rem;
					}
				}
			}
			.text{
				margin-top: 0.181818rem;
				padding-left: 50px;
				font-size: 0.272727rem;
			}
		}
    .commentTs{
      text-align: center;
      font-size: 18px;
    }
	}

  }
  .emoticon{
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    span{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      font-size: 0.343636rem;
      color: #404040;
      width: 0.525454rem;
      height: 0.525454rem;
      padding: 0.036363rem;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      &:hover{
        background-color: #303030;
      }
    }

  }

   @keyframes shaky-slow {
          0% {
              transform: translate(0px, 0px) rotate(0deg);
          }
          2% {
              transform: translate(-1px, 1.5px) rotate(1.5deg);
          }
          4% {
              transform: translate(1.3px, 0px) rotate(-0.5deg);
          }
          6% {
              transform: translate(1.4px, 1.4px) rotate(-2deg);
          }
          8% {
              transform: translate(-1.3px, -1px) rotate(-1.5deg);
          }
          10% {
              transform: translate(1.4px, 0px) rotate(-2deg);
          }
          12% {
              transform: translate(-1.3px, -1px) rotate(-2deg);
          }
          14% {
              transform: translate(1.5px, 1.3px) rotate(1.5deg);
          }
          16% {
              transform: translate(1.5px, -1.5px) rotate(-1.5deg);
          }
          18% {
              transform: translate(1.3px, -1.3px) rotate(-2deg);
          }
          20% {
              transform: translate(1px, 1px) rotate(-0.5deg);
          }
          22% {
              transform: translate(1.3px, 1.5px) rotate(-2deg);
          }
          24% {
              transform: translate(-1.4px, -1px) rotate(2deg);
          }
          26% {
              transform: translate(1.3px, -1.3px) rotate(0.5deg);
          }
          28% {
              transform: translate(1.6px, -1.6px) rotate(-1.5deg);
          }
          30% {
              transform: translate(-1.3px, -1.3px) rotate(-1.5deg);
          }
          32% {
              transform: translate(-1px, 0px) rotate(2deg);
          }
          34% {
              transform: translate(1.3px, 1.3px) rotate(-0.5deg);
          }
          36% {
              transform: translate(1.3px, 1.6px) rotate(1.5deg);
          }
          38% {
              transform: translate(1.3px, -1.6px) rotate(1.5deg);
          }
          40% {
              transform: translate(-1.4px, -1px) rotate(-0.5deg);
          }
          42% {
              transform: translate(-1.4px, 1.3px) rotate(-0.5deg);
          }
          44% {
              transform: translate(-1.6px, 1.4px) rotate(0.5deg);
          }
          46% {
              transform: translate(-2.1px, -1.3px) rotate(-0.5deg);
          }
          48% {
              transform: translate(1px, 1.6px) rotate(1.5deg);
          }
          50% {
              transform: translate(1.6px, 1.6px) rotate(1.5deg);
          }
          52% {
              transform: translate(-1.4px, 1.6px) rotate(0.5deg);
          }
          54% {
              transform: translate(1.6px, -1px) rotate(-2deg);
          }
          56% {
              transform: translate(1.3px, -1.6px) rotate(-2deg);
          }
          58% {
              transform: translate(-1.3px, -1.6px) rotate(0.5deg);
          }
          60% {
              transform: translate(1.3px, 1.6px) rotate(-0.5deg);
          }
          62% {
              transform: translate(0px, 0px) rotate(-1.5deg);
          }
          64% {
              transform: translate(-1.6px, -1.6px) rotate(-2deg);
          }
          66% {
              transform: translate(1.6px, -1.6px) rotate(0.5deg);
          }
          68% {
              transform: translate(0px, -1.6px) rotate(-2deg);
          }
          70% {
              transform: translate(-1.6px, 1px) rotate(1.5deg);
          }
          72% {
              transform: translate(-1.6px, 1.6px) rotate(2deg);
          }
          74% {
              transform: translate(1.3px, -1.6px) rotate(-0.5deg);
          }
          76% {
              transform: translate(1.4px, 1px) rotate(-0.5deg);
          }
          78% {
              transform: translate(-1px, 1.4px) rotate(2deg);
          }
          80% {
              transform: translate(1.4px, 1.6px) rotate(2deg);
          }
          82% {
              transform: translate(-1.6px, -1.6px) rotate(-0.5deg);
          }
          84% {
              transform: translate(-1.4px, 1.4px) rotate(-2deg);
          }
          86% {
              transform: translate(1px, 1.4px) rotate(-2deg);
          }
          88% {
              transform: translate(-1.4px, 1.4px) rotate(-1.5deg);
          }
          90% {
              transform: translate(-1.6px, -1.6px) rotate(-2deg);
          }
          92% {
              transform: translate(-1.4px, 1.6px) rotate(2deg);
          }
          94% {
              transform: translate(-1.6px, -1.6px) rotate(-2deg);
          }
          96% {
              transform: translate(-1.4px, 1.3px) rotate(-2deg);
          }
          98% {
              transform: translate(1.3px, 1px) rotate(-0.5deg);
          }
      }
</style>
