// this is not a promise to make to your gf/bf lol
// promise is an object which represent future result value
// object is collection of key value pair
// eg. details = {
// 	name: 'Sanket',
// 	address: 'Bharatpur',
// 	a:function(){}
// }

// promise has 3 states
// pending
// OnRejection
// OnFullfilled
// promise setteled
// promise will never change its state once settled
// Result handling is good as it handle single value


// method
// then... catch.... finally
// similar to try catch finally then ==> success
// catch ==> failure
// finally ==>  kei value lidaina tara execute chai hunxa

// syntax

// var AskMoney = new Promise(function (success,failure) {
// 	setTimeout(function(){
// 		success('I am Promise');
// 		failure('I am not Promise'); 
// 		// first ma jun call hunxa tei matra execute hunxa
// 		// as promise handles single value
// 	},1000);
// });

// console.log('askMoney>>>>>',AskMoney);
// // it is used as an object in this case AskMoney.-----
// AskMoney
// .then(function(argument){
// 	console.log('in then>>>>', argument);
// })
//  .catch(function(err){
// 	console.log('err in catch',err);
// })
//  .finally(function(){
//  	console.log('finally block');
//  });


function askMoney(amt) {
	var a = new Promise(function(resolve,reject){
	console.log('Wait few days');
	setTimeout(function () {
		console.log('Dad gts his money');
		resolve(amt);
	}, 2000);
	});
	return a;
}

function buyfone(model) {
	return new Promise(function(resolve,reject){
	console.log('come belka');
	setTimeout(function () {
		console.log('phone arrived');
		resolve(model);
	}, 2000);
	});
}

function takefoto() {
	return new Promise(function(resolve,reject){
		console.log('Taking Photo 📷')
	setTimeout(function () {
		resolve('photo');
	}, 2000);
	});
}

function edit() {
	return new Promise(function(resolve,reject){
	console.log('start editing');
	setTimeout(function () {
		console.log('editing done');
		resolve();
	}, 200);
    });
}

function post() {
	console.log('foto posted');
}


askMoney(30000)
	.then(function(data){
		console.log('Success in askMoney>>>',data);
		var a = buyfone('iphone 15');
		console.log('Non blocking code');
		return a;
	})
	.then(function(argument) {
		console.log('Success in buyfone>>>',argument);
		return takefoto(); 
	})
	.then(function(argument) {
		console.log('Success in takefoto>>>',argument);
		return edit();
	})
	.then(function(argument) {
		console.log('Success in edit>>>');
		return post();
	})
	.then(function(argument) {
		console.log('Success in post>>>');
	})
	.catch(function(argument) {
		console.log('Err Catched>>>',argument);
	});
