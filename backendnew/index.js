require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "prishitapatel09",
  "id": 124763279,
  "node_id": "U_kgDOB2-8jw",
  "avatar_url": "https://avatars.githubusercontent.com/u/124763279?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prishitapatel09",
  "html_url": "https://github.com/prishitapatel09",
  "followers_url": "https://api.github.com/users/prishitapatel09/followers",
  "following_url": "https://api.github.com/users/prishitapatel09/following{/other_user}",
  "gists_url": "https://api.github.com/users/prishitapatel09/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prishitapatel09/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prishitapatel09/subscriptions",
  "organizations_url": "https://api.github.com/users/prishitapatel09/orgs",
  "repos_url": "https://api.github.com/users/prishitapatel09/repos",
  "events_url": "https://api.github.com/users/prishitapatel09/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prishitapatel09/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Prishita Patel",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-02-08T06:13:10Z",
  "updated_at": "2025-01-11T23:45:51Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('PrishitaPatel')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at code basics</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h2>code and code</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})