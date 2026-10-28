(()=>{const W='5546991247573',rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.wa').forEach(a=>{const m=a.dataset.msg||'Olá! Vim pelo site da Doces Luiza 🩷';a.href='https://wa.me/'+W+'?text='+encodeURIComponent(m);a.target='_blank';a.rel='noopener'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
const c=document.querySelector('[data-count]');if(c){let n=0;const t=+c.dataset.count,s=()=>{n++;c.textContent=n;if(n<t)setTimeout(s,rm?0:60)};s()}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelector('.tabs .on').classList.remove('on');b.classList.add('on');const f=b.dataset.f;
document.querySelectorAll('#grid .item').forEach(it=>{const show=f==='all'||it.dataset.c===f;it.classList.toggle('out',!show);it.classList.remove('pop');if(show){void it.offsetWidth;it.classList.add('pop')}})});
const pg=document.getElementById('pg'),nav=document.getElementById('nav'),par=[...document.querySelectorAll('[data-par]')];let ly=0,tk=0;
addEventListener('scroll',()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;pg.style.width=(y/h*100)+'%';
nav.classList.toggle('hide',y>ly&&y>300);ly=y;if(!rm)par.forEach(p=>p.style.translate='0 '+(y*p.dataset.par)+'px')})},{passive:true});
if(!rm&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.tilt').forEach(el=>{el.onpointermove=e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`};el.onpointerleave=()=>el.style.transform=''});
})();
