module.exports = {
    '@tags': ['bcsc'], 
    'Verify initial login with bcsc': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url)
        bcsc.verifyCoperativesPage()
        bcsc.verifyBcscLogin()
    },

    'Enter contact information': function (browser) {
        relationship = browser.page.relationshipPage();
        //relationship.enterContactInformation()
        //relationship.createTeam()
        //relationship.manageTeamPage()
        //relationship.AddBusinesses()
        relationship.checkForAffliatedBusinesses()
    }

}