const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (name) => {
  fs.open(name, 'w', function (err, file) {
  if (err) throw err;
  console.log(`${name} created!`);
});
};

module.exports.mkdir = (directoryPath) => {
  fs.mkdirSync(directoryPath);
};
