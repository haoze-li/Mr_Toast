document.getElementById("catImage").addEventListener("click", function () {
    const catImage = document.getElementById("catImage");

    // 替换图片
    catImage.src = "cat&toast.png";

    // 开始动画
    let x = window.innerWidth / 2 - 240; // 图片的初始 X 坐标
    let y = window.innerHeight / 2 - 240; // 图片的初始 Y 坐标
    let dx = 4; // 每帧的水平移动量
    let dy = 3; // 每帧的垂直移动量
    let rotation = 0; // 当前旋转角度
    let rotationSpeed = 2; // 每帧的旋转速度

    const animate = () => {
        // 移动
        x += dx;
        y += dy;

        // 检测碰撞并反弹
        if (x <= 0 || x + catImage.offsetWidth >= window.innerWidth) {
            dx = -dx;
        }
        if (y <= 0 || y + catImage.offsetHeight >= window.innerHeight) {
            dy = -dy;
        }

        // 更新位置和旋转
        rotation += rotationSpeed;
        catImage.style.left = `${x}px`;
        catImage.style.top = `${y}px`;
        catImage.style.transform = `rotate(${rotation}deg)`;

        // 持续动画
        requestAnimationFrame(animate);
    };

    animate();
});