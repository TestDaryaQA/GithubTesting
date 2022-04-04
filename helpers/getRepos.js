import axios from 'axios';

async function checkExistingRepos(token){

    const arrRepos = await axios({

        method: 'GET',
        url: 'https://api.github.com/user/repos',
        headers: {
            'Authorization': 'Bearer ' + `${token}`
        }
        
    })
    .then(res => res)
    .catch(err => err.response)
    return arrRepos;
}

async function checkExistingReposInvalidEndPoint(token){

    const arrReposInvalidEndPoint = await axios({

        method: 'GET',
        url: 'https://api.github.com/user/repo',
        headers: {
            'Authorization': 'Bearer ' + `${token}`
        }
        
    })
    .then(res => res)
    .catch(err => err.response)
    return arrReposInvalidEndPoint;
}

module.exports = { checkExistingRepos, checkExistingReposInvalidEndPoint };