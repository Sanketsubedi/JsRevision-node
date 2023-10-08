var games = ['CSGO','Valorant','COD','PUBG','CS2'];
var test = games.indexOf('COD');
console.log(test)

// games.unshift('LOL');// first of array add
// games.push('LOL'); // last of array add

// games.shift(); // removes first item of an array
// games.pop(); // removes items at last of an array


// splice ===> this method is used to add or remove item from array
// remove
// games.splice(games.indexOf('COD'),3)
// console.log(games)

// add 
games.splice(games.indexOf('COD'),0,'CandyCrush')
// multiple data can be passed or removed by adding values after the index

console.log(games)

// array to string
console.log('to string>>>',games.join(' '))
// it changes array to string and join using the passed parameter

games.forEach(function(item,i){
	console.log('item>>',item)
	console.log('index>>',i)
})