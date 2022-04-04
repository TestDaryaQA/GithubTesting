Automation tests were created for the next Repos API End-points:
- List organization repositories;
- List repositories for the authenticated user;
- Create an organization repository;
- Create a repository for the authenticated user;
- Update a repository;
- Delete a repository.

Also in addition was created a file for one of the E2E scenarios.

Total 45 API test cases.

Testing results:
» \test\specs\getVerification.js
1. Get List organization repositories:

✓ 1.1. With response Status equal 200 for Happy Path

✓ 1.2. With content-type as application/json for Happy Path

✓ 1.3. With checking organization name

✓ 1.4. With verification repositiries name - hello-world-javascript-action

[chrome 100.0.4896.60 windows #0-0]
[chrome 100.0.4896.60 windows #0-0] 2. Get List repositories for the authenticated user:
[chrome 100.0.4896.60 windows #0-0]    ✓ 2.1. With response Status equal 200 for Happy Path
[chrome 100.0.4896.60 windows #0-0]    ✓ 2.2. With content-type as application/json for Happy Path
[chrome 100.0.4896.60 windows #0-0]    ✓ 2.3. With invalid token, response Status equal 401
[chrome 100.0.4896.60 windows #0-0]    ✓ 2.4. With empty token, response Status equal 401
[chrome 100.0.4896.60 windows #0-0]    ✓ 2.5. With null as a token, response Status equal 401
[chrome 100.0.4896.60 windows #0-0]    ✓ 2.6. With invalid End-point response Status equal 404
[chrome 100.0.4896.60 windows #0-0]
[chrome 100.0.4896.60 windows #0-0] 10 passing (1.2s)
------------------------------------------------------------------

» \test\specs\createVerification.js
[chrome 100.0.4896.60 windows #0-1] 3. Create a new organization repository:
[chrome 100.0.4896.60 windows #0-1]    ✓ 3.1. With response Status equal 401 for non-authorized users
[chrome 100.0.4896.60 windows #0-1]
[chrome 100.0.4896.60 windows #0-1] 4. Create a repository:
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.1. New with response Status equal 401 with invalid token
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.2. New with response Status equal 401 with empty token
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.3. New with response Status equal 401 with null as token
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.4. New with response Status equal 400 with wrong type of JSON
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.5. New with response message - Body should be a JSON object - with wrong type of JSON
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.6. New with response Status equal 201 for authorized users
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.7. New with Created as Status Text for authorized users
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.8. With the existing name, response Status equal 422
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.9. With the existing name, Status Text not Equal Created
[chrome 100.0.4896.60 windows #0-1]    ✓ 4.10. With invalid End-point response Status equal 404
[chrome 100.0.4896.60 windows #0-1]
[chrome 100.0.4896.60 windows #0-1] 11 passing (2.4s)
------------------------------------------------------------------
» \test\specs\updateVerification.js
[chrome 100.0.4896.60 windows #0-2] 5. Update a repository:
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.1. Status equal 401 with invalid token
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.2. Status equal 401 with empty token
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.3. Status equal 401 with null as token
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.4. Status equal 400 with wrong type of JSON
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.5. With response message - Body should be a JSON object - with wrong type of JSON
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.6. With response Status equal 200 for authorized users
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.7. With OK as Status Text for authorized users
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.8. With response Status equal 404 when updates provided for repository with not existing repository name
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.9. With response Status equal 404 when updates provided for not existing repository
[chrome 100.0.4896.60 windows #0-2]    ✓ 5.10. With invalid End-point response Status equal 404
[chrome 100.0.4896.60 windows #0-2]
[chrome 100.0.4896.60 windows #0-2] 10 passing (2s)
------------------------------------------------------------------
» \test\specs\deleteVerification.js
[chrome 100.0.4896.60 windows #0-3] 6. Delete a repository:
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.1. Status equal 401 with invalid token
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.2. Status equal 401 with empty token
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.3. Status equal 401 with null as token
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.4. With response Status equal 204 for authorized users
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.5. With No Content as Status Text for authorized users
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.6. With response Status equal 404 when delete not existing repository (already deleted)
[chrome 100.0.4896.60 windows #0-3]    ✓ 6.7. With invalid End-point response Status equal 404
[chrome 100.0.4896.60 windows #0-3]
[chrome 100.0.4896.60 windows #0-3] 7 passing (1.3s)
------------------------------------------------------------------
» \test\specs\E2E.js
[chrome 100.0.4896.60 windows #0-4] 7. E2E testing scenario
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.1. Get a list of the repositories and verified that the repository with the name - Second-Test-Repo - does not exist
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.2. Create new repository with the name - Second-Test-Repo
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.3. Verified that the repository with the name - Second-Test-Repo - exist
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.4. Update the repository with the name - Second-Test-Repo - to the name - New-Name
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.5. Verified that the repository name was updated, repository with the name - New-Name - exist and with name - Second-Test-Repo - does not exist
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.6. Delete the repository with the name - New-Name
[chrome 100.0.4896.60 windows #0-4]    ✓ 7.7. Verified that the repository with the name - New-Name - does not exist
[chrome 100.0.4896.60 windows #0-4]
[chrome 100.0.4896.60 windows #0-4] 7 passing (3.1s)


Spec Files:      5 passed, 5 total (100% completed) in 00:00:25
