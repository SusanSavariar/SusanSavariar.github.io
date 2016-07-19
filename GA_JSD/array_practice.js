// var boroughs = ['manhattan', 'the bronx', 'queens', 'brooklyn', 'staten island']

// boroughs.forEach(function (borough) {
//   console.log(borough);
// });

var evens = []
evens.push(2,4,6,8,10)


var odds = []
odds.push(1,3,5,7,9)

//EVERY

var every1 = evens.every(function (num) {
    return num % 2 === 0
  })


var every2 = evens.every(function (num) {
    return num % 4 === 0
  })


  console.log(every1)
  console.log(every2)

//SOME

 evens.some(function (num) {
    return num % 4 === 0
  })
