import { checkExistingRepos } from '../../helpers/getRepos';
import { createNewRepos } from '../../helpers/createRepos';
import { updateRepos } from '../../helpers/upgateRepos';
import { deleteRepos } from '../../helpers/deleteRepos';
import { verifyRepoName } from '../../helpers/checkRepoName';
const data = require('../../data/testingData.json');
let readResponse;
let createResponse;
let updateResponse;
let deleteResponse;
let repoExist;

describe('7. E2E testing scenario', () => {

    it('7.1. Get a list of the repositories and verified that the repository with the name - Second-Test-Repo - does not exist ', async () => {
        readResponse = await checkExistingRepos(data.token);
        repoExist = await verifyRepoName('Second-Test-Repo', readResponse);
        expect(repoExist).toEqual(false);
    })

    it('7.2. Create new repository with the name - Second-Test-Repo ', async () => {
        createResponse = await createNewRepos(data.token, 'Second-Test-Repo');
        expect(createResponse.status).toEqual(201);
        expect(createResponse.statusText).toEqual('Created');
    })

    it('7.3. Verified that the repository with the name - Second-Test-Repo - exist ', async () => {
        readResponse = await checkExistingRepos(data.token);
        repoExist = await verifyRepoName('Second-Test-Repo', readResponse);
        expect(repoExist).toEqual(true);
    })
 
    it('7.4. Update the repository with the name - Second-Test-Repo - to the name - New-Name ', async () => {
        updateResponse = await updateRepos(data.username, 'Second-Test-Repo', data.token, 'New-Name');
        expect(updateResponse.status).toEqual(200);
        expect(updateResponse.statusText).toEqual('OK');
    })
 

    it('7.5. Verified that the repository name was updated, repository with the name - New-Name - exist and with name - Second-Test-Repo - does not exist ', async () => {
        readResponse = await checkExistingRepos(data.token);
        repoExist = await verifyRepoName('New-Name', readResponse);
        const repoExistSecondTestRepo = await verifyRepoName('Second-Test-Repo', readResponse);
        expect(repoExistSecondTestRepo).toEqual(false);
        expect(repoExist).toEqual(true);
    })
 
    it('7.6. Delete the repository with the name - New-Name ', async () => {
        deleteResponse = await deleteRepos(data.username, 'New-Name', data.token);
        expect(deleteResponse.status).toEqual(204);
        expect(deleteResponse.statusText).toEqual('No Content');
    })

    it('7.7. Verified that the repository with the name - New-Name - does not exist ', async () => {
        readResponse = await checkExistingRepos(data.token);
        repoExist = await verifyRepoName('New-Name', readResponse);
        expect(repoExist).toEqual(false);
    })

})