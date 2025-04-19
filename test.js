// Inject style trực tiếp
const style = document.createElement("style");
style.innerHTML = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    height: 100%;
    overflow: hidden;
    background: black;
    font-family: monospace, Consolas, 'Courier New';
  }
  canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0;
  }
  body::before {
    content: "";
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }
  .container {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #00ff00;
    text-align: center;
  }
  .zeus-logo {
    width: 220px;
    margin-bottom: 30px;
    filter: drop-shadow(0 0 15px #00ff00);
  }
  h1 {
    font-size: 2rem;
    color: #00ff00;
    text-shadow:
      0 0 2px #00ff00,
      0 0 6px #00ff00,
      0 0 10px #00ff00;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.4rem;
    line-height: 1.8;
    text-shadow:
      0 0 3px #00ff00,
      0 0 6px #00ff00;
    max-width: 90%;
  }
`;
document.head.appendChild(style);

// Inject HTML giao diện
document.body.innerHTML = `
  <canvas id="canvas"></canvas>
  <div class="container">
    <svg class="zeus-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="#00ff00" stroke-width="4" fill="none" />
      <circle cx="50" cy="32" r="13" fill="#00ff00" />
      <path d="M20,78 Q20,55 50,55 Q80,55 80,78 A40,40 0 0 1 20,78 Z" fill="#00ff00"/>
    </svg>
    <h1>WEBSITE WAS HACKED BY DEOXYZ</h1>
    <p>
      This network has been compromised.<br/>
      Critical systems have been mapped.<br/>
      Your security is an illusion.<br/>
      Data exfiltration is ongoing.<br/>
      Mitigation is futile.<br/>
      We suggest: Disconnect now.
    </p>
  </div>
`;

// Matrix background effect
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = '01ΔΞ₪$#@*&▮▯⛨⚠'.split('');
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff00';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(drawMatrix);
}

drawMatrix();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
