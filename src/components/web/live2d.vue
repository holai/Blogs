<template lang='pug'>

  div#live(@mouseenter="show_tool=true" @mouseleave="show_tool=false" v-if="lessie()")
    div.live2d-panel
      dialogue(v-if="isDialogue" :customDialogue="customDialogue" ref='dialogue')
      transition(name="el-fade-in-linear")
        live2d(v-if="islive2d"  :modelPath="modelPath" ref='l2dMange')
    div.tools-panel(v-show="show_tool")
      live2dTools(v-for="(item,index) in toolsData"   :toolsStyle="{'z-index':'100'}" id="tools" :height="item.height"  :key="index" v-if="item.show" :position="position" @click="toolsClick(item)" :width="item.width" :toolsID="item.id" :tabMsg="item.tabMsg" :customDialogue='item.customDialogue' :backgroundColor="item.backgroundColor" ref='tool')
</template>

<script>
	import live2d from 'live2d-vue'
	Vue.use(live2d);
	// import { quillEditor } from "vue-quill-editor";
import custom from './custom.js'
export default {
  // components:{
  // 	  live2d: () => import('live2d-vue'),
  // },
  data :()=>({
    modelPath: '',
    modelPaths: '',
    customDialogue: custom,
    position:'left',
    show_tool:false,
    tools_height:"56",
    toolsData:[
      {tabMsg:'对话',id:'dialogue',width: 280, show:false},
      // {tabMsg:'home',backgroundColor:'#ff0', show:true},
      {tabMsg:'换装',id:'change',backgroundColor:'#add8e6', show:true,height:'56'},
      {tabMsg:'保存',id:'save',backgroundColor:'#909399', show:true,height:'56'},
      // {tabMsg:'about',backgroundColor:'#eb7a77', show:true},
      {tabMsg:'隐藏',id:'hide',backgroundColor:'#E6A23C', show:true,height:'56'}
    ],
    islive2d: false,
    isDialogue: false
  }),
  mounted(){
    setTimeout(()=>{
      this.islive2d=true;
      this.isDialogue=true;
      // this.modelPath = 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json';
      this.modelPath = 'https://my.houlai.fun:444/src/assets/model/Tia/model.json'
    },2000);

    setInterval(()=>{
      if(this.isDialogue){
         let tool = this.$refs.tool.filter(item => { return item.customDialogue });
                     if(tool && tool.length > 0)
                       tool[0].showMessage(data.hitokoto)
      }
    },1000);

    // this.modelPath = 'http://47.100.99.23/src/model.json'

    // setTimeout(()=>{
    //   this.modelPaths = 'http://47.100.99.23/src/assets//model/Pio/model.json'
    // }, 2000)
  },
  methods:{
    toolsClick(item){
      switch(item.tabMsg)
      {
        // case 'home':
        //   window.open("https://github.com/LingHanChuJian/live2d-vue")
        //   break
        case '换装':
          let con = Math.floor(Math.random()*(76+1));
          this.$refs.l2dMange.setImgPath('https://my.houlai.fun:444/src/assets/model/Tia/textures/'+con+'.png')  //这个是换衣服地址
          break
        case '保存':
          this.$refs.l2dMange.save(`live2d-${Date.now()}.png`)
          break
        // case 'about':
        //   window.open("https://github.com/LingHanChuJian/live2d-vue")
        //   break
        case '隐藏':
          this.islive2d = false
          this.toolsDisplay('hide')
          break
        case 'show':
          this.islive2d = true
          this.toolsDisplay('show')
          break
      }
    },
    toolsDisplay(display){
      for(let i=0,len=this.toolsData.length;i<len;i++){
        let tabMsg =  this.toolsData[i].tabMsg
        if(display === 'hide'){
          if(tabMsg === 'home' || tabMsg === 'about')
            continue
          this.toolsData[i].show = false
          if(tabMsg === 'hide'){
            this.toolsData[i].show = true
            this.toolsData[i].tabMsg = 'show'
          }
        }else{
          this.toolsData[i].show = true
          if(tabMsg === 'show')
            this.toolsData[i].tabMsg = 'hide'
        }
      }
    },
    lessie(){
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
      var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
      return !isIE;   // 低于11 就 隐藏插件   （10不支持WebGL）
    }
  }
}
</script>

<style lang="stylus" scoped>
  #live
    z-index 0
    position fixed
    font-size 0.254545rem
    opacity .9
    bottom 0
  .tools-panel
    position fixed
    left 0
    bottom 0
    max-width 32px
    z-index 99
  .tools-panel a
    color #000000
   #tools
    height 56px
  .dialogue-live2d
    box-shadow 0 1px 2px rgba(0, 0, 0, .2)
    background-color rgba(241, 247, 254, 0.8)
    text-align center;
    line-height 30px;
    min-height: auto !important;
</style>
