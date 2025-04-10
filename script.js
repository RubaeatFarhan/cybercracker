<script>
    // Redirect to signup page when button is clicked
    function redirectToSignup() {
        window.location.href = "signup.html";
    }

    // Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Course Filter Function
    function filterCourses() {
        const input = document.getElementById('searchBar').value.toLowerCase();
        const courseCards = document.querySelectorAll('.course-card');

        courseCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('.course-description')?.textContent.toLowerCase();

            if (title.includes(input) || (desc && desc.includes(input))) {
                card.style.display = 'inline-block';
            } else {
                card.style.display = 'none';
            }
        });
    }

<script>
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
        if (content.id === target) {
          content.classList.add('active');
        }
      });
    });
  });

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
</script>

</script>


