module.exports = {
    '@tags': ['COD','single'],
    'Verify initial login with bcsc': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url)
        bcsc.verifyCoperativesPage()
        bcsc.verifyBcscLogin()
    },
    'Enter contact information': function (browser) {
        relationship = browser.page.relationshipPage();
        //relationship.enterContactInformation()
       // relationship.createTeam()
       // relationship.manageTeamPage()
       // relationship.AddBusinesses()
       // relationship.checkAddBusinessesSuccess()
        relationship.checkForAffliatedBusinesses()
    },
    '1.Verify initial state of dashboard, then start COD filing': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.verifyTombstone(browser.globals.CP0000019);
        dashboard.verifyAddresses(browser.globals.CP0000019);
       // dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count)
        dashboard.startCodFiling()
    },

    '2.Confirm initial state of COD filing': function (browser) {
        CodPage = browser.page.CodPage();
        CodPage.verfifyInitialCodState(browser.globals.CP0000019);
        CodPage.checkTotalFees('$0.00');
      },
      
      '3.Appoint New Director': function (browser) {
        CodPage = browser.page.CodPage()
        CodPage.startAppointingNewDirector()
        CodPage.AddNewDirector(browser.globals.CP0000019.director6,6);
        CodPage.validateDirectorByNumber(browser.globals.CP0000019.director3,3)
      },

      '4.Certify who filed': function (browser) {
        CodPage = browser.page.CodPage();
        CodPage.setValue('@certifyLegalName', 'Tester');
        CodPage.click('@certifyCheckBox')
      },

      '5.Save draft and resume later': function (browser) {
        CodPage = browser.page.CodPage()
        CodPage.click('@saveAndResumeLaterButton')
      },

      '6.Resume draft from Dashboard': function (browser) {
        dashboard = browser.page.dashboardPage()
        dashboard.waitForElementVisible('@resumeDraftButton')
        dashboard.click('@resumeDraftButton')
      },

      '7.Verify draft resumed correctly then return to dashoard': function (browser) {
        CodPage = browser.page.CodPage()
        CodPage.checkFeeCount(1)
        CodPage.checkFeeByIndex('Change of Director', '$20.00', 0)
        CodPage.checkTotalFees('$20.00')
      },

     '8.Assert the directors are present': function (browser) {
        CodPage.assert.valueContains('@certifyLegalName', 'Tester');
        CodPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
        CodPage.click('@saveAndResumeLaterButton');
      },

      '9.Delete draft': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.waitForElementVisible('@resumeDraftButton');
        dashboard.click('@toDoButtonMoreActionsArrow');
        dashboard.click('@deleteDraftButton');
        dashboard.waitForElementVisible('@confirmDeleteDraftButton');
        dashboard.click('@confirmDeleteDraftButton');
        dashboard.waitForElementVisible('@fileNowButton');   
      },

      '10.Start COD filing after deleting draft': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.startCodFiling();
      },

      '11.Confirm initial state of COD filing - POST DRAFT': function (browser) {
        CodPage = browser.page.CodPage();
        CodPage.verfifyInitialCodState(browser.globals.CP0000019);
        CodPage.checkTotalFees('$0.00');
      },

      '12.Appoint New DIRECTOR - POST DRAFT': function (browser) {
        CodPage = browser.page.CodPage();
        CodPage.startAppointingNewDirector()
        CodPage.AddNewDirector(browser.globals.CP0000019.director6,6);
        CodPage.validateDirectorByNumber(browser.globals.CP0000019.director3,3)
      },

      '13.Certify who filed - POST DRAFT': function (browser) {
        CodPage = browser.page.CodPage();
        CodPage.setValue('@certifyLegalName', 'Tester');
        CodPage.click('@certifyCheckBox');
        CodPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
        CodPage.click('@fileAndPayButton');
      },

      '14.PayBC': function (browser) {
        browser
          .waitForElementVisible('#paylistbutton')
          .click('#paylistbutton')
          .waitForElementVisible('#credit_payBtn')
          .click('#credit_payBtn')
          .waitForElementVisible('input[name=trnCardNumber]')
          .setValue('input[name=trnCardNumber]', '4030000010001234')
          .setValue('input[name=trnCardCvd]', '123')
          .moveToElement('input[name=submitButton]', 10, 10)
          .click('input[name=submitButton]');
      },

      '15.Verify Dashboard after filing': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.assert.containsText('@toDoListHeader', 'To Do (1)');
        dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (1)');
        dashboard.assert.containsText('@topFilingInHistoryName', 'Director Change');
        dashboard.assert.containsText('@topFilingInHistoryStatus', 'FILED AND PAID');
        dashboard.verifyDirectorCount(browser.globals.CP0000019.new_director_count);
        dashboard.assert.containsText('@mailingAddressLabel', 'Mailing Address');
        dashboard.assert.containsText('@mailingLine1', '220 - 1333 COMMERCIAL DR');
        dashboard.assert.containsText('@mailingLine2', 'VANCOUVER BC V5L 3Y3');
        dashboard.assert.containsText('@mailingLine3', 'CA');
        dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
        dashboard.assert.containsText('@deliveryLine1', '220 - 1333 COMMERCIAL DR');
        dashboard.assert.containsText('@deliveryLine2', 'VANCOUVER BC V5L 3Y3');
        dashboard.assert.containsText('@deliveryLine3', 'CA');
      }
    
    
    }

