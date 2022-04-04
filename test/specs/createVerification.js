import { createOrgNewRepos } from '../../helpers/createOrgRepos';
import { createNewRepos, createNewReposWrongJSON, createNewReposInvalidEndPoint } from '../../helpers/createRepos';
const data = require('../../data/testingData.json');
let response;
let responseExisting;

describe('3. Create a new organization repository:', () => {

    it('3.1. With response Status equal 401 for non-authorized users ', async () => {
        //Negative response, because to create a new repository in an organization the authenticated user must be a member of the organization.
        response = await createOrgNewRepos(data.organizationOcto, data.token);
        expect(response.status).toEqual(401);
    })

})

describe('4. Create a repository:', () => {

    it('4.1. New with response Status equal 401 with invalid token ', async () => {
        response = await createNewRepos(data.invalidToken, data.name);
        expect(response.status).toEqual(401);
    })

    it('4.2. New with response Status equal 401 with empty token ', async () => {
        response = await createNewRepos('', data.name);
        expect(response.status).toEqual(401);
    })

    it('4.3. New with response Status equal 401 with null as token ', async () => {
        response = await createNewRepos(null, data.name);
        expect(response.status).toEqual(401);
    })

    it('4.4. New with response Status equal 400 with wrong type of JSON ', async () => {
        response = await createNewReposWrongJSON(data.token, data.name);
        expect(response.status).toEqual(400);
    })

    it('4.5. New with response message - Body should be a JSON object - with wrong type of JSON ', async () => {
        expect(response.data.message).toEqual('Body should be a JSON object');
    })

    it('4.6. New with response Status equal 201 for authorized users ', async () => {
        response = await createNewRepos(data.token, data.name);
        expect(response.status).toEqual(201);
    })

    it('4.7. New with Created as Status Text for authorized users ', async () => {
        expect(response.statusText).toEqual('Created');
    })

    //With correct name check from UI the name.

    it('4.8. With the existing name, response Status equal 422 ', async () => {
        responseExisting = await createNewRepos(data.token, data.name);
        expect(responseExisting.status).toEqual(422);
    })

    it('4.9. With the existing name, Status Text not Equal Created ', async () => {
        expect(responseExisting.statusText).not.toEqual('Created');
    })

    it('4.10. With invalid End-point response Status equal 404', async () => {
        response = await createNewReposInvalidEndPoint(data.token);
        expect(response.status).toEqual(404);
    })

})