<template>
  <div class="bt">
      <div class="cont">
          <label> 输入ip 查询历史bt下载记录</label>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
      </div>
  </div>
</template>



<script>
export default {
  name: 'btInfo',
  data () {
    return {
      value:[],
    }
  },
  created(){
    this.$axios.get('http://47.100.99.23:81/btCount')
    .then(res=>{
          console.log(res.data);
         // this.date=res.data.data
    })
    .catch(error=>{
      console.log(error);
    })


  },
  mounted() {
    // // 设置 最小高度
    // let content = document.getElementById("content");
    // if(content){
    //   content.style.minHeight=document.documentElement.clientHeight-document.getElementById("nav").clientHeight-document.getElementById("footer").clientHeight-30+"px";
    // }


  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .bt{
        min-height: calc(100vh - 2rem);
  }
.cont{
  border-radius: 4px;
  background: #fff;
	margin: 20px auto;
	// max-width: 800px;
  max-width: 1000px;
  padding: 0.272727rem;
  font-size: 0.290909rem;

    //动画时间
      .duration{
        transition-duration: 1s;
        -moz-transition-duration: 1s; /* Firefox 4 */
        -webkit-transition-duration: 1; /* Safari 和 Chrome */
        -o-transition-duration: 1s; /* Opera */
      }

	}



</style>
