import axios from "axios";

async function updateRepos(username, repo, token, dataNewName){

const updatedRepos = await axios({

    method: 'PATCH',
    url: 'https://api.github.com/repos/' + `${username}`+ '/' + `${repo}`,
    headers: {
        'Authorization': 'Bearer ' + `${token}`,
        'Content-Type': 'text/plain'
    },
    data: {
        "name": `${dataNewName}`,
        "private": true
    }
})
    .then(res => res)
    .catch(err => err.response)
    return updatedRepos;
}

async function updateReposInvalidJSON(username, repo, token, dataNewName){

    const updatedRepos = await axios({

        method: 'PATCH',
        url: 'https://api.github.com/repos/' + `${username}`+ '/' + `${repo}`,
        headers: {
            'Authorization': 'Bearer ' + `${token}`,
            'Content-Type': 'text/plain'
        },
        body: {
            'name': `${dataNewName}`,
            "private": false
    }
    })
    .then(res => res)
    .catch(err => err.response)
    return updatedRepos;
}

async function updateReposInvalidEndPoint(username, repo, token, dataNewName){

    const updatedRepos = await axios({

        method: 'PATCH',
        url: 'https://api.github.com/repo/' + `${username}`+ '/' + `${repo}`,
        headers: {
            'Authorization': 'Bearer ' + `${token}`,
            'Content-Type': 'text/plain'
        },
        data: {
            "name": `${dataNewName}`,
            "private": true
        }
    })
    .then(res => res)
    .catch(err => err.response)
    return updatedRepos;
}


module.exports = { updateRepos, updateReposInvalidJSON, updateReposInvalidEndPoint };