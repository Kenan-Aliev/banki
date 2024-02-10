export const models = {
	deposits: {
		parentModel: 'vklad',
		childModel: "vklad"
	},
	credits: {
		parentModel: 'credit',
		childModel: "credit"
	},
	cards: {
		parentModel: 'card',
		childModel: 'creditDebitCard'
	},
	ipoteka: {
		parentModel: 'ipoteka',
		childModel: 'ipoteka'
	}
}