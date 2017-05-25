var DATA = {
  "stations": {
    "Commonwealth": {
      "title": "Commonwealth"
    },
    "NewSparta": {
      "title": "New Sparta"
    },
    "SyndicateNorth": {
      "title": "Rotum, Syndicate"
    },
    "SyndicateSouth": {
      "title": "Syndicate for Co-Prosperity"
    },
    "Yakstantinople": {
      "title": "Yakstantinople"
    },
    "Mylazia": {
      "title": "Mylazia"
    },
    "Slipstream": {
      "title": "Slipstream"
    }
  },
  "lines": [{
    "name": "CW-Horizon",
    "label": "CW-Horizon",
    "color": "#ffd300",
    "shiftCoords": [0, 0],
    "nodes": [ {
      "coords": [30, 10],
      "dir": "N"
    }, {
      "coords": [28, 10],
      "labelPos": "N"
    }, {
      "coords": [27, 10],
      "labelPos": "S"
    }, {
      "coords": [23, 10],
      "marker": "interchange",
      "name": "Commonwealth",
      "labelPos": "SW",
      "shiftCoords": [0, 0.5]
    }, {
      "coords": [14, 10],
      "labelPos": "N"
    }, {
      "coords": [10, 10]
    }]
  }, {
    "name": "CW-North",
    "label": "CW-North",
    "color": "#2675eb",
    "shiftCoords": [0, 0],
    "nodes": [{
      "coords": [23, 10],
      "marker": "interchange",
      "name": "Commonwealth",
      "canonical" : true,
      "labelPos": "SW",
      "hide": true
    }, {
      "coords": [23, 15],
      "name": 'NewSparta',
      "labelPos": "W"
    }, {
      "coords": [23, 20],
      "name": 'SyndicateNorth',
      "labelPos": "W"
    }, {
      "coords": [23, 25],
      "name": 'Yakstantinople',
      "labelPos": "W"
    }, {
      "coords": [23, 27]
    }, {
      "coords": [25, 29],
      "dir": "E"
    }, {
      "coords": [27, 29],
      "dir": "E"
    }, {
      "coords": [28, 29],
      "name": 'Mylazia',
      "labelPos": "N"
    }]
  }, {
    "name": "CW-SouthWest",
    "label": "CW-SouthWest",
    "color": "#283c7e",
    "shiftCoords": [0, 0],
    "nodes": [{
      "coords": [23, 10],
      "marker": "interchange",
      "name": "Commonwealth",
      "labelPos": "SW",
      "hide": true
    }, {
      "coords": [23, 9]
    }, {
      "coords": [23, 5]
    }, {
      "coords": [23, 2],
      "name": 'SyndicateSouth',
      "labelPos": "W"
    }, {
     "coords": [23, 1],
     "dir": "E"
    }, {
     "coords": [25, -1],
     "dir": "E"
    }, {
     "coords": [28, -1],
     "dir": "E"
   }, {
     "coords": [29, -1],
     "name": 'Slipstream',
     "labelPos": "S"
   }]
 }, {
   "name": "CW-U-Line",
   "label": "CW-U-Line",
   "color": "#ff4646",
   "shiftCoords": [0, 0.5],
   "nodes": [{
     "coords": [23, 10],
     "marker": "interchange",
     "name": "Commonwealth",
     "labelPos": "SW",
     "hide": true
   }, {
     "coords": [34, -1],
     "dir": "E"
   }

 ]
 }
],
  "river": {
    "name": "River",
    "label": "River",
    "shiftCoords": [0, 0],
    "nodes": []
  }
};

module.exports = DATA;
