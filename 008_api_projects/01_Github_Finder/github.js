class Github {
  constructor() {
    this.client_id = 'dcf557d0a053791e2c62';
    this.client_secret = 'b5e881c1ad57c15bad88d6309150e69bcbd7f476';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    //User response
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    //Repo response
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
