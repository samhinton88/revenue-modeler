"use strict"

Number.prototype.times = function(cb) {
  for(let i = 0; i < this; i++) {
    cb()
  }
};

const {
	Product,
	InFlow,
	OutFlow
} = require('./src/models');

const input = unpackArgs(process.argv.slice(2));

const {
  rev,
  cost,
  profitOrLoss
} = runClassroomModel(input);

(function report(rev, cost, profitOrLoss) {
  const prettyRev = `£${ rev/ 100}`;
  const prettyCost = `£${ cost/ 100}`;

  const pl = `£${ profitOrLoss / 100}`;

  console.log('revenue: \t', prettyRev);
  console.log('cost: \t\t', prettyCost);
  console.log('------------------------')
  console.log('profit/loss: \t', pl )

})(rev, cost, profitOrLoss);

function runClassroomModel(data) {
  const {
    price = 2000,
    roomrate = 6000,
    students = 5,
    period = 'month'
  } = data;

  const javaScriptCourse = new Product;

  const room =  new OutFlow({amount: roomrate, period:'week'});



  students.times(() => {
    javaScriptCourse.addInFlow(new InFlow({amount: price, period: 'week'}));
  });

  javaScriptCourse.addOutFlow(room);

  const rev = javaScriptCourse.totalRevenue(period);
  const cost = javaScriptCourse.totalCost(period);
  const profitOrLoss = javaScriptCourse.net(period);
  return { rev, cost, profitOrLoss }
}

function unpackArgs(args) {
  const obj = {};

  args.forEach((arg) => {
    let [key,val] = arg.split('=');

    if (isNaN(val)) {

      obj[key] = val;
    } else {
      obj[key] = parseInt(val);
    }

  })
  return obj;
};







