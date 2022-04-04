import axios from 'axios';

async function createOrgNewRepos(org, token){

    const newRepos = await axios({

        method: 'POST',
        url: 'https://api.github.com/orgs/' + `${org}`+ '/repos',
        headers: {
            "Authorization": `${token}`
        },
        body: {
            "org": `${org}`,
            "name": "New-Test-Repo",
            "description": "It is a New-Test-Repo",
            "private": "false"
        }
    })
    .then(res => res)
    .catch(err => err.response)
    return newRepos;
}

module.exports = { createOrgNewRepos };