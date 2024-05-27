var posts=["2024/04/23/Java开发手册/","2024/05/06/代码学习/","2024/05/06/Java-Classfinal-加密Jar/","2024/05/27/Git-使用方法及规范/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };