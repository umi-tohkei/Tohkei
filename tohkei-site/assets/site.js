document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'閉じる ×':'MENU ☰';});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){toggle.click();toggle.focus();}});}
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject='【Tohkei お問い合わせ】'+data.get('kind');const body=['種別：'+data.get('kind'),'お名前：'+data.get('name'),'メール：'+data.get('email'),'所属：'+(data.get('company')||'未入力'),'','お問い合わせ内容：',data.get('message')].join('\n');document.querySelector('#form-status').textContent='メールアプリを開きます。内容を確認し、メールアプリから送信してください。';window.location.href='mailto:tohkei.info@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);});}

