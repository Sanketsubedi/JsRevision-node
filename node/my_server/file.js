const fs = require('fs');


//create a file

// fs.writeFile('sanket.txt','how are you',function(err,done){
//     if(err){
//         console.log('failed');
//     }
//     else{
//         console.log('success');
//     }
// });
// console.log('created');

// in es6 concat garda + ko satto ${fileName}


// in a function
function myWrite(fileName, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(`newFile/${fileName}`, content, function (err, done) {
            if (err) {
                reject(err);
            }
            else {
                resolve(done);
            }
        });
    });
}

myWrite('Hello.txt', 'Hello My name is Sanket Subedi. I am a learner.I like JS')
    .then(function (data) {
        console.log('success >>', data);
    })
    .catch(function (err) {
        console.log('err>>>', err);
    });
