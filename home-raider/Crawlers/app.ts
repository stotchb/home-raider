///<reference path='app.d.ts'/>

import cheerio = require('cheerio');
import _ = require('lodash');

var $: any = cheerio.load('<span></span>');
console.log($.html());

var arr: number[] = [1, 2, 3, 4, 5];
console.log(_.map(arr, (x) => x * 2));