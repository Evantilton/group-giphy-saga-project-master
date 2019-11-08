const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:search', (req, res) => {
    
    axios({
        method: 'GET',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            limit: 5,
            offset: 0,
            q: req.params.search,
            rating: 'g',
        },
        url: 'api.giphy.com/v1/gifs/search',
    }).then(response => {
        console.log(response);
        res.send(response.data);
    }).catch(error => {
        console.log('error making trendy giphy request');
        console.log(error);
    });
});

module.exports = router;