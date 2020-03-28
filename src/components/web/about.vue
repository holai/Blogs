<template>
<div class="block">
	<div class="intro">
    <div style="height: 100px;width: 100px;margin: 0 auto;border:1px #eee solid;border-radius: 100%;">
    <transition name="el-zoom-in-bottom">
      <img class="duration"  v-show="txdh" src="@/assets/tx.png" />
    </transition>
    </div>
		<div class="introtext">
			路 - 自由职业者 (无业)
			<div>
				<el-tag>懒癌晚期</el-tag>
				<el-tag type="success">直男癌</el-tag>
				<el-tag type="info">二次元</el-tag>
				<el-tag type="warning">宅男</el-tag>
				<el-tag type="danger">矮穷挫</el-tag>
			</div>
		</div>
	</div>

  <transition name="el-zoom-in-top">
    <el-timeline v-show="lbdh" class="duration"  v-loading="loading">
      <el-timeline-item v-for="(d,index) in date" :key="index" :timestamp="d.date" type="primary " placement="top"  >
        <el-card>
          <h4 class="title">{{d.title}}</h4>
          <p class="text">{{d.text}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </transition>
</div>
</template>



<script>
export default {
  name: 'about',
  data () {
    return {
			loading:true,
      date:[],
      txdh:false,  // 头像加载
      lbdh:false,
    }
  },
  created(){
    this.$axios.get('/intro')
    .then(res=>{
      if(res.data.code==0){
          this.date=res.data.data;
          this.loading=false;
      }
    })
    .catch(error=>{
      console.log(error);
    })
  },
  mounted() {
    setTimeout(()=>{this.txdh = true;},200);
    setTimeout(()=>{this.lbdh = true;},500);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content{
  .el-card__body{
    padding: 0.363636rem;
  }
}

.block{
	margin: 20px auto;
	max-width: 800px;
  padding: 0.272727rem;
	.intro{
		text-align: center;
    //动画时间
      .duration{
        transition-duration: 1s;
        -moz-transition-duration: 1s; /* Firefox 4 */
        -webkit-transition-duration: 1; /* Safari 和 Chrome */
        -o-transition-duration: 1s; /* Opera */
      }

		.introtext{
			font-size:.4rem;
			line-height: 2em;
		}
	}
  .el-timeline{
    padding:0.292727rem 0.21818rem;
  }
	.title{
		font-weight: 500;
		color: #000000;
    padding:.2rem;
    padding-left: 0;
    font-size: .3rem;
	}
	.text{
		line-height: 2em;
	}


}




</style>
