import environment from './environment';

let variables = {};
if (environment === 'production') {
  variables = require('./production');
} else if (environment === 'dev') {
  variables = require('./dev');
}

export default variables;