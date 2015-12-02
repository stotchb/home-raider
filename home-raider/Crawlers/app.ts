///<reference path='app.d.ts'/>

import cheerio  = require('cheerio');
import _ = require('lodash');
import sprintf = require('sprintf');
import request = require('request');
import Promise = require('bluebird');


getPage('http://www.591.com.tw/rent-detail-3784790.html')
    .then(function (data) {
        retrieve591(data);
    })
    .catch(function (err) {
        console.error(err);
    });

/**
 * 
 * @param url target url
 */
function getPage(url) {
    return new Promise(function (resolve, reject) {
        return request(url, function (err, resp, body) {
            if (err) {
                return reject(err);
            }

            return resolve(body);            
        })
    });
}

function retrieve591(data) {
    var $ = cheerio.load(data);
    console.log(getTitle());
    console.log(getDetail());

    function getTitle() {
        return $('#infoTitle > h1').text().trim()
    }

    function getDetail() {
        var elem = $('#detailInfo > ul > li');
        elem.each(function (index, item) {
            console.log('[' + index + '] : ' + $(this).text().trim());
        });        
    }
}