// GLOBAL FUNCTION supaya tombol HTML bisa pakai onclick
function nextCard(name){
  const cards = {
    landing: document.getElementById("card-landing"),
    message: document.getElementById("card-message"),
    form: document.getElementById("card-form"),
    success: document.getElementById("card-success")
  };
  const themes = {
    landing:"#1e90ff",
    message:"#00bfff",
    form:"#1ca3ec",
    success:"#87cefa"
  };

  Object.values(cards).forEach(c=>{ if(c) c.classList.add("hidden"); });
  if(cards[name]) cards[name].classList.remove("hidden");
  document.documentElement.style.setProperty("--accent", themes[name]);

  // reset animasi teks
  if(cards[name]){
    cards[name].querySelectorAll(".text-animate").forEach(el=>{
      el.style.animation="none";
      el.offsetHeight;
      el.style.animation="";
    });
  }

  sweetMessage();
}

// TYPING EFFECT
const typingEl = document.getElementById("typing");
const typingText = "Semoga panjang umur, sehat selalu, dan semua mimpimu tercapai 💖";
let i = 0;
if(typingEl){
  (function type(){
    if(i < typingText.length){
      typingEl.innerHTML += typingText[i++];
      setTimeout(type, 50);
    }
  })();
}

// FORM SUBMIT SAFE
const formEl = document.getElementById("form");
if(formEl){
  formEl.addEventListener("submit", e=>{
    e.preventDefault();
    const data = [...formEl.querySelectorAll("input,textarea")].map(el=>el.value);
    console.log("Data form:", data);
    nextCard("success");
  });
}

// SWEET MESSAGE
const sweetTexts = [
  "Hari ini milikmu ✨",
  "Keep shining 💖",
  "Smile, it’s your day 🎂",
  "Semoga bahagia selalu 🌸"
];
function sweetMessage(){
  const el = document.getElementById("sweet");
  if(!el) return;
  el.innerText = sweetTexts[Math.floor(Math.random()*sweetTexts.length)];
  el.style.opacity = 1;
  setTimeout(()=>el.style.opacity=0, 2500);
}

// CONFETTI
const c = document.getElementById("confetti");
if(c){
  const ctx = c.getContext && c.getContext("2d");
  if(ctx){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    const confetti = Array.from({length:120}, ()=>({ x: Math.random()*c.width, y: Math.random()*c.height }));
    (function draw(){
      ctx.clearRect(0,0,c.width,c.height);
      confetti.forEach(p=>{
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(p.x,p.y,4,4);
        p.y += 2;
        if(p.y > c.height) p.y = 0;
      });
      requestAnimationFrame(draw);
    })();
    window.addEventListener("resize", ()=>{
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    });
  }
}

// MUSIC SAFE
const bgMusic = document.getElementById("bgMusic");
let musicPlayed = false;
document.body.addEventListener("click", ()=>{
  if(bgMusic && !musicPlayed){
    bgMusic.play().catch(()=>{});
    musicPlayed = true;
  }
}, {once:true});
