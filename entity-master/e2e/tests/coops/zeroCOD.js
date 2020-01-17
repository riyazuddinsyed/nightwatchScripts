module.exports = {
    '@tags': ['zeroCOD'],
  
    'Signin': function (browser) {
      browser
        .url(browser.globals.launch_dev_url)
        .waitForElementVisible('#input-17')
        .setValue('#input-17', browser.globals.CP0001523.identifier)
        .waitForElementVisible('#input-20')
        .setValue('#input-20', browser.globals.CP0001523.passcode)
        .waitForElementVisible('button.sign-in-btn')
        .click('button.sign-in-btn')
       //.assert.urlEquals(browser.globals.launch_dev_url + '/auth/businessprofile');
    },

  /*  'Enter Business Contact Info': function (browser) {
      browser
      .waitForElementVisible('#input-42')
      .setValue('#input-42', 'test.outputs@gov.bc.ca')
      .setValue('#input-45', 'test.outputs@gov.bc.ca')
      .setValue('#input-48', '2505555555')
      .setValue('#input-51', '234');

  browser
  .useXpath()
  .assert.cssClassNotPresent('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span', 'v-btn--disabled')
  .click('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span')
  },*/

  'Verify initial state of dashboard, then start COD filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP0001523);
    dashboard.verifyAddresses(browser.globals.CP0001523);
    dashboard.verifyDirectorCount(browser.globals.CP0001523.director_count)
    dashboard.startCodFiling()
},

'Confirm initial state of COD filing': function (browser) {
   zeroCodPage = browser.page.zeroCodPage();
    zeroCodPage.verfifyInitialCodState(browser.globals.CP0001523);
    zeroCodPage.checkTotalFees('$0.00');
  },


}