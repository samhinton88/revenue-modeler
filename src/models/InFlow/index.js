

class InFlow {
	constructor(data) {
		this.amount = data.amount;
		this.period = data.period;

	}
}



const propTypes = {
	amount: 	{type: Number},
	period: 	{type: String},
	frequency: 	{type: Number}
}

module.exports = InFlow;