const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60),{passive:true});
const burger=document.getElementById('burger'),mmenu=document.getElementById('mmenu');
burger.addEventListener('click',()=>{const o=mmenu.classList.toggle('open');burger.classList.toggle('open',o)});
mmenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mmenu.classList.remove('open');burger.classList.remove('open')}));
document.getElementById('hscr').addEventListener('click',()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'}));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}})},{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fi').forEach(el=>io.observe(el));