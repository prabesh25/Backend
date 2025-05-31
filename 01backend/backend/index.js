// require('dotenv').config()
// import express  from 'express'

const express = require('express')
const app = express()
// const port = 4000

const githubData = {
    "login": "prabesh25",
    "id": 179995244,
    "node_id": "U_kgDOCrqCbA",
    "avatar_url": "https://avatars.githubusercontent.com/u/179995244?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/prabesh25",
    "html_url": "https://github.com/prabesh25",
    "followers_url": "https://api.github.com/users/prabesh25/followers",
    "following_url": "https://api.github.com/users/prabesh25/following{/other_user}",
    "gists_url": "https://api.github.com/users/prabesh25/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/prabesh25/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/prabesh25/subscriptions",
    "organizations_url": "https://api.github.com/users/prabesh25/orgs",
    "repos_url": "https://api.github.com/users/prabesh25/repos",
    "events_url": "https://api.github.com/users/prabesh25/events{/privacy}",
    "received_events_url": "https://api.github.com/users/prabesh25/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Prabesh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Frontend developer.",
    "twitter_username": null,
    "public_repos": 35,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-08-31T04:14:30Z",
    "updated_at": "2025-05-25T01:31:38Z"
}

// get "/" route ma listen garnu
//  ra kei request ayo vani 
// hello world response pathaunu
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/github', (req,res) => {
    res.json(githubData);
})


app.get("/login", (req, res) => {
    res.send("<h1>login garne ho ki haina, ho ki haina</h1>")
})

//list of 5 jokes
app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke',
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke',
        }
    ]

    res.send(jokes)
})

app.get("/prabesh", (req, res) => {
    res.send('prabeshdahalcom')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listing on port ${port}`);
})
