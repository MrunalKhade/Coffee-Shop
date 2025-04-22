function toggleTheme() {
    document.body.classList.toggle("dark");
  
    // Optional: Save user preference in localStorage
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
  
  // On page load, apply saved theme
  window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  };
  

  function filterMenu(category) {
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  