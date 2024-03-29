const axios = require('axios')

exports.getData =  () => axios.get('https://dog.ceo/api/breeds/image/random')