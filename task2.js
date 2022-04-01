

function getNumberOfMovies(substr) {
    var options = {
            host: 'jsonmock.hackerrank.com',
            path: 'api/movies/search/?Title=' + substr,
            method: 'GET'
    }
    
    var getReq = https.request(options, function (res) {
        res.on('data', function (data) {
            result = JSON.parse(data);
            console.log(result.total);
        });
        res.on('error', function (err) {
            console.log("Error : ", err);
        });
    });
    
    getReq.end();
    }
    
    
    
    const https = require('https');
    var pageNumber=1;
    getNumberOfMovies('spiderman');
    
    function getNumberOfMovies(substr) {
    
    var options = {
    host: 'jsonmock.hackerrank.com',
    path: 'https://j...content-available-to-author-only...k.com/api/movies/search/?Title=' + substr + '&page=' + pageNumber,
    method: 'GET'
    }
    var result;
    var titles = [];
    var getReq = https.request(options, function (res) {
    res.on('data', function (data) {
    result = JSON.parse(data);
    for (var i = 0; i < result.per_page; i++) {
    do{
    if(result.data[i]===undefined)
    break;
    titles.push(result.data[i].Title);
    pageNumber++;
    getNumberOfMovies(substr);
    } while (pageNumber<=result.total_pages)
    }
    titles.sort();
    for (var k = 0; k < titles.length; k++) {
    console.log(titles[k]);
    }
    });
    res.on('error', function (err) {
    console.log("Error : ", err);
    });
    });
    getReq.end();
    }