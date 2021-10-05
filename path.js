var path = require("path");
// Normalize
console.log('normalization : ' + path.normalize('/a/a1/b/tab/..'));
// Join
console.log('joint path : ' + path.join('/a', 'a1', 'b', 'tab', '..'));
console.log('resolve : ' + path.resolve('index.js'));
console.log('ext name : ' + path.extname('index.js'));
path.basename('/foo/bar/baz/asdf/hjk.html');