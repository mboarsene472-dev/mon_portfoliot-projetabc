
    function toggleTheme() {
      const root = document.documentElement;
      const cur = root.getAttribute('data-theme');
      const isLight = cur === 'light' || (!cur && window.matchMedia('(prefers-color-scheme: light)').matches);
      const next = isLight ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      document.getElementById('themeBtn').textContent = next === 'dark' ? '🌙' : '☀️';
      try { localStorage.setItem('theme', next); } catch (e) { }
    }
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        document.getElementById('themeBtn').textContent = saved === 'dark' ? '🌙' : '☀️';
      }
    } catch (e) { }

  function showToast(message, type = "success") {
  var toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("show");
  }, 10);

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 3000);
}

function sendemail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_204ydgl", "template_g0xsckf", params)
    .then(function(res){
      showToast("Message envoyé avec succès !", "success");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function(error) {
      showToast("Erreur lors de l'envoi du message.", "error");
    });
}