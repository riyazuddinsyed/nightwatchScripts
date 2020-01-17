module.exports={
    '@tags': ['coops'],
    'Signin': function (browser) {
        browser
          .url('')
          .waitForElementVisible('body',10000)
          .waitForElementVisible('[data-test-id=dashboard-header]',10000)
          .waitForElementVisible('[data-test-id=todo-filing-name-0]',10000)
          .waitForElementVisible('[data-test-id=filing-history-header]',10000)
          .waitForElementVisible('[data-test-id=launch-COA-button]',10000)
          .waitForElementVisible('[data-test-id=launch-COD-button]',10000)
          .click('[data-test-id=launch-COD-button]')
          .waitForElementVisible('[data-test-id=launch-COD-header]',10000)
          .waitForElementVisible('[data-test-id=Appoint-Directors-Button]',10000)
          
          .click('[data-test-id=Appoint-Directors-Button]')
          .waitForElementVisible('body',10000)
          .setValue('[data-test-id="NewDirector-firstname"]','test')
          .setValue('[data-test-id="NewDirector-initial"]','test')
          .setValue('[data-test-id="NewDirector-lastname"]','test')
},
}