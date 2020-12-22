//  quill 富文本编辑器的配置   -- 添加了自定义工具
const toolOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{'header': 1}, {'header': 2}],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],
  [{'size': ['small', false, 'large', 'huge']}],
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
  [{'color': []}, {'background': []}],
  [{'font': []}],
  [{'align': []}],
  [{'clean':'源码编辑'}],
  ['link', 'image', 'video'],
  ['sourceEditor'],     //新添加的工具
  ['updateImg'],
];
const handlers = {
  isOn:false,
  shadeBox:null,
  updateImg:function(){
    document.querySelector('.uploader input').click()
  },
  sourceEditor: function(){     //添加工具方法
   let text =this.container.nextElementSibling.firstChild;
   let textarea= document.getElementById("show");
   let kj = document.querySelector('.ql-sourceEditor');
   if(this.handlers.shadeBox == null){
     text.parentElement.appendChild(textarea);
     this.handlers.shadeBox=1;
   }
    if(!this.handlers.isOn){
      kj.innerText="富文本编辑";
      let html=text.innerHTML;
      text.style.display="none";
      textarea.style.display="block";
      textarea.value=html;
      this.handlers.isOn=true;
    }else{
      kj.innerText="HTML编辑";
      let html=textarea.value;
      textarea.style.display="none";
      text.style.display="block";
      text.innerHTML=html;
      this.handlers.isOn=false;

    }
  }
};
// const file  =document.createElement("input");
// document.addElement(file);
// file.type="file";
// file.onchange=function(ev){
//   console.log(ev);
//         // 生成一个文件读取的对象
//             const reader = new FileReader();
//             reader.onload = function (ev) {
//                 // base64码
//                 var imgFile =ev.target.result;//或e.target都是一样的
//                   console.log(imgFile)
//             }
//             //发起异步读取文件请求，读取结果为data:url的字符串形式，
//           // let imgBase =   reader.readAsDataURL(img.files[0]);

// };
// file.addEventListener('change', function(){
//     //如果未传入文件则中断
//     if(file.files[0] == undefined){
//         return;
//     }

//     var img = file.files[0];


//     var formData = new FormData();
//     formData.append('myPhoto',img);

//     Vue.prototype.$axios({
//       method: 'post',
//       url:"/admin/imageFile",
//       data:formData
//     }).then(res=>{
// 						if(res.data.code==0){
//                   var editor  =document.getElementsByClassName("ql-editor")[0];

//                   // console.log(editor.quillEditor);
//                  // 获取光标现在所在的位置上
//                         // let length = quill.getSelection().index;
//                         // quill插入我们刚刚上传成功之后的图片，arr是存在我们服务器上边的地址
//                         // quill.insertEmbed(length, 'image', arr)
//                         // 调整光标到图片之后的位置上
//                         // quill.setSelection(length + 1)


//                 //location.href="/#/admin"
// 								// this.$router.replace("/admin");
// 						}else{
// 							// this.open(res.data.data);
// 						}
// 					})
// 					.catch(error=>{
// 						  console.log("图片上传 错误："+error)
// 					})

    // console.log(img);




    //FileReader可直接将上传文件转化为二进制流
    // var reader = new FileReader();
    // reader.readAsDataURL(img);//转化二进制流，异步方法
    // reader.onload = async function(){//完成后this.result为二进制流
    //     // console.log(this.result);
    //     var base64Str = this.result;
    //     // console.log(this.result)
    //     // var startNum = base64Str.indexOf("base64,");
    //     // startNum = startNum*1 + 7;
    //     // console.log(base64Str)
    //     let data  = await compress(base64Str);
    //     console.log(data);
    //     //去除前部格式信息（如果有需求）
    //     // var baseStr = base64Str.slice(startNum);　
    //     var editor  =document.getElementsByClassName("ql-editor")[0];
    //     let image  =document.createElement("img");
    //     image.src=data;
    //     editor.appendChild(image);
    // }　　
// })

// 对图片进行压缩
function compress(img) {
  return new Promise(function(res,rej){
    //新建一个img标签
    var image = new Image();
    image.src = img;
    let imageWidth,imageHeight;
    image.onload=function(){
      imageWidth = image.width *0.5;
      imageHeight = image.height *0.5;

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      //压缩后图片的大小
      var data;

      canvas.width = imageWidth;
      canvas.height = imageHeight;
      context.drawImage(image, 0, 0, imageWidth, imageHeight);
      data = canvas.toDataURL('image/jpeg');//.replace("data:image/jpeg;base64,","")
      // var length=data.toString().length;
      // console.log(imageWidth,imageHeight,data)
      // if(length>1024*200){
      //     res compress(data);
      // }
      // image.src=data;
      res(data);
    }
  })
}
export default {
  placeholder: '',
  theme: 'snow',  // 主题
  modules: {
    toolbar: {
      container: toolOptions,  // 工具栏选项
      handlers: handlers  // 事件重写
    }
  },
  initButton:function(){      //在使用的页面中初始化按钮样式
    let sourceEditorButton = document.querySelector('.ql-sourceEditor');
    sourceEditorButton.style.cssText = "width:80px; border:1px solid #ccc; border-radius:5px;";
    sourceEditorButton.innerText="源码编辑";

    let updateImg = document.querySelector('.ql-updateImg');


    updateImg.style.cssText = "width:80px; border:1px solid #ccc; border-radius:5px;";
    updateImg.innerText="上传图片";
  }
};
