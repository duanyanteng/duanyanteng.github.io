var posts=["2024/04/23/Java开发手册/","2024/05/06/代码学习/","2024/05/06/Java-Classfinal-加密Jar/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };