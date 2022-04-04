import { updateRepos, updateReposInvalidJSON, updateReposInvalidEndPoint } from '../../helpers/upgateRepos';
const data = require('../../data/testingData.json');
let updateResponse;

describe('5. Update a repository:', () => {

    it('5.1. Status equal 401 with invalid token ', async () => {
        updateResponse = await updateRepos(data.username, data.name, data.invalidToken, data.newName);
        expect(updateResponse.status).toEqual(401);
    })

    it('5.2. Status equal 401 with empty token ', async () => {
        updateResponse = await updateRepos(data.username, data.name, '', data.newName);
        expect(updateResponse.status).toEqual(401);
    })

    it('5.3. Status equal 401 with null as token ', async () => {
        updateResponse = await updateRepos(data.username, data.name, null, data.newName);;
        expect(updateResponse.status).toEqual(401);
    })

    it('5.4. Status equal 400 with wrong type of JSON ', async () => {
        updateResponse = await updateReposInvalidJSON(data.username, data.name, data.token, data.newName);
        expect(updateResponse.status).toEqual(400);
    })

    it('5.5. With response message - Body should be a JSON object - with wrong type of JSON ', async () => {
        expect(updateResponse.data.message).toEqual('Body should be a JSON object');
    })

    it('5.6. With response Status equal 200 for authorized users ', async () => {
        updateResponse = await updateRepos(data.username, data.name, data.token, data.newName);
        expect(updateResponse.status).toEqual(200);
    })

    it('5.7. With OK as Status Text for authorized users ', async () => {
        expect(updateResponse.statusText).toEqual('OK');
    })

    it('5.8. With response Status equal 404 when updates provided for repository with not existing repository name ', async () => {
        updateResponse = await updateRepos(data.username, 'Test Name', data.token, data.newName);
        expect(updateResponse.status).toEqual(404);
    })

    it('5.9. With response Status equal 404 when updates provided for not existing repository ', async () => {
        updateResponse = await updateRepos('Test Data', data.name, data.token, data.newName);
        expect(updateResponse.status).toEqual(404);
    })

    it('5.10. With invalid End-point response Status equal 404', async () => {
        updateResponse = await updateReposInvalidEndPoint(data.username, data.name, data.token, data.newName);
        expect(updateResponse.status).toEqual(404);
    })


})