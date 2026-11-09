const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开导航');
}));
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...navigation.querySelectorAll('a')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach(link => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
}, {rootMargin:'-15% 0px -60% 0px', threshold:[0,0.25,0.5,1]});
sections.forEach(section => observer.observe(section));
document.querySelector('#year').textContent = String(new Date().getFullYear());
