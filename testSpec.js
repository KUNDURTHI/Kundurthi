'use strict';

const chai   = require('chai');
chai.use(require('chai-as-promised'));
chai.should();
const expect = chai.expect;

require('./lib/test-helper');

const until = protractor.ExpectedConditions;

describe('App', function() {

  it('satya is working', function() {
    browser.get(`http://localhost:${process.env.PORT}`);
    browser.wait(until.titleContains('JS Complexity'));
    browser.wait(until.presenceOf(browser.element(by.id('js-complexity-app'))));
  });

});

describe('App', function() {

  it('Must watch Cyclomatic Complexity', function() {
    browser.get(`http://localhost:${process.env.PORT}`);
    browser.wait(until.titleContains('JS Complexity'));
   var txt = element(by.xpath('//div/div[1]/div/h1'));
    
expect(txt.getText()).to.eventually.equal('Cyclomatic Complexity');
  
    
  });

});

// As the browse can not wait after 2000ms i am writing all the tests in this test cases:
/*

In this test case i am checking evaluate button and clicking it:

After clicking evaluate button i am checking history:

After checking History clicking clear history and verifying Result text:

Hear we can also verify the result before clearing the history, i checked and it passed, so i am moving forward to clear history button as verifying this
after and before equal result no change in expect condition.


*/
describe('App', function() {

  it('Must watch about evaluate button', function() {
    browser.get(`http://localhost:${process.env.PORT}`);
    browser.wait(until.titleContains('JS Complexity'));
    browser.wait(until.presenceOf(browser.element(by.id('evaluate')).click()));

var re = element(by.id('history-title'));
    
expect(re.getText()).to.eventually.equal('History');

element(by.id('clear-history')).click();

 var res = element(by.xpath('//div/div/div/h3'));
    
expect(res.getText()).to.eventually.equal('Result: 3');
  });

});

