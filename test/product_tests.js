const assert = require('assert');
const {
	Product,
	InFlow,
	OutFlow
} = require('../src/models');
const {outFlowData, inFlowData} = require('./data');


describe('Product', function() {
	const price = 2000;
	const lesson = new Product({ name: 'JavaScript', category: 'group' });
	const lessons = [];

	for (let i = 0; i < 5; i++ ) {
		const lesson = new Product;
		for (let i = 0; i < 10; i++) {
			const student = new InFlow({ amount: price, period: 'week' })
			lesson.addInFlow(student)
		};
		const room = new OutFlow({ amount: 6000, period: 'week' });
		lesson.addOutFlow(room);
		lessons.push(lesson);
	};

	const weeklyTotal = lessons.reduce((m, i) => m + i.totalRevenue(), 0);
	const lessonOne = lessons[0];

	it('exists', function() {
		assert(Product);
	});

	it('registers an in-flow', function(){
		const candidateProduct = new Product;
		const candidateInFlow = new InFlow({amount: 2000});
		candidateProduct.addInFlow(candidateInFlow);
		assert(candidateProduct.inFlows.length === 1);
	});

	it('returns a monthly total revenue by default', function() {
		assert( lessons[0].totalRevenue() > 80000 )
	});

	it('returns an accurate monthly total for an annual inflow', function() {
		const candidate = new Product;
		const inflow  = new InFlow({amount: 12000, period: 'year'});
		candidate.addInFlow(inflow);
		assert(candidate.totalRevenue('month') > 950)
		assert(candidate.totalRevenue('month') < 1050)
	})

	it('can return a weekly total revenue', function() {
		assert(lessons[0].totalRevenue('week') === 20000)
	});

	it('can return an annual total revenue', function() {

    const revenue = lessonOne.totalRevenue('year')
		assert(
      revenue < ((20000 / 7) * 366) &&
      revenue > ((20000 / 7) * 364)
    )
	});


	it('registers an OutFlow', function(){
		assert(lessonOne.outFlows.length === 1);
	});

	it('returns a monthly total cost by default', function() {

		assert(lessonOne.totalCost() > 24000)
		assert(lessonOne.totalCost() < 26000)
	})

	it('returns an accurate weekly total cost', function() {
		assert(lessonOne.totalCost('week') === 6000)
	})

	it('returns an accurate annual total cost', function() {
		assert(lessonOne.totalCost('year') > (52 * 6000))
		assert(lessonOne.totalCost('year') < (52.5 * 6000))
	})

  it('returns a profit / loss', function() {
    assert(lessonOne.net())
  })


})
