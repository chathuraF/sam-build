const axios = require('axios')

exports.lambdaHandler = async (event, context) => {
  let res;
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response);
    return {
      'statusCode': 200,
      'body': JSON.stringify({
          message: 'success',
          value: res
      })
    }
  })
  .catch(function (error) {
    console.log(error);
    return {
      'statusCode': 200,
      'body': JSON.stringify({
          message: 'error',
          value: error
      })
    }
  })
};
