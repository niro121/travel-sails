module.exports = {


  friendlyName: 'Getsliders',


  description: 'Getsliders something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
  
    const axios = require('axios');

    var config =  {
      headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer 6e8c1e98b6f4fb703ab7cbeac5956af3fdeb63a1cd5ad54658c78d0d78eade75b58e220ff257e278649fa5674f5e9e0e43efedec942e5b2b6ccdd84d9fbbe9712f920a8ac54030c6577729edf0f7012054fd8a001fc8095ac00d5d0f9c43c7c2a1e03f0ba649a40c5131ddc7e62e0867329823085e7c59fb76f987a4dd3c3f11",
      },
    };

    // STRAPI CALL POPULATES SLIDES ARRAY
    var slides = await axios.get('http://127.0.0.1:1337/api/herosliders?populate=*', config )
    .then(function (response) {
  
      // handle success
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
      // handle error
      return [];
    })
    .finally(function () {
      // always executed
    });

    console.log("slides",slides);

     // Respond with view.
     return exits.success({
      sliders: slides,
    });

  }


};
