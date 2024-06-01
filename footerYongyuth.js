function setFooter() {
  const footerContainer = document.querySelector('.footer-container');
  footerContainer.innerHTML = `
    <footer class="text-center text-lg-start bg-light text-muted" style="position: static;left: 0;bottom: 0;width: 100%;">
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2024 Copyright | พัฒนาโดยครูยงยุทธ์ จันทิมา<br/>
      </div>
    </footer>
  `;
}
