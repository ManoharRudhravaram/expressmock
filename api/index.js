const app = require('..index/'); // Adjust to point to your app file
const serverless = require('serverless-http');

module.exports = serverless(app);
