var title = require('./title');
var something = 'something';

let Transitive = require('transitive-js');

let axios = require('axios');
let data = require('./data');
let tubeMap = require('d3-tube-map');
let d3 = require('d3');


var el = document.getElementById('my-map');

  var svg = d3.select(el)
      .append('svg')
      .style('width', '100%')
      .style('height', '100%');;

  var width = 1600;
  var height = 1024;
// root = data;
  const map = tubeMap.tubeMap()
    .width(width)
    .height(height)
    .margin({
      top: height / 50,
      right: width / 7,
      bottom: height / 10,
      left: width / 7,
    });

svg.datum(data).call(map);

// title();
