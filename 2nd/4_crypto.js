const crypto = require('crypto');

var str = 'asdf1234';
let hashAlgorithm = crypto.createHash('sha512');
let hashing = hashAlgorithm.update(str);
let hashedString = hashing.digest('base64');

console.log('hashedString : ' + hashedString);

crypto.randomBytes(32,function(err,buffer){
  if(err) {
    console.log(err);
  } else {
    console.log(buffer);
    console.log('buffer : ' + buffer.toString('base64'));

    crypto.pbkdf2(str, buffer.toString('base64'),100000,64,'sha512',function(err,hashed) {
      if(err) {
        console.log(err);
      } else {
        console.log(hashed);
        console.log('hashed : ' + hashed.toString('base64'));
      }
    });
  }
});
