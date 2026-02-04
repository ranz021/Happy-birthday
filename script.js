/* ================= FOTO (LINK ONLINE) ================= */
const PHOTO_URL = "https://files.catbox.moe/vnew4y.jpg"; // GANTI DI SINI
document.getElementById("mainPhoto").src = PHOTO_URL;

/* ================= CARD CONTROL ================= */
const cards = {
  landing: byId("card-landing"),
  message: byId("card-message"),
  form: byId("card-form"),
  success: byId("card-success")
};

function byId(id){ return document.getElementById(id); }

function nextCard(name){
  Object.values(cards).forEach(c => c.classList.add("hidden"));
  cards[name].classList.remove("hidden");
}

/* ================= TYPE EFFECT ================= */
const text =
  "Semoga panjang umur, sehat selalu, dan semua mimpimu tercapai 💖";
let i = 0;
(function type(){
  if(i < text.length){
    byId("typing").innerHTML += text[i++];
    setTimeout(type, 50);
  }
})();

/* ================= FORM (GITHUB PAGES) ================= */
byId("form").addEventListener("submit", e => {
  e.preventDefault();
  nextCard("success");
});

/* ================= CONFETTI ================= */
const c = byId("confetti");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

const confetti = Array.from({length:120}, () => ({
  x: Math.random() * c.width,
  y: Math.random() * c.height
}));

(function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  confetti.forEach(p => {
    ctx.fillStyle = "#ff4fd8";
    ctx.fillRect(p.x, p.y, 4, 4);
    p.y += 2;
    if(p.y > c.height) p.y = 0;
  });
  requestAnimationFrame(draw);
})();
