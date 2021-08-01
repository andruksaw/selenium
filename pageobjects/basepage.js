const webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
//const geckodriver = require('geckodriver');
//const driver = new webdriver.Builder().forBrowser('firefox').build();
//const operadriver = require('operadriver');
//const driver = new webdriver.Builder().forBrowser('opera').build();
//const iedriver = require('ie64driver');
//const driver = new webdriver.Builder().forBrowser('internet explorer').build();
//const edgedriver = require('edgedriver');
//const driver = new webdriver.Builder().forBrowser('edge').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage {
    constructor(){
        global.driver = driver;
    }

    go_to_url(){
        var baseURL = 'http://localhost/mantis';
        driver.get(baseURL);
        driver.manage().window().maximize();
    }
}

module.exports =  BasePage;