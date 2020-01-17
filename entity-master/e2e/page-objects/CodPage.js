var util = require('util');


var CodFilingsCommands = {
    verfifyInitialCodState: function (coopObject) {
      return this
        .assert.containsText('#filing-header', 'Director Change')
        .assert.containsText('#AR-step-4-header', 'Certify Correct')
        .assert.containsText('#entity-incorporation-number', coopObject.identifier)
        .assert.containsText('#entity-legal-name', coopObject.legal_name)
        .assert.visible('@saveDraftButton')
        .assert.visible('@saveAndResumeLaterButton')
        .assert.visible('@cancelFilingButton')
    },
    checkFeeByIndex: function (feeName, feeValue, desiredIndex) {
        return this
            .assert.containsText({selector: '@feeName', index: desiredIndex}, feeName)
            .assert.containsText({selector: '@feeValue', index: desiredIndex}, feeValue)
    },
    checkFeeCount: function (expectedCount) {
        return this.expect.elements('@feeListItem').count.to.equal(expectedCount);
    },
    checkTotalFees: function (expectedTotalString) {
        return this.assert.containsText('@feeTotal', expectedTotalString)
    },
    startAppointingNewDirector: function () {
        return this 
        .waitForElementVisible('@AppointNewDirectorButton')
        .click('@AppointNewDirectorButton')
    },
    AddNewDirector: function (directorObject7,number) {
        return this.waitForElementVisible('@firstname')
        .waitForElementNotVisible('button.new-director-btn')
        .setValue('@firstname',directorObject7.firstname)
        .waitForElementVisible('@lastname')
        .setValue('@lastname',directorObject7.lastname)
        .waitForElementVisible('@streetaddress')
        .setValue('@streetaddress',directorObject7.street)
        .waitForElementVisible('@City')
        .setValue('@City',directorObject7.city)
        .waitForElementVisible('@province')
        .click('@province')
        .waitForElementVisible('@BC')
        .click('@BC')
        .waitForElementVisible('@postalcode')
        .setValue('@postalcode',directorObject7.postalcode)
        .waitForElementVisible('@country')
        .setValue('@country',directorObject7.country)
        .waitForElementVisible('@completeAppointingDirector')
        .click('@completeAppointingDirector')
       // .assert.visible('@edit')
    },
    getDynamicElement: function (elementName, number) {
        var element = this.elements[elementName];
        return util.format(element.__selector, number);
       }, 

    validateDirectorByNumber: function (directorObject, number) {
           return this
                    .assert.containsText(this.getDynamicElement('dynamicFirstName', number), directorObject.firstName)
                    .assert.containsText(this.getDynamicElement('dynamicLastName', number), directorObject.lastName)
                    .assert.containsText(this.getDynamicElement('dynamicStreet', number), directorObject.street)
                    .assert.containsText(this.getDynamicElement('dynamicCity', number), directorObject.city)
                    .assert.containsText(this.getDynamicElement('dynamicProvince', number), directorObject.province)
                    .assert.containsText(this.getDynamicElement('dynamicPostalCode', number), directorObject.postalCode)
                    .assert.containsText(this.getDynamicElement('dynamicCountry', number), directorObject.country)
                    .assert.containsText(this.getDynamicElement('dynamicAppointedDate', number), directorObject.appointedDate);                
       },
    editChangeOfAddress: function(directorObject,number) {
        return this
                   .assert.containsText(this.getDynamicElement('dynamicFirstName',number),directorObject.firstName)
                   .assert.containsText(this.getDynamicElement('dynamicLastName',number),directorObject.lastName)
                   .assert.containsText(this.getDynamicElement('dynamicStreet',number),directorObject.street)
                   .assert.containsText(this.getDynamicElement('dynamicPostalCode', number), directorObject.postalCode)
                   .assert.containsText(this.getDynamicElement('dynamicCountry', number), directorObject.country)
                   .waitForElementVisible('@chevron')
                   .click('@chevron')
                   .waitForElementVisible('@changeofaddress')
                   .click('@changeofaddress')




    }
};
module.exports={
    commands:[CodFilingsCommands],
    elements:{
        feeName: "div.fee-list__item-name",
        feeValue: "div.fee-list__item-value",
        feeListItem: "li.fee-list__item",
        feeTotal: "div.fee-total__value",
        AppointNewDirectorButton: "#directors > div:nth-child(2) > button",
        firstname: "#new-director__first-name",
        initial: 
        {
           selector: "/html/body/div/div/div[4]/main/div[2]/div[5]/div[2]/article/section[1]/div/div[3]/ul[1]/li/div/div/form/div[1]/div[2]/div/div[1]/div/input",
           locateStatergy: "xpath",
        },
        lastname: {
            selector:"/html/body/div/div/div[4]/main/div[2]/div[5]/div[2]/article/section[1]/div/div[3]/ul[1]/li/div/div/form/div[1]/div[3]/div/div[1]/div/input",
            locateStrategy: "xpath",
        },
        streetaddress: {
            selector:"/html/body/div/div/div[4]/main/div[2]/div[5]/div[2]/article/section[1]/div/div[3]/ul[1]/li/div/div/form/div[2]/div/form/div[1]/div/div/div[1]/div/input",
            locateStrategy: "xpath"
        },
        postalcode: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div>input[type=text]",
        deliveryinstructions: {
        selector:"/html/body/div/div/div[4]/main/div[2]/div[5]/div[2]/article/section[1]/div/div[3]/ul[1]/li/div/div/form/div[2]/div/form/div[5]/div/div/div[1]/div",
          locateStratergy:"xpath",
        },
        City: {
            selector: '/html/body/div/div/div[4]/main/div[2]/div[5]/div[2]/article/section[1]/div/div[3]/ul[1]/li/div/div/form/div[2]/div/form/div[3]/div[1]/div/div[1]/div/input',
            locateStrategy: "xpath"
        },
        province: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div.form__row.three-column > div.v-input.item.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.v-select > div > div.v-input__slot > div.v-select__slot > div.v-select__selections",

        BC: 'div:nth-of-type(1) > .v-list-item__content > .v-list-item__title',
        country:
           "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div:nth-child(4) > div > div > div.v-input__slot > div>input[type=text]",
        chevron: "#director-%s > div > div > div > div.actions > span:nth-child(2) > span > button > span > i",
        changeofaddress: "#app > div.v-menu__content.theme--light.menuable__content__active > div > div:nth-child(1) > div",
        
        certifyLegalName: "#certified-by-textfield",
        certifyCheckBox: "#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div",
        saveAndResumeLaterButton: "#cod-save-resume-btn",
        saveDraftButton: "#cod-save-btn",
        fileAndPayButton: "#cod-file-pay-btn",
        cancelFilingButton: "#cod-cancel-btn",
        edit:"#director-%s-change-btn > div > span",
        completeAppointingDirector: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.v-btn--contained.theme--light.v-size--default.primary > span",
        dynamicFirstName: "#director-%s> div > label > span:nth-child(1)",
        dynamicLastName: "#director-%s > div > label > span:nth-child(3)",
        dynamicStreet: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(1)",
        dynamicCity: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(1)",
        dynamicProvince: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(2)",
        dynamicPostalCode:"#director-%s > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(3)",
        dynamicCountry: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(4)",
        dynamicAppointedDate: "#director-%s > div > div > div > div.director_dates > div:nth-child(1)",
        dynamicCessationDate: "#director-%s > div > div > div > div > div.director_dates > div:nth-child(4)",
        dynamicEditButton: "#director-%s-change-btn"
    },
}
