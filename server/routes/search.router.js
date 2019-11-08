const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    
    axios({
        method: 'GET',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            limit: 5,
            offset: 0,
            // q: SEARCH,
            rating: 'g',
        },
        url: 'http://api.giphy.com/v1/gifs/random'
        // url: 'api.giphy.com/v1/gifs/search',
    }).then(response => {
        console.log(response);
        res.send(response.data);
    }).catch(error => {
        console.log('error making trendy giphy request');
        console.log(error);
    });
});

module.exports = router;