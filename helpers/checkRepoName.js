async function verifyRepoName(name, response) {

    let count = 0;

    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].name === `${name}`) {
            count++;
        } 
    }
    
    return count > 0 ? true : false;

} 

module.exports = { verifyRepoName };