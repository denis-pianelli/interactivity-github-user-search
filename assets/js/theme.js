const theme = {
  init() {
    console.log('theme init');
    document
      .querySelector('.theme')
      .addEventListener('click', theme.handleTheme);
  },
  handleTheme() {
    if (document.querySelector('html').className === 'dark') {
      document.querySelector('html').className = 'light';
      document.querySelector('.theme span').textContent = 'dark';
      document.querySelector('.theme i').className = 'fa-regular fa-moon';
    } else {
			document.querySelector('html').className = 'dark';
      document.querySelector('.theme span').textContent = 'light';
      document.querySelector('.theme i').className = 'fa-regular fa-sun';
		}
  },
};
