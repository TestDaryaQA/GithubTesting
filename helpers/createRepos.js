import axios from 'axios';

async function createNewRepos(token, dataName){

    const newRepos = await axios({

        method: 'POST',
        url: 'https://api.github.com/user/repos',
        headers: {
            'Authorization': 'Bearer ' + `${token}`,
            'Content-Type': 'text/plain'
        },
        data: {
            "name": `${dataName}`,
            "description": "It is a Second Test Repo",
            "private": false
    }
    })
    .then(res => res)
    .catch(err => err.response)
    return newRepos;
}

async function createNewReposWrongJSON(token, dataName){

    const newRepos = await axios({

        method: 'POST',
        url: 'https://api.github.com/user/repos',
        headers: {
            'Authorization': 'Bearer ' + `${token}`,
            'Content-Type': 'text/plain'
        },
        body: {
            "name": `${dataName}`,
            "description": "It is a Second Test Repo",
            "private": false
    }
    })
    .then(res => res)
    .catch(err => err.response)
    return newRepos;
}

async function createNewReposInvalidEndPoint(token){

    const newRepos = await axios({

        method: 'POST',
        url: 'https://api.github.com/user/repo',
        headers: {
            'Authorization': 'Bearer ' + `${token}`,
            'Content-Type': 'text/plain'
        },
        data: {
            'name': 'Test-Repo',
            'description': 'It is a Second-Test-Repo',
            'private': false
        }
    })
    .then(res => res)
    .catch(err => err.response)
    return newRepos;
}

module.exports = { createNewRepos, createNewReposWrongJSON, createNewReposInvalidEndPoint };