var encryptor = require('file-encryptor');
var fs = require('fs');
var path = require('path');

var key = 'alvaro';
var folderPath = './Kdrama';

function encryptAndDelete(originalFilePath) {
    encryptor.encryptFile(originalFilePath, originalFilePath + '.encrypted', key, function(err) {
        if (!err) {
            fs.unlinkSync(originalFilePath);
        }
    });
}

fs.readdirSync(folderPath).forEach(file => {
    var filePath = path.join(folderPath, file);

    encryptAndDelete(filePath);
});

console.log('Files encrypted successfully.');