module.exports = {
    "Get URL and title" : function(browser) {
     browser
     .url("http://localhost:3000/")
     .assert.title("HRnet")
     .waitForElementVisible('.log')
     .assert.visible('input[type=text]')
     .assert.visible('input[type=submit]')
     .click('input[type=submit');
    
     
       },

     "Get URL and title2" : function(browser) {
        browser
        .url("http://localhost:3000/employee-list")
        .assert.title("HRnet")
        .waitForElementVisible('.log')
        .assert.visible('input[type=text]')
        .waitForElementVisible('#employee-div');
       
        
          }
}