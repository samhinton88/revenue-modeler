class OutFlow {
	constructor(data){
		this.amount = data.amount;
		this.period = data.period;
    this.oneOff = data.period ? false : true;
    this.name   = data.name;
	}
}

module.exports = OutFlow;
