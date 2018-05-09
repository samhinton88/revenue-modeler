class Product {
	constructor(data) {
		this.data = data;
		this.inFlows = [];
		this.outFlows = [];
		this.periodMap = {
			'day': 1,
			'week': 7,
			'month': 30,
			'year': 365
		}
	}

	addInFlow(inFlow) {
		this.inFlows.push(inFlow);
	}

	addOutFlow(outFlow) {
		this.outFlows.push(outFlow);
	}

	totalCost(period = 'month') {

		return this.total('outFlows', period)
	}

	totalRevenue(period = 'month') {
		
		return this.total('inFlows', period);
	}

	total(flowType, period) {
		
		return Math.floor(
			this[flowType].reduce((m, i) => {
		
				return m + this.calculatePeriodAmount(i) * this.periodMap[period];

			}, 0)
		)
	}

	calculatePeriodAmount(flowObject) {
		// take period and return contribution 
		const periodMultiplier = this.periodMap[flowObject.period];
		return flowObject.amount / periodMultiplier;
	}

}

module.exports = Product;