const homepage = require('../pageobjects/homepage');

describe('This is the describe block', function () {
    this.timeout(50000);
    beforeEach(function () {
        //Enter actions performed before test
    });

    afterEach(function () {
        //Enter actions to be performed after tests
    });

    it('POM Test', function () {
        //Enter test steps
        var baseURL = 'http://localhost/mantis';
        var username = 'Andrey';
        //var outURL = 'http://192.168.1.3/mantis';
        homepage.go_to_url(baseURL);
        homepage.enter_login(username);
    })
})