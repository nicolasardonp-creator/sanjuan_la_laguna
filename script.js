const header=document.querySelector(".header");
const hamburger=document.querySelector(".hamburger");

window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>45));

hamburger.addEventListener("click",()=>{
  header.classList.toggle("open");
  hamburger.textContent=header.classList.contains("open")?"✕":"☰";
});

document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",()=>{
    header.classList.remove("open");
    hamburger.textContent="☰";
  });
});


// Animaciones suaves al entrar en pantalla
const revealItems=document.querySelectorAll(".destination > *, .experience, .culture-copy, .eco-card, .gallery-grid img, .why-visit div");
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("reveal-visible");revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
revealItems.forEach(el=>{el.classList.add("reveal");revealObserver.observe(el);});
