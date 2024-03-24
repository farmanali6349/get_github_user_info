## Get Github User Info
Enter any github username such as <code>farmanali6349</code>, this web app will display a card with a user profile image, name, bio, no. of repos, no. of followers and no. of followings.<br>

If <b>Name</b> is not available, it will display <b>username</b>.<br>
If <b>Bio</b> is not available, it will display <b>Bio not found</b>.<br>
If <b>username</b> is not invalid/not available at github, It will display a message under the input field.<br>

### Technical Details
<hr>
I have used github api <code>https://api.github.com/users/ + username</code> and fetched the details of the user using object of <code>XMLHttpRequest</code>.<br>
The common response for user <code>farmanali6349</code> is:<br>
<br>

```json
{
  "login": "farmanali6349",
  "id": 122867638,
  "node_id": "U_kgDOB1LPtg",
  "avatar_url": "https://avatars.githubusercontent.com/u/122867638?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/farmanali6349",
  "html_url": "https://github.com/farmanali6349",
  "followers_url": "https://api.github.com/users/farmanali6349/followers",
  "following_url": "https://api.github.com/users/farmanali6349/following{/other_user}",
  "gists_url": "https://api.github.com/users/farmanali6349/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/farmanali6349/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/farmanali6349/subscriptions",
  "organizations_url": "https://api.github.com/users/farmanali6349/orgs",
  "repos_url": "https://api.github.com/users/farmanali6349/repos",
  "events_url": "https://api.github.com/users/farmanali6349/events{/privacy}",
  "received_events_url": "https://api.github.com/users/farmanali6349/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Farman Ali",
  "company": "The Islamia University Bahawalpur",
  "blog": "https://farmanali6349.netlify.app/",
  "location": "Bahawalpur, Punjab, Pakistan",
  "email": null,
  "hireable": null,
  "bio": "Web Developer",
  "twitter_username": "farmanali6349",
  "public_repos": 26,
  "public_gists": 0,
  "followers": 1,
  "following": 10,
  "created_at": "2023-01-17T08:43:53Z",
  "updated_at": "2023-10-05T01:06:35Z"
}
```