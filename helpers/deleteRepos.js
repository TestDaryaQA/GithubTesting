import axios from "axios";

async function deleteRepos(username, repo, token){

const toDeleteRepos = await axios({

    method: 'DELETE',
    url: 'https://api.github.com/repos/' + `${username}`+ '/' + `${repo}`,
    headers: {
        'Authorization': 'Bearer ' + `${token}`,
        'Content-Type': 'text/plain'
    },

})
    .then(res => res)
    .catch(err => err.response)
    return toDeleteRepos;
}

async function deleteReposInvalidEndPoint(username, repo, token){

    const toDeleteRepos = await axios({

        method: 'DELETE',
        url: 'https://api.github.com/repo/' + `${username}`+ '/' + `${repo}`,
        headers: {
            'Authorization': 'Bearer ' + `${token}`,
            'Content-Type': 'text/plain'
        },

    })
    .then(res => res)
    .catch(err => err.response)
    return toDeleteRepos;
}


module.exports = { deleteRepos, deleteReposInvalidEndPoint };