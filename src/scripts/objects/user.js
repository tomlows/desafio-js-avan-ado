const user = {
    avatarURL: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    activities: [],
    setInfo(gitHubUser){
        this.avatarURL = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio 
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setActivities(activities){
        this.activities = activities
    }

}

export { user }

