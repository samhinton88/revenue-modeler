const assert = require('assert');
const {OutFlow} = require('../src/models');
const {outFlowData} = require('./data');

describe('OutFlow', function(){
	let candidate;
  const {amount = 100000, period = 'month', oneOff = true, name} = outFlowData;


	beforeEach(function() {
		candidate = new OutFlow({ amount , period, name })
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


  it('can be a one off cost', function() {
    const candidate2 = new OutFlow({amount, oneOff})

    assert(candidate2.oneOff === true)
  });

  it('defaults to a one off cost if period prop not supplied', function() {
    const candidate2 = new OutFlow({amount});
    assert(candidate2.oneOff === true )
    assert(candidate.oneOff === false )
  })

  it('can store a name', function() {

    assert(candidate.name !== undefined)
    assert(candidate.name === name)
  })
})
