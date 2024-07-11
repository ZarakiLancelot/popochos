document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll("p, h1, h2, h3, h4, h5, span");
  paragraphs.forEach(p => {
    p.innerHTML = p.innerHTML.replace(/\./g, '<span class="fallback-font">.</span>');
    p.innerHTML = p.innerHTML.replace(/\,/g, '<span class="fallback-font">,</span>');
    p.innerHTML = p.innerHTML.replace(/([0-9.]+)/g, '<span class="fallback-font">$1</span>');
  });
});