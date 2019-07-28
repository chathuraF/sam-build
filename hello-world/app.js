const axios = require('axios')

exports.lambdaHandler = async (event, context) => {
  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log('Response: ', response.data);
    return {
      'statusCode': 200,
      'body': JSON.stringify({
          message: 'success',
          value: response.data
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
