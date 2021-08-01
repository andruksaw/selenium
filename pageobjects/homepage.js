const { Builder, By, Key, until } = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
//const { Driver } = require('selenium-webdriver/firefox');
//const { Driver } = require('selenium-webdriver/opera');
//const { Driver } = require('selenium-webdriver/ie');
//const { Driver } = require('selenium-webdriver/edge');
//const { Driver } = require('selenium-webdriver/safari');

class HomePage extends BasePage {
    enter_login() {
        var username = 'Andrey';
        var password = 'andruksoff';
        //This will enter into the username field
        driver.findElement(By.id('username')).sendKeys(username);
        //This will send the click to the element 'ENTER'
        driver.findElement(By.xpath('//*[@id="login-form"]/fieldset/input[2]')).click().then(() => {
            //This will enter into the password field
            driver.findElement(By.id('password')).sendKeys(password);
            //This will send the click to the element 'ENTER'
            driver.findElement(By.xpath('//*[@id="login-form"]/fieldset/input[3]')).click();
        });

    }
}

module.exports = new HomePage;