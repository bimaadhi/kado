let currentMessageIndex = 0;

function showMessage() {
  const messages = [
    "Selamat Ulang Tahun Ya...",
    "Semoga Panjang Umur & Sehat Selalu..",
    "Aku tau Ini Cukup Berlebihan, tapi  Yasudahlah WKKWKKW",
    "Oh iyaa, aku juga mau ucapin sesuatu lagii..",
    "Maaf Tahun lalu aku ga ngucapin ke kamuu..😔",
    "Jujur after itu kaya ada yang ngeganjel di pikiran WKKWKWK",
    "Tapi gapapa lah yaa, namanya juga GENGSI WKWKWKWK",
    "Satuu lagiiii, janjii kokkkk",
    "Aku pengen ngucapin banyak-banyak terimakasih kekamu,, karena apa??",
    "Karena kamu udah ngerubah banyak banget di hidup aku😁😁",
    "Kamu udah mau dengerin cerita cerita randomku",
    "Kamu juga udah kasih banyak solusi ke akuu",
    "Kamu juga udah bersedia jadi rumah kedua ku setelah alm.ibukku",
    "Udah ahh, jadi sedih nantinyaa",
    "Intinya aku bakal selalu do'ain kamuuu",
    "Sehat Sehat ya rumahkuu, Be Happy Always.."
  ];

  // Hapus pesan lama kalau ada
  const existingMessage = document.getElementById('message');
  if (existingMessage) existingMessage.remove();

  // Hentikan kalau sudah sampai akhir
  if (currentMessageIndex >= messages.length) return;

  const message = messages[currentMessageIndex];
  currentMessageIndex++; // naikkan index untuk klik berikutnya

  const p = document.createElement('p');
  p.id = 'message';
  p.textContent = message;
  p.setAttribute('data-aos', 'fade-up');
  p.setAttribute('data-aos-duration', '1000');

  const button = document.querySelector('.container button');
  button.insertAdjacentElement('afterend', p);

  AOS.refresh();
}

  
// Musik
let isPlaying = false;
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
}

// Ganti Tema
let themeIndex = 0;
const themes = [
  { start: "#ffdde1", end: "#ee9ca7", button: "#ff6f91", hover: "#ff4e7c" },
  { start: "#a1c4fd", end: "#c2e9fb", button: "#4facfe", hover: "#00f2fe" },
  { start: "#fbc2eb", end: "#a6c1ee", button: "#a18cd1", hover: "#fbc2eb" },
  { start: "#222831", end: "#393E46", button: "#00ADB5", hover: "#EEEEEE" }
];

function changeTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
  const theme = themes[themeIndex];
  document.documentElement.style.setProperty("--bg-start", theme.start);
  document.documentElement.style.setProperty("--bg-end", theme.end);
  document.documentElement.style.setProperty("--button-color", theme.button);
  document.documentElement.style.setProperty("--button-hover", theme.hover);
}

// Efek Partikel Hati
const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: 10 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    alpha: 0.8 + Math.random() * 0.2
  };
}

function drawHeart(h) {
  ctx.fillStyle = `rgba(255,105,180,${h.alpha})`;
  ctx.beginPath();
  ctx.moveTo(h.x, h.y);
  ctx.bezierCurveTo(h.x - h.size / 2, h.y - h.size / 2,
                    h.x - h.size, h.y + h.size / 3,
                    h.x, h.y + h.size);
  ctx.bezierCurveTo(h.x + h.size, h.y + h.size / 3,
                    h.x + h.size / 2, h.y - h.size / 2,
                    h.x, h.y);
  ctx.fill();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    h.y += h.speed;
    drawHeart(h);
    if (h.y > canvas.height) hearts[i] = createHeart();
  });
  requestAnimationFrame(animateHearts);
}

for (let i = 0; i < 30; i++) hearts.push(createHeart());
animateHearts();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});  