const img = document.getElementById("movingImg");
let x = 100, y = 100, dx = 1, dy = 1; // 初始位置和速度
let angle = 0; // 初始旋转角度

// 吐司的移动和旋转动画
function move() {
    const rect = img.getBoundingClientRect();
    const width = window.innerWidth, height = window.innerHeight;

    // 检测边缘反弹
    if (x + rect.width >= width || x <= 0) dx = -dx;
    if (y + rect.height >= height || y <= 0) dy = -dy;

    x += dx;
    y += dy;
    angle += 0.5; // 每帧旋转0.5度

    // 更新位置和旋转样式
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = `rotate(${angle}deg)`; // 旋转图像

    requestAnimationFrame(move); // 循环动画
}

// 启动原始吐司的动画
move();

// 创建新吐司分身的函数
function createToast(e) {
    const newToast = document.createElement("div");
    newToast.classList.add("toast");
    newToast.style.width = "400px";
    newToast.style.height = "400px";
    newToast.style.background = "url('MrToast.png') no-repeat center/cover";
    newToast.style.position = "absolute";
    
    // 获取点击位置，将新吐司位置设置为点击位置
    const clickX = e.clientX;
    const clickY = e.clientY;
    newToast.style.left = `${clickX - 200}px`; // 使吐司从点击位置重叠
    newToast.style.top = `${clickY - 200}px`;

    document.body.appendChild(newToast);

    let x = clickX - 200, y = clickY - 200;  // 初始位置
    let dx = 1 + Math.random() * 2;  // 随机速度
    let dy = 1 + Math.random() * 2;
    let angle = 0;

    // 吐司分身的移动和旋转动画
    function moveToast() {
        const rect = newToast.getBoundingClientRect();
        const width = window.innerWidth, height = window.innerHeight;

        // 检测边缘反弹
        if (x + rect.width >= width || x <= 0) dx = -dx;
        if (y + rect.height >= height || y <= 0) dy = -dy;

        x += dx;
        y += dy;
        angle += 0.5; // 每帧旋转0.5度

        // 更新位置和旋转样式
        newToast.style.left = x + "px";
        newToast.style.top = y + "px";
        newToast.style.transform = `rotate(${angle}deg)`; // 旋转图像

        requestAnimationFrame(moveToast); // 循环动画
    }

    moveToast(); // 启动新的吐司分身动画

    // 给新吐司也添加分身功能
    newToast.addEventListener("click", createToast);
}

// 吐司点击事件
img.addEventListener("click", createToast);