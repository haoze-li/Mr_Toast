let isRotating = false; // 记录当前是否在旋转

// 获取所有图片
const images = document.querySelectorAll(".grid-image");

// 为整个网页绑定点击事件
document.addEventListener("click", () => {
    if (isRotating) {
        // 如果正在旋转，则跳转到 index.html
        window.location.href = "index.html";
    } else {
        // 如果没有旋转，则开始旋转所有图片
        images.forEach((img, index) => {
            img.style.animation = `rotate-animation ${2 + index * 0.5}s linear infinite`;
        });
        isRotating = true; // 更新状态为旋转中
    }
});

// 动态创建旋转动画的 CSS 样式
const style = document.createElement("style");
style.innerHTML = `
@keyframes rotate-animation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}`;
document.head.appendChild(style);