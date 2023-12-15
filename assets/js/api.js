const api = {
  async getUser(username) {
    try {
      const result = await fetch(`https://api.github.com/users/${username}`);

      if (!result.ok) {
        return alert('User not found');
      }

      const response = await result.json();
			
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
