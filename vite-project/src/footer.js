fetch('/footer.html') // Путь от корня проекта!
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  })
  .catch(err => console.error('Не удалось загрузить футер:', err));
