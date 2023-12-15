const app = {
  init() {
    console.log('app init');
    search.init();
    theme.init();
  },
};

document.addEventListener('DOMContentLoaded', app.init);
