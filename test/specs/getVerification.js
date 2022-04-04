import { checkExistingOrgRepos } from '../../helpers/getOrgRepos';
import { checkExistingRepos, checkExistingReposInvalidEndPoint } from '../../helpers/getRepos';
const data = require('../../data/testingData.json');
let responseForOrg;
let responseForUser;

describe('1. Get List organization repositories:', () => {

    it('1.1. With response Status equal 200 for Happy Path', async () => {
        responseForOrg = await checkExistingOrgRepos(data.organizationOcto);
        expect(responseForOrg.status).toEqual(200);
    })

    it('1.2. With content-type as application/json for Happy Path', async () => {
        expect(responseForOrg.headers['content-type']).toContain('application/json');
    })

    it('1.3. With checking organization name', async () => {
        expect(responseForOrg.data[0].full_name).toContain(data.organizationOcto);
    })

    it('1.4. With verification repositiries name - hello-world-javascript-action', async () => {
        expect(responseForOrg.data[0].name).toEqual('hello-world-javascript-action');
    })

})

describe('2. Get List repositories for the authenticated user:', () => {

    it('2.1. With response Status equal 200 for Happy Path', async () => {
        responseForUser = await checkExistingRepos(data.token);
        expect(responseForUser.status).toEqual(200);
    })

    it('2.2. With content-type as application/json for Happy Path', async () => {
        expect(responseForUser.headers['content-type']).toContain('application/json');
    })

    it('2.3. With invalid token, response Status equal 401', async () => {
        responseForUser = await checkExistingRepos(data.invalidToken);
        expect(responseForUser.status).toEqual(401);
    })

    it('2.4. With empty token, response Status equal 401', async () => {
        responseForUser = await checkExistingRepos();
        expect(responseForUser.status).toEqual(401);
    })

    it('2.5. With null as a token, response Status equal 401', async () => {
        responseForUser = await checkExistingRepos(null);
        expect(responseForUser.status).toEqual(401);
    })

    it('2.6. With invalid End-point response Status equal 404', async () => {
        responseForUser = await checkExistingReposInvalidEndPoint(data.token);
        expect(responseForUser.status).toEqual(404);
    })

})




