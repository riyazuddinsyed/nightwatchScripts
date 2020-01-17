module.exports = {

	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,	
	throwOnMultipleElementsReturned : false,

	launch_url: "https://test.bcregistry.ca/cooperatives/",
    idtest_url: "https://idtest.gov.bc.ca/login",

	CP0000019: {
		identifier: "CP0000019",
		passcode:  "111111111",
		director_count: 6,
		legal_name: "THE SOINTULA CO-OPERATIVE STORE ASSOCIATION",
		mailing: {
			line1: "BOX 108",
			line2: "SOINTULA BC V0N 3E0",
			line3: "Canada"
		},
		delivery: {
			line1: "175 1ST STREET",
			line2: "SOINTULA BC V0N 3E0",
			line3: "Canada"
		},

		director7:{
			firstname:"test",
			lastname:"test2",
			street: "123 test st",
			optionalfield: "I am an optional field",
			city:"victoria",
			province:"BC",
			postalcode: "V1V1V1",
			country: "CA"
		},
		
	},

	CP0001024: {
		identifier: "CP0001024",
		passcode: "115692683",  
		director_count: 9,
		legal_name: "MISSION COOPERATIVE HOUSING ASSOCIATION",
		mailing: {
			line1: "25 - 7365 CEDAR ST.",
			line2: "MISSION BC V2V 5S7",
			line3: "CA"
		},
		delivery: {
			line1: "25 - 7365 CEDAR ST.",
			line2: "MISSION BC V2V 5S7",
			line3: "CA"
		}
		
	},

	CP0001252:{
		identifier: "CP0001252",
		passcode: "157320888",
		director_count: 5,
		new_director_count: 6,
		legal_name: "VIEW COURT HOUSING CO-OPERATIVE",
		mailing:{ 
			line1:"220 - 1333 COMMERCIAL DR",
			line2: "VANCOUVER BC V5L 3Y3",
			line3: "CA"
		},
		delivery:{
			line1: "220 - 1333 COMMERCIAL DR",
			line2: "VANCOUVER BC V5L 3Y3",
			line3: "CA"
		},
		director6:{
			firstname:"test",
			lastname:"test2",
			street: "123 test st",
			optionalfield: "I am an optional field",
			city:"victoria",
			province:"BC",
			postalcode: "V1V1V1",
			country: "CA"
		},
		director3:{
			firstName: "SUSAN",
			lastName: "LARKIN",
			street: "27 - 12 WEST 10TH AVENUE",
			city: "VANCOUVER",
			province: "BC",
			postalCode: "V5Y1R6",
			appointedDate: "2018-11-08",
			country: "CA"
		},	
		director4:{
			firstName: "HELEN",
			lastName: "JONES",
			street: "44 - 12 WEST 10TH AVENUE",
			city: "VANCOUVER",
			province: "BC",
			postalCode: "V5Y1R6"
		}

	},

    CP0001468:{
		identifier: "CP0001468",
		director_count: 5,
		legal_name: "MANANA PARK WATER CO-OPERATIVE",
		mailing:{
			line1: "4750 BRENTON PAGE ROAD",
			line2: "LADYSMITH BC V9G 1L7",
			line3: "CA"
		},
		delivery:{
			line1: "4750 BRENTON PAGE ROAD",
			line2: "LADYSMITH BC V9G 1L7",
			line3: "CA"
		}
	},

	CP0001496:{
		identifier: "CP0001496",
		director_count: 4,
		legal_name: "SITKA HOUSING CO-OPERATIVE (1985)",
		mailing:{
			line1: "1550 WOODLAND DRIVE",
			line2: "VANCOUVER BC V5L 5A5",
			line3: "CA"
		},
		delivery:{
			line1: "1550 WOODLAND DRIVE",
			line2: "VANCOUVER BC V5L 5A5",
			line3: "CA"
		}
	},

	CP0001523:{
		identifier: "CP0001523",
		pascode: "257682617",
		director_count: 6,
		legal_name: "CENTENNIAL PARK HOUSING CO-OPERATIVE",
		mailing:{
			line1:"4160 BOND STREET",
			line2: "BURNABY BC V5H 1G2",
			line3:"CA"
		},
		delivery:{
			line1: "4160 BOND STREET",
			line2: "BURNABY BC V5H 1G2",
			line3: "CA"
		}
	},
	CP0001254:{
		identifier: "CP0001254",
		passcode: "323479824",
		director_count : 5,
		legal_name: "BAKERVIEW HOUSING CO-OPERATIVE",
		mailing:{
			line1:"400 - 2378 CRESCENT WAY",
			line2: "ABBOTSFORD BC V2S 3M2",
			line3: "CA"
		},
		delivery:{
			line1:"33497 BEVAN AVENUE",
			line2: "ABBOTSFORD BC V2S 6H5",
			line3: "CA"
		}
	}

};
