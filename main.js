var $=function(s){return document.querySelectorAll(s)},G=function(i){return document.getElementById(i)};
$('img').forEach(function(i){i.addEventListener('error',function(){i.style.visibility='hidden'})});
var b=$('.menu')[0],l=G('links');
if(b){b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});l.addEventListener('click',function(){l.classList.remove('open')})}
G('yr').textContent=new Date().getFullYear();
addEventListener('scroll',function(){var h=document.documentElement;G('bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
$('.gl').forEach(function(g){g.addEventListener('pointermove',function(e){var r=g.getBoundingClientRect();g.style.setProperty('--x',(e.clientX-r.left)+'px');g.style.setProperty('--y',(e.clientY-r.top)+'px')})});
var rv=$('.gl,.cc,.prod figure,.gal figure,.lg img');rv.forEach(function(e){e.classList.add('rv')});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});
rv.forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var el=x.target,to=+el.dataset.to,s=null;(function f(t){s=s||t;var p=Math.min((t-s)/1300,1);el.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(f)})(performance.now())})});
$('[data-to]').forEach(function(e){co.observe(e)});
$('.flt button').forEach(function(bt){bt.addEventListener('click',function(){$('.flt button').forEach(function(x){x.classList.remove('on')});bt.classList.add('on');$('.gal figure').forEach(function(f){f.style.display=(bt.dataset.f==='all'||f.dataset.cat===bt.dataset.f)?'':'none'})})});
var rail=G('rail');
if(G('nx')){G('nx').onclick=function(){rail.scrollBy({left:360,behavior:'smooth'})};G('pv').onclick=function(){rail.scrollBy({left:-360,behavior:'smooth'})}}
var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<img alt=""><p></p>';document.body.appendChild(lb);
$('.prod figure,.gal figure,.ct figure').forEach(function(f){f.addEventListener('click',function(){lb.querySelector('img').src=f.querySelector('img').src;lb.querySelector('p').textContent=f.dataset.cap||'';lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
if(G('wabtn'))G('wabtn').onclick=function(){var f=G('enq');if(!f.reportValidity())return;var E=encodeURIComponent;window.open('https://wa.me/919326163888?text='+E('Enquiry from website\nName: '+f.name.value+'\nCompany: '+f.company.value+'\nPhone: '+f.phone.value+'\nEmail: '+f.email.value+'\nProduct: '+f.product.value+'\nCity: '+f.city.value+'\nMessage: '+f.message.value),'_blank')};
if(G('sent')&&location.search.indexOf('sent=1')>-1)G('sent').hidden=false;
