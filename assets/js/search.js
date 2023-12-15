const search = {
  init() {
    console.log('search init');
    document
      .querySelector('form')
      .addEventListener('submit', search.handleSearch);
  },
  async handleSearch(event) {
    event.preventDefault();

    const searchQuery = event.target[0].value;

    const user = await api.getUser(searchQuery);
    search.makeArticleInDOM(user);
    event.target[0].value = '';
  },
  makeArticleInDOM(user) {
    const articleContainer = document.querySelector('main');
    if (document.querySelector('article')) {
      articleContainer.removeChild(document.querySelector('article'));
    }
    const template = document.getElementById('articleContainer');
    const newArticle = document.importNode(template.content, true);

    const joinedDate = new Date(user.created_at);
    const day = joinedDate.getDate();
    const month = joinedDate.toLocaleDateString('en-US', { month: 'short' });
    const year = joinedDate.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    newArticle.querySelector('img').src = user.avatar_url;
    newArticle.querySelector('h2').textContent = user.name;
    newArticle.querySelector('.login').textContent = '@' + user.login;
    newArticle.querySelector('.bio').textContent = user.bio;
    newArticle.querySelector('.join-date').textContent =
      'Joined ' + formattedDate;
    newArticle.querySelector('.repos-nb').textContent = user.public_repos;
    newArticle.querySelector('.followers-nb').textContent = user.followers;
    newArticle.querySelector('.following-nb').textContent = user.following;
    newArticle.querySelector('.location').textContent =
      user.location || 'Not available';
    newArticle.querySelector('.twitter').textContent =
      user.twitter_username || 'Not available';
    newArticle.querySelector('.blog').textContent =
      user.blog || 'Not available';
    newArticle.querySelector('.github').href = user.html_url;

    const pEls = newArticle.querySelectorAll('p');
    pEls.forEach((p) => {
      console.log(p);
      if (p.textContent === 'Not available') {
        p.previousElementSibling.style.color = 'grey';
        p.style.color = 'grey';
      }
    });

    articleContainer.append(newArticle);
  },
};
