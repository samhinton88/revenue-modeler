const assert = require('assert');
const {OutFlow} = require('../src/models');

describe('OutFlow', function(){
	let candidate, amount = 100000, period = 'month';


	beforeEach(function() {
		candidate = new OutFlow({ amount , period})
	})

	it('exists', function(){
		assert(OutFlow)
	})

	it('has an amount property',function(){
		assert(candidate.amount !== undefined)
	})

	it('has a period property',function (){
		assert(candidate.period !== undefined)
	})
})