// async
// ====> result not waiting
// ==> result handling  using call back
// callback is a func which is passed as an argument for another func


// setTimeout(function(){
// 	console.log('I am callback');
// },3000);

// function askMny(amt,cb){
// 	setTimeout(function(){
// 		cb(null,'money');
// 	},2000);
// }

// console.log('hi')
// askMny(222,function(err,done){
// 	if(err){
// 	console.log('I have err', err);
// 	}
// 	else{
// 	console.log('I have success',done);
// 	}
// });
// console.log('non blocking code');

function askMoney(amt, cb) {
	console.log('Wait few days');
	setTimeout(function () {
		console.log('Dad gts his money');
		cb(null, amt);
	}, 2000);

}

function buyfone(model, cb) {
	console.log('come belka');
	setTimeout(function () {
		console.log('phone arrived');
		cb(null, model);
	}, 2000);
}

function takefoto(argument) {
	setTimeout(function () {
		argument('photo');
	}, 2000);
}

function edit(argument) {
	console.log('start editing');
	setTimeout(function () {
		argument();
	}, 2000);
}

function post(argument) {
	console.log('foto posted');
}

console.log('i want to post foto on insta');
console.log('i dont hhave fonee');
console.log('askMoney');
askMoney(19999, function (err, done) {
	if (err) {
		console.log('i dont get Money', err);
	}
	else {
		console.log('i have money', done);
		console.log('i have money go to shop');
		buyfone('s11', function (err, done) {
			if (err) {
				console.log('Phone isnt available', err);
			}
			else {
				console.log('i HAVE PHONE', done);
				console.log('Choose Place to take foto');
				takefoto(function (foto) {
					console.log('i have foto', foto);
					edit(function () {
						console.log('i get edit foto');
						post();
					});
				});
				console.log('i got call');
				console.log('it started raining');
			}
		});
		console.log('met frds');
	}
});

// not blocking task
console.log('go to clz');
