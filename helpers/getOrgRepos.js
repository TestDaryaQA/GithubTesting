import axios from 'axios';

async function checkExistingOrgRepos(org){

    const arrRepos = await axios({

        method: 'GET',
        url: 'https://api.github.com/orgs/' + `${org}`+ '/repos'
        
    })
    .then(res => res)
    .catch(err => err.response.data)
    return arrRepos;
}


module.exports = { checkExistingOrgRepos };