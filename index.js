const {
	Product,
	InFlow,
	OutFlow
} = require('./src/models');

console.log(process.argv.slice(2))
function unpackArgs(args) {
	const obj = {};
	console.log(args)
	args.forEach((arg) => {
		const [key,val] = arg.split('=');
		obj[key] = parseInt(val);

	})
	return obj;
}

const { price = 2000, roomrate = 6000, students = 5} = unpackArgs(process.argv.slice(2));

const javaScriptCourse = new Product;

const room =  new OutFlow({amount: roomrate, period:'week'});

Number.prototype.times = function(cb) {
	for(let i = 0; i < this; i++) {
		cb()
	}
}

students.times(() => {
	javaScriptCourse.addInFlow(new InFlow({amount: price, period: 'week'}));
});

console.log(javaScriptCourse.inFlows)

javaScriptCourse.addOutFlow(room);
const rev = javaScriptCourse.totalRevenue()
const cost = javaScriptCourse.totalCost()

const prettyRev = `£${ rev/ 100}`;
const prettyCost = `£${ cost/ 100}`;

console.log('revenue: ', prettyRev);
console.log('cost: ', prettyCost);