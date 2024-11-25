document.getElementById("triggerImage").addEventListener("click", () => {
    // 获取元素
    const toastInfo = document.getElementById("toastInfo");
    const slicedBread = document.getElementById("slicedBread");
    
    // 使图片可见
    toastInfo.style.visibility = 'visible';
    slicedBread.style.visibility = 'visible';
  
    // 设置图片的初始位置在页面顶部不可见区域
    const startY = -100;  // 从网页顶部不可见区域生成
    toastInfo.style.top = `${startY}px`;
    slicedBread.style.top = `${startY}px`;
  
    const windowWidth = window.innerWidth;
    toastInfo.style.width = `${windowWidth * 0.49}px`;
    slicedBread.style.width = `${windowWidth * 0.49}px`;
  
    // 为了确保两张图片分开，我们设置它们的初始水平位置
    toastInfo.style.left = `${windowWidth * 0.51}px`;  // 右侧
    slicedBread.style.left = `${windowWidth * 0.01}px`;  // 左侧
  
    // 动画变量
    let toastY = startY, breadY = startY;
    let toastDy = 2, breadDy = 2;
    const gravity = 0.2;
    const elasticity = 0.5;
  
    // 动画函数
    function animate() {
      toastY += toastDy;
      breadY += breadDy;
  
      toastDy += gravity;
      breadDy += gravity;
  
      if (toastY + toastInfo.getBoundingClientRect().height >= window.innerHeight) {
        toastY = window.innerHeight - toastInfo.getBoundingClientRect().height;
        toastDy *= -elasticity;
        if (Math.abs(toastDy) < 1) toastDy = 0;
      }
  
      if (breadY + slicedBread.getBoundingClientRect().height >= window.innerHeight) {
        breadY = window.innerHeight - slicedBread.getBoundingClientRect().height;
        breadDy *= -elasticity;
        if (Math.abs(breadDy) < 1) breadDy = 0;
      }
  
      toastInfo.style.top = `${toastY}px`;
      slicedBread.style.top = `${breadY}px`;
  
      if (toastDy !== 0 || breadDy !== 0) {
        requestAnimationFrame(animate);
      }
    }
  
    animate();

    toastInfo.addEventListener("click", () => {
        window.location.href = "Buttered_toast_phenomenon.html";
    });

    slicedBread.addEventListener("click", () => {
        window.location.href = "Buttered_toast_phenomenon.html";
    });
  });