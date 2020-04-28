<template>
  <div class="intro">
        <div class="head">
          <div class="touxiang">
             <el-avatar id="tx" class="tx" :size="75"  src="@/assets/tx.png" alt="后来的路"  >
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
             </el-avatar>
              <!-- <img class="tx" id="tx" width="75"  src="@/assets/tx.png" alt="后来的路"  /> -->
             <i class="j_item">应届</i>
             <i class="j_item">大专</i>
             <i class="j_item">19</i>
             <i class="j_item">河南</i>
          </div>
          <div class="js">
            <div class="name">
              <h3 class="name_tit">路**</h3>
              <el-tag type="success">男</el-tag>
              <el-tag type="info">热爱学习</el-tag>
              <el-tag type="warning">喜欢钻研</el-tag>
              <el-tag type="danger">细心负责</el-tag>
              <el-tag>乐观开朗</el-tag>
            </div>
             <el-divider class="hr" />
            <div class="name contact">
              <ul>
                <li>联系方式：</li>
                <li>Q Q： <a>1270123648</a></li>
                <li>邮箱： <a>1270123648@qq.com</a></li>
              </ul>
              <ul>
                <li>博客地址:</li>
                <li>GitHub：<a href="https://github.com/holai?tab=repositories" target="_blank">https://github.com/holai</a></li>
                <li>个人网站：<a href="http://47.100.99.23" target="_blank">http://47.100.99.23/</a></li>
              </ul>

            </div>
          </div>
        </div>

        <div class="intention">
            <el-divider class="hr" content-position="left">
              <div class="tit">
                <i class="el-icon-s-cooperation"></i>
                求职意向
              </div>
            </el-divider>
            <ul>
            	<li>前端开发工程师</li>
              <li>网页设计师</li>
              <li>后端开发工程师</li>
            </ul>
        </div>

        <div class="skill">
            <el-divider content-position="left">
              <div class="tit">
                <i class="el-icon-s-custom"></i>
                个人技能
              </div>
            </el-divider>
            <div class="cont">
              <div class="item">
                前端开发
                <div>
                  <div class="txt">
                   H5 JS JQ echart webpack Vue 小程序
                  </div>
                  <el-progress :text-inside="true" :format="format" :stroke-width="25" :percentage="50">ddd</el-progress>
                </div>

              </div>
<!--              <div class="item">
                后端开发
                <div>
                  <div class="txt">
                   Java Mysql Sqlserver SSM Linux
                  </div>
                  <el-progress :text-inside="true" :format="format" :stroke-width="25" :percentage="75" status="success"></el-progress>
                </div>
              </div> -->
              <div class="item">
                移动开发
                <div>
                  <div class="txt">
                   Java Layout XML Okhttp
                  </div>
                  <el-progress :text-inside="true" :format="format" :stroke-width="25" :percentage="20" status="warning"></el-progress>
                </div>
              </div>
              <div class="in">
                对 浏览器兼容问题 H5 CSS3 响应式设计 前端工程化 性能优化  非常熟悉。
              </div>
            </div>
        </div>

        <div class="works">
            <el-divider content-position="left">
              <div class="tit">
                <i class="el-icon-s-opportunity"></i>
                作品展示
              </div>
            </el-divider>
            <el-table
			  :fit="true"
              class="tab"
              :data="tableData"
              style="width: 100%">
                <el-table-column
                  label="项目名称">
                    <div slot-scope="scope">
                           <a target="_blank" style="color: #0074D9;" :href="scope.row.href">{{scope.row.name}}</a>
                           <div class="txt">
                             {{scope.row.href}}
                           </div>
                     </div>
                  </el-table-column>
                  <el-table-column
                    prop="th"
                    label="技术">
                  </el-table-column>
                  <el-table-column
                    prop="for"
                    label="简介">
                  </el-table-column>
                </el-table>
        </div>

        <div class="course">
            <el-divider content-position="left">
              <div class="tit">
                <i class="el-icon-s-claim"></i>
                个人历程
              </div>
            </el-divider>
             <el-timeline class="lc">
                <el-timeline-item timestamp="2019/2/12" placement="top">
                  <el-card>
                    <p>参加*********,************** *******</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/9/1" placement="top">
                  <el-card>
                    <p>于 ****** ************** *******</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/6/1" placement="top">
                  <el-card>
                    <p>在 ************** ******* </p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
        </div>

<!--        <footer>
           <a target="_blank" href="http://47.100.99.23/#/intro">此简历打印自——我的个人网站http://47.100.99.23/#/intro </a>
        </footer> -->
  </div>


</template>

<script>
    export default {
    	name:"intro",
      data() {
        return {
          tableData: [{
            name: '个人博客',
            href: 'http://47.100.99.23/',
            th:'Vue,Element,Axios,Java',
            for: '自己设计的个人博客网站'
          },{
            name: '天气预报',
            href: 'http://47.100.99.23/weather/',
            th:'Vue,echarts,axios',
            for: '响应式的天气预报网站 有图表显示'
          },{
            name: '王校长吃面包',
            href: 'http://47.100.99.23/wxz',
            th:'JQuery',
            for: '学习Js时写的小游戏，以大鱼吃小鱼的形式...'
          },{
            name: '响应式网站1',
            href: 'http://47.100.99.23/dx',
            th:'JQuery,bootstrap，...',
            for: '响应式设计'
          }]
        }
      },
      methods: {
            format(percentage) {
              if(percentage == 100){
                return '精通'
              }else if(percentage > 80){
                return '精通'
              }else if(percentage >= 60){
                return '熟练'
              }
              return percentage === 100 ? '满' : `${percentage}%`;
            }
      }
    }
</script>

<style lang="scss" scoped="scoped">

 body::-webkit-scrollbar {display:none}
 #tx>img{
   width: 100%;
 }
  .intro{
    padding: .5rem;
    overflow: hidden;
    width: 1000px;
    margin: 5px auto;
    padding: 10px 10px;
    width:794px;
    background: #fff;
    padding: .4rem;
    border-radius: 4px;
    .head{
      display:flex;
      .touxiang{
        position: relative;
        .tx{
          margin: 0 auto;
          margin: 40px 40px;
          width: 100%;
          img{
            width: 100%;
          }
        }
        .j_item{
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          text-align: center;
          color: #000;
          font-size: 10px;
          box-shadow: inset 0 0 20px 0.3125px hsla(100%,50%,0%,.1);
          -webkit-animation: pulse 2s linear infinite;
          animation: pulse 2s linear infinite;
        }
        .j_item:nth-child(2){
          top:10px;
          left: 110px;
        }
        .j_item:nth-child(3){
          top:100px;
          left: 10px;
        }
        .j_item:nth-child(4){
          top:90px;
          left: 120px;
        }
      }
    }
    .hr{
      margin: 10px 0;
    }
    .js{
      padding:10px 50px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .contact{
        flex: 1;
        display: flex;
        ul{
          flex: 1;
          display: flex;
          flex-direction: column;
          li{
            &:nth-child(1){
              padding-left: 0px;
            }
            flex: 1;
            padding-left: 2em;
            font-size: 10px;
            line-height: 18px;
            a{
              color: #409EFF;
            }
          }

        }
      }
      .name{
        font-size: 13px;
        .name_tit{
          font-size: 20px;
          font-weight: 600;
          color: #000088;
          display: inline;
          margin-right: 20px;
        }
        span{
            font-size: 0.2rem;
            height: auto;
            line-height: 2.5em;
        }
      }
    }
    .tit{
        font-size: 17px;
    }
    .intention{
      margin-top:10px;
      ul{
        height: 30px;
        line-height: 30px;
        font-size: 0.254545rem;
        list-style: circle;
        padding-left: 50px;
        li{
          margin-left: 50px;
          list-style-type: disc;
          float: left;
          font-weight: 400;
          text-decoration: underline;
        }
      }

    }
    .skill{
      .cont{
        font-size: 0.218181rem;
        padding-left: 50px;
        .item{
          font-weight: 400;
          line-height: 52px;
          margin: 0px 20px;
          display: flex;
          .txt{
            font-size: 0.2rem;
            font-weight: 400;
            padding-left: 20px;
            line-height: 0.280909rem;
          }
        }
        .in{
          font-size: 0.2rem;
          line-height: 1.1em;
          text-align: center;
          font-weight: 400;
          padding-left: 0.363636rem;
        }
        .item>div{
          margin-left: 8px;
          width: 600px;
        }
      }
    }
    .works{
      margin-top:20px;
      .tab{
        font-size:0.218181rem;
        padding: 0 0.90909rem;
		// table.el-table__body{
		// 	width: 100% !important;
		// }
        .txt{
          font-size: 0.145454rem;
        }
      }
      .el-table td, .el-table th{
            padding: 6px 0;
      }
    }
    .course{
        .lc{
          padding: 0 0.90909rem;
        }
        .el-card__body{
          padding: 18px;
        }
        h4{
          font-size: 0.218181rem;
          line-height: 16px;
        }
        p{
          font-size: 0.218181rem;
        }
    }
    footer{
      color: #909399;
      text-align: right;
      font-size: 0.181818rem;
    }
  }


  @media (max-width: 794px) {
      #content{
        width: 100%;
        box-sizing: border-box;
      }

  }

  @media (max-width: 776px) {
      #content{
        .cont{
          padding: 0;
          .item{
            display: flex;
            div{
              flex:1;
            }
          }
        }
        .tab{
          padding: 0;
        }
        .skill{
          margin-top: 0.818181rem;
        }
      }
  }

  @media (max-width: 655px) {
    #content{
      .el-divider--horizontal{
      }
      .js{
        padding: 10px 10px;
      }
      .touxiang{
        display: none;
      }
      .in{
        text-align: start;
        line-height: 1.4em;
        padding-left: 0;
      }
      .el-divider__text.is-left{
        left:0;
      }
      .el-divider__text{
        padding: 0;
      }

      .works{
        .tab{
          .txt{
            display: none;
          }
        }
      }
      .name{
        span{
            font-size: 0.2rem;
            height: auto;
            line-height: 2.5em;
        }
      }

    }

  }



</style>
