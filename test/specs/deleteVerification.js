import { deleteRepos, deleteReposInvalidEndPoint } from '../../helpers/deleteRepos';
const data = require('../../data/testingData.json');
let deleteResponse;

describe('6. Delete a repository:', () => {

    it('6.1. Status equal 401 with invalid token ', async () => {
        deleteResponse = await deleteRepos(data.username, data.newName, data.invalidToken);
        expect(deleteResponse.status).toEqual(401);
    })

    it('6.2. Status equal 401 with empty token ', async () => {
        deleteResponse = await deleteRepos(data.username, data.newName, '');
        expect(deleteResponse.status).toEqual(401);
    })

    it('6.3. Status equal 401 with null as token ', async () => {
        deleteResponse = await deleteRepos(data.username, data.newName, null);;
        expect(deleteResponse.status).toEqual(401);
    })

    it('6.4. With response Status equal 204 for authorized users ', async () => {
        deleteResponse = await deleteRepos(data.username, data.newName, data.token);
        expect(deleteResponse.status).toEqual(204);
    })

    it('6.5. With No Content as Status Text for authorized users ', async () => {
        expect(deleteResponse.statusText).toEqual('No Content');
    })

    it('6.6. With response Status equal 404 when delete not existing repository (already deleted) ', async () => {
        deleteResponse = await deleteRepos(data.username, data.newName, data.token);
        expect(deleteResponse.status).toEqual(404);
    })

    it('6.7. With invalid End-point response Status equal 404', async () => {
        deleteResponse = await deleteReposInvalidEndPoint(data.username, data.newName, data.token);
        expect(deleteResponse.status).toEqual(404);
    })


})