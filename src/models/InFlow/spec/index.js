"use strict"
const {
	InFlow,
	Product
} = require('../index');
const assert = require('assert');

const price = 2000;



const student = new InFlow({amount: 1000, period: 'week'});
const student2 = new InFlow({amount: 1000, period: 'week'});

const lesson = new Product({ name: 'JavaScript', category: 'group'})

lesson.addInflow(student);
lesson.addInflow(student2)
const lessons = []

for (let i = 0; i < 5; i++ ) { 
	const lesson = new Product;
	for (let i = 0; i < 10; i++) {
		const student = new InFlow({amount: price})
		lesson.addInflow(student)
	};

	lessons.push(lesson);

}

const weeklyTotal = lessons.reduce((m, i) => m + i.totalRevenue(), 0)
console.log(weeklyTotal / 100)
