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
  ['sourceEditor']     //新添加的工具
];
const handlers = {
  isOn:false,
  shadeBox:null,
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
  }
};
