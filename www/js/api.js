function queryApi() {
  // generateContent(test.data);
  // return;
  fetch('https://cors-anywhere.herokuapp.com/https://futar.bkk.hu/api/query/v1/ws/otp/api/where/arrivals-and-departures-for-stop.json?includeReferences=agencies,routes,trips,stops&stopId=BKK_F03494&minutesBefore=1&minutesAfter=30&key=bkk-web&version=3&appVersion=3.2.4-19639-9a6d560c')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    generateContent(json.data);
  })
}

function generateContent(data) {
  var newcontent = [];
  for (var i = 0; i < Math.min(5, data.entry.stopTimes.length); i++) {
    var entry = data.entry.stopTimes[i];
    var route = data.references.routes[data.references.trips[entry.tripId].routeId].shortName;
    if (entry.predictedDepartureTime) {
      var departure = new Date(entry.predictedDepartureTime*1000);
    }
    else {
      var departure = new Date(entry.departureTime*1000);
    }
    var minutes = Math.ceil((departure - new Date()) / (1000 * 60));
    if (minutes > 0) {
      newcontent.push(route + "¥" + entry.stopHeadsign + "†" + minutes + "'");
    }
    else {
      newcontent.push(route + "¥" + entry.stopHeadsign + "†");
    }
  }
  content = newcontent;
}

var test = {
    "version": 3,
    "status": "OK",
    "code": 200,
    "text": "OK",
    "currentTime": 1567524174781,
    "data": {
        "limitExceeded": false,
        "entry": {
            "stopId": "BKK_F01016",
            "alertIds": [],
            "nearbyStopIds": [],
            "stopTimes": [
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567523700,
                    "departureTime": 1567523700,
                    "predictedArrivalTime": 1567524223,
                    "predictedDepartureTime": 1567524223,
                    "tripId": "BKK_C019792045",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-66872",
                        "BKK_bkkinfo-68245"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524180,
                    "departureTime": 1567524180,
                    "predictedArrivalTime": 1567524254,
                    "predictedDepartureTime": 1567524254,
                    "tripId": "BKK_C018542106",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-65585"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524060,
                    "departureTime": 1567524060,
                    "predictedArrivalTime": 1567524441,
                    "predictedDepartureTime": 1567524441,
                    "tripId": "BKK_B974911054",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Rákospalota, Kossuth utca",
                    "arrivalTime": 1567524120,
                    "departureTime": 1567524120,
                    "predictedArrivalTime": 1567524471,
                    "predictedDepartureTime": 1567524471,
                    "tripId": "BKK_C018151412",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-67800"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524420,
                    "departureTime": 1567524420,
                    "predictedArrivalTime": 1567524511,
                    "predictedDepartureTime": 1567524511,
                    "tripId": "BKK_B974911061",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Bosnyák tér",
                    "arrivalTime": 1567524240,
                    "departureTime": 1567524240,
                    "predictedArrivalTime": 1567524525,
                    "predictedDepartureTime": 1567524525,
                    "tripId": "BKK_C015735876",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Rákospalota, Kossuth utca",
                    "arrivalTime": 1567524540,
                    "departureTime": 1567524540,
                    "predictedArrivalTime": 1567524540,
                    "predictedDepartureTime": 1567524540,
                    "tripId": "BKK_C018151416",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-67800"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524540,
                    "departureTime": 1567524540,
                    "predictedArrivalTime": 1567524558,
                    "predictedDepartureTime": 1567524558,
                    "tripId": "BKK_C018542111",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-65585"
                    ]
                },
                {
                    "stopHeadsign": "Keleti pályaudvar M",
                    "arrivalTime": 1567524300,
                    "departureTime": 1567524300,
                    "predictedArrivalTime": 1567524644,
                    "predictedDepartureTime": 1567524644,
                    "tripId": "BKK_C01725346",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524180,
                    "departureTime": 1567524180,
                    "predictedArrivalTime": 1567524679,
                    "predictedDepartureTime": 1567524679,
                    "tripId": "BKK_C019792053",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-66872",
                        "BKK_bkkinfo-68245"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524720,
                    "departureTime": 1567524720,
                    "predictedArrivalTime": 1567524714,
                    "predictedDepartureTime": 1567524714,
                    "tripId": "BKK_B94872159",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524600,
                    "departureTime": 1567524600,
                    "predictedArrivalTime": 1567524760,
                    "predictedDepartureTime": 1567524760,
                    "tripId": "BKK_C019792061",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-66872",
                        "BKK_bkkinfo-68245"
                    ]
                },
                {
                    "stopHeadsign": "Bosnyák tér",
                    "arrivalTime": 1567524660,
                    "departureTime": 1567524660,
                    "predictedArrivalTime": 1567524765,
                    "predictedDepartureTime": 1567524765,
                    "tripId": "BKK_C015735888",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524960,
                    "departureTime": 1567524960,
                    "predictedArrivalTime": 1567524828,
                    "predictedDepartureTime": 1567524828,
                    "tripId": "BKK_B974911075",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Keleti pályaudvar M",
                    "arrivalTime": 1567524900,
                    "departureTime": 1567524900,
                    "predictedArrivalTime": 1567524924,
                    "predictedDepartureTime": 1567524924,
                    "tripId": "BKK_C01725349",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567524960,
                    "departureTime": 1567524960,
                    "predictedArrivalTime": 1567525029,
                    "predictedDepartureTime": 1567525029,
                    "tripId": "BKK_C018542121",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-65585"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525080,
                    "departureTime": 1567525080,
                    "predictedArrivalTime": 1567525068,
                    "predictedDepartureTime": 1567525068,
                    "tripId": "BKK_C019792069",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-66872",
                        "BKK_bkkinfo-68245"
                    ]
                },
                {
                    "stopHeadsign": "Bosnyák tér",
                    "arrivalTime": 1567525140,
                    "departureTime": 1567525140,
                    "predictedArrivalTime": 1567525140,
                    "predictedDepartureTime": 1567525140,
                    "tripId": "BKK_C015735894",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525320,
                    "departureTime": 1567525320,
                    "predictedArrivalTime": 1567525320,
                    "predictedDepartureTime": 1567525320,
                    "tripId": "BKK_B974911082",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525320,
                    "departureTime": 1567525320,
                    "predictedArrivalTime": 1567525320,
                    "predictedDepartureTime": 1567525320,
                    "tripId": "BKK_C018542126",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-65585"
                    ]
                },
                {
                    "stopHeadsign": "Rákospalota, Kossuth utca",
                    "arrivalTime": 1567525020,
                    "departureTime": 1567525020,
                    "predictedArrivalTime": 1567525329,
                    "predictedDepartureTime": 1567525329,
                    "tripId": "BKK_C018151420",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-67800"
                    ]
                },
                {
                    "stopHeadsign": "Bosnyák tér",
                    "arrivalTime": 1567525210,
                    "departureTime": 1567525210,
                    "predictedArrivalTime": 1567525448,
                    "predictedDepartureTime": 1567525448,
                    "tripId": "BKK_NCZ573-TGjWG5qlTACz7hJTen-N-A",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Keleti pályaudvar M",
                    "arrivalTime": 1567525500,
                    "departureTime": 1567525500,
                    "tripId": "BKK_C01725352",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Bosnyák tér",
                    "arrivalTime": 1567525560,
                    "departureTime": 1567525560,
                    "tripId": "BKK_C015735900",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Rákospalota, Kossuth utca",
                    "arrivalTime": 1567525500,
                    "departureTime": 1567525500,
                    "predictedArrivalTime": 1567525662,
                    "predictedDepartureTime": 1567525662,
                    "tripId": "BKK_C018151424",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-67800"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525620,
                    "departureTime": 1567525620,
                    "predictedArrivalTime": 1567525675,
                    "predictedDepartureTime": 1567525675,
                    "tripId": "BKK_B94872163",
                    "serviceDate": "20190903"
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525680,
                    "departureTime": 1567525680,
                    "predictedArrivalTime": 1567525680,
                    "predictedDepartureTime": 1567525680,
                    "tripId": "BKK_C018542131",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-65585"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525500,
                    "departureTime": 1567525500,
                    "predictedArrivalTime": 1567525689,
                    "predictedDepartureTime": 1567525689,
                    "tripId": "BKK_C019792077",
                    "serviceDate": "20190903",
                    "alertIds": [
                        "BKK_bkkinfo-66872",
                        "BKK_bkkinfo-68245"
                    ]
                },
                {
                    "stopHeadsign": "Újpalota, Nyírpalota út",
                    "arrivalTime": 1567525860,
                    "departureTime": 1567525860,
                    "predictedArrivalTime": 1567525860,
                    "predictedDepartureTime": 1567525860,
                    "tripId": "BKK_B974911089",
                    "serviceDate": "20190903"
                }
            ]
        },
        "references": {
            "agencies": {
                "BKK": {
                    "id": "BKK",
                    "name": "BKK",
                    "url": "http://www.bkk.hu",
                    "timezone": "Europe/Budapest",
                    "lang": "hu",
                    "phone": "+36 1 3 255 255"
                }
            },
            "routes": {
                "BKK_9560": {
                    "id": "BKK_9560",
                    "shortName": "956",
                    "description": "Pécel, Kun József utca | Pesthidegkút-Hűvösvölgy",
                    "type": "BUS",
                    "color": "1E1E1E",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "956",
                    "bikesAllowed": false,
                    "style": {
                        "color": "1E1E1E",
                        "icon": {
                            "type": "BOX",
                            "text": "956",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_9310": {
                    "id": "BKK_9310",
                    "shortName": "931",
                    "description": "Árpádföld, Dezsőfia utca | Verecke lépcső",
                    "type": "BUS",
                    "color": "1E1E1E",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "931",
                    "bikesAllowed": false,
                    "style": {
                        "color": "1E1E1E",
                        "icon": {
                            "type": "BOX",
                            "text": "931",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_9730": {
                    "id": "BKK_9730",
                    "shortName": "973",
                    "description": "Nagytétény, ipartelep | Újpalota, Szentmihályi út",
                    "type": "BUS",
                    "color": "1E1E1E",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "973",
                    "bikesAllowed": false,
                    "style": {
                        "color": "1E1E1E",
                        "icon": {
                            "type": "BOX",
                            "text": "973",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_9900": {
                    "id": "BKK_9900",
                    "shortName": "990",
                    "description": "Rákoskert | Normafa",
                    "type": "BUS",
                    "color": "1E1E1E",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "990",
                    "bikesAllowed": false,
                    "style": {
                        "color": "1E1E1E",
                        "icon": {
                            "type": "BOX",
                            "text": "990",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_1335": {
                    "id": "BKK_1335",
                    "shortName": "133E",
                    "description": "Nagytétény, Erdélyi utca | Újpalota, Nyírpalota út",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "133E",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "133E",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_1100": {
                    "id": "BKK_1100",
                    "shortName": "110",
                    "description": "Bosnyák tér | Thomán István utca",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "110",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "110",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_0050": {
                    "id": "BKK_0050",
                    "shortName": "5",
                    "description": "Rákospalota, Kossuth utca | Pasaréti tér",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "5",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "5",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_1120": {
                    "id": "BKK_1120",
                    "shortName": "112",
                    "description": "Bosnyák tér | Thomán István utca",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "112",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "112",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_1780": {
                    "id": "BKK_1780",
                    "shortName": "178",
                    "description": "Keleti pályaudvar M | Naphegy tér",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "178",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "178",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_0085": {
                    "id": "BKK_0085",
                    "shortName": "8E",
                    "description": "Újpalota, Nyírpalota út | Kelenföld vasútállomás M",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "8E",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "8E",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_1085": {
                    "id": "BKK_1085",
                    "shortName": "108E",
                    "description": "Újpalota, Nyírpalota út | Gazdagréti tér",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "108E",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "108E",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_0070": {
                    "id": "BKK_0070",
                    "shortName": "7",
                    "description": "Újpalota, Nyírpalota út | Albertfalva vasútállomás",
                    "type": "BUS",
                    "color": "009FE3",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "7",
                    "bikesAllowed": false,
                    "style": {
                        "color": "009FE3",
                        "icon": {
                            "type": "BOX",
                            "text": "7",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_9070": {
                    "id": "BKK_9070",
                    "shortName": "907",
                    "description": "Örs vezér tere M H | Kelenföld vasútállomás M",
                    "type": "BUS",
                    "color": "1E1E1E",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "907",
                    "bikesAllowed": false,
                    "style": {
                        "color": "1E1E1E",
                        "icon": {
                            "type": "BOX",
                            "text": "907",
                            "textColor": "FFFFFF"
                        }
                    }
                },
                "BKK_9080": {
                    "id": "BKK_9080",
                    "shortName": "908",
                    "description": "Cinkotai autóbuszgarázs | Móricz Zs. körtér M",
                    "type": "BUS",
                    "color": "1E1E1E",
                    "textColor": "FFFFFF",
                    "agencyId": "BKK",
                    "iconDisplayType": "BOX",
                    "iconDisplayText": "908",
                    "bikesAllowed": false,
                    "style": {
                        "color": "1E1E1E",
                        "icon": {
                            "type": "BOX",
                            "text": "908",
                            "textColor": "FFFFFF"
                        }
                    }
                }
            },
            "stops": {
                "BKK_F01016": {
                    "id": "BKK_F01016",
                    "lat": 47.494408,
                    "lon": 19.060983,
                    "name": "Astoria M",
                    "code": "F01016",
                    "direction": "69",
                    "description": "3323",
                    "locationType": 0,
                    "parentStationId": "BKK_CSF01108",
                    "type": "BUS",
                    "wheelchairBoarding": true,
                    "routeIds": [
                        "BKK_0050",
                        "BKK_0070",
                        "BKK_0085",
                        "BKK_1085",
                        "BKK_1100",
                        "BKK_1120",
                        "BKK_1335",
                        "BKK_1780",
                        "BKK_9070",
                        "BKK_9080",
                        "BKK_9310",
                        "BKK_9560",
                        "BKK_9730",
                        "BKK_9900"
                    ],
                    "stopColorType": "BUS",
                    "style": {
                        "colors": [
                            "009FE3",
                            "1E1E1E"
                        ]
                    }
                }
            },
            "trips": {
                "BKK_C015735876": {
                    "id": "BKK_C015735876",
                    "routeId": "BKK_1120",
                    "shapeId": "BKK_C015735876",
                    "tripHeadsign": "Bosnyák tér",
                    "serviceId": "BKK_C01573AHCHB-0011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018151416": {
                    "id": "BKK_C018151416",
                    "routeId": "BKK_0050",
                    "shapeId": "BKK_C018151416",
                    "tripHeadsign": "Rákospalota, Kossuth utca",
                    "serviceId": "BKK_C01815AHCMAA-031",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C015735894": {
                    "id": "BKK_C015735894",
                    "routeId": "BKK_1120",
                    "shapeId": "BKK_C015735894",
                    "tripHeadsign": "Bosnyák tér",
                    "serviceId": "BKK_C01573AHCHB-0011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C01725352": {
                    "id": "BKK_C01725352",
                    "routeId": "BKK_1780",
                    "shapeId": "BKK_C01725352",
                    "tripHeadsign": "Keleti pályaudvar M",
                    "serviceId": "BKK_C01725AHCMAA-011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018151412": {
                    "id": "BKK_C018151412",
                    "routeId": "BKK_0050",
                    "shapeId": "BKK_C018151412",
                    "tripHeadsign": "Rákospalota, Kossuth utca",
                    "serviceId": "BKK_C01815AHCMAA-031",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C019792077": {
                    "id": "BKK_C019792077",
                    "routeId": "BKK_1335",
                    "shapeId": "BKK_C019792077",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01979RA4HCMAA-011",
                    "directionId": "1",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C019792053": {
                    "id": "BKK_C019792053",
                    "routeId": "BKK_1335",
                    "shapeId": "BKK_C019792053",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01979RA4HCMAA-011",
                    "directionId": "1",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018542111": {
                    "id": "BKK_C018542111",
                    "routeId": "BKK_0070",
                    "shapeId": "BKK_C018542111",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01854RA1HCMAA-051",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018542131": {
                    "id": "BKK_C018542131",
                    "routeId": "BKK_0070",
                    "shapeId": "BKK_C018542131",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01854RA1HCMAA-051",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B974911089": {
                    "id": "BKK_B974911089",
                    "routeId": "BKK_0085",
                    "shapeId": "BKK_B974911089",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B97491AHCKZ-0021",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C01725346": {
                    "id": "BKK_C01725346",
                    "routeId": "BKK_1780",
                    "shapeId": "BKK_C01725346",
                    "tripHeadsign": "Keleti pályaudvar M",
                    "serviceId": "BKK_C01725AHCMAA-011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B974911082": {
                    "id": "BKK_B974911082",
                    "routeId": "BKK_0085",
                    "shapeId": "BKK_B974911082",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B97491AHCKZ-0021",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B974911061": {
                    "id": "BKK_B974911061",
                    "routeId": "BKK_0085",
                    "shapeId": "BKK_B974911061",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B97491AHCKZ-0021",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C01725349": {
                    "id": "BKK_C01725349",
                    "routeId": "BKK_1780",
                    "shapeId": "BKK_C01725349",
                    "tripHeadsign": "Keleti pályaudvar M",
                    "serviceId": "BKK_C01725AHCMAA-011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C015735900": {
                    "id": "BKK_C015735900",
                    "routeId": "BKK_1100",
                    "shapeId": "BKK_C015735900",
                    "tripHeadsign": "Bosnyák tér",
                    "serviceId": "BKK_C01573AHCHB-0011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C015735888": {
                    "id": "BKK_C015735888",
                    "routeId": "BKK_1100",
                    "shapeId": "BKK_C015735888",
                    "tripHeadsign": "Bosnyák tér",
                    "serviceId": "BKK_C01573AHCHB-0011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018151424": {
                    "id": "BKK_C018151424",
                    "routeId": "BKK_0050",
                    "shapeId": "BKK_C018151424",
                    "tripHeadsign": "Rákospalota, Kossuth utca",
                    "serviceId": "BKK_C01815AHCMAA-031",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018151420": {
                    "id": "BKK_C018151420",
                    "routeId": "BKK_0050",
                    "shapeId": "BKK_C018151420",
                    "tripHeadsign": "Rákospalota, Kossuth utca",
                    "serviceId": "BKK_C01815AHCMAA-031",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C019792045": {
                    "id": "BKK_C019792045",
                    "routeId": "BKK_1335",
                    "shapeId": "BKK_C019792045",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01979RA4HCMAA-011",
                    "directionId": "1",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_NCZ573-TGjWG5qlTACz7hJTen-N-A": {
                    "id": "BKK_NCZ573-TGjWG5qlTACz7hJTen-N-A",
                    "routeId": "BKK_1100",
                    "shapeId": "BKK_NCZ573-TGjWG5qlTACz7hJTen-N-A",
                    "tripHeadsign": "Bosnyák tér",
                    "serviceId": "BKK_ADDED-SERVICE-ServiceIdDate(2019-9-3)",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B94872159": {
                    "id": "BKK_B94872159",
                    "routeId": "BKK_1085",
                    "shapeId": "BKK_B94872159",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B94872AHCSZB-011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018542121": {
                    "id": "BKK_C018542121",
                    "routeId": "BKK_0070",
                    "shapeId": "BKK_C018542121",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01854RA1HCMAA-051",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C019792069": {
                    "id": "BKK_C019792069",
                    "routeId": "BKK_1335",
                    "shapeId": "BKK_C019792069",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01979RA4HCMAA-011",
                    "directionId": "1",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018542126": {
                    "id": "BKK_C018542126",
                    "routeId": "BKK_0070",
                    "shapeId": "BKK_C018542126",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01854RA1HCMAA-051",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B94872163": {
                    "id": "BKK_B94872163",
                    "routeId": "BKK_1085",
                    "shapeId": "BKK_B94872163",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B94872AHCSZB-011",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C018542106": {
                    "id": "BKK_C018542106",
                    "routeId": "BKK_0070",
                    "shapeId": "BKK_C018542106",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01854RA1HCMAA-051",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_C019792061": {
                    "id": "BKK_C019792061",
                    "routeId": "BKK_1335",
                    "shapeId": "BKK_C019792061",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_C01979RA4HCMAA-011",
                    "directionId": "1",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B974911075": {
                    "id": "BKK_B974911075",
                    "routeId": "BKK_0085",
                    "shapeId": "BKK_B974911075",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B97491AHCKZ-0021",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                },
                "BKK_B974911054": {
                    "id": "BKK_B974911054",
                    "routeId": "BKK_0085",
                    "shapeId": "BKK_B974911054",
                    "tripHeadsign": "Újpalota, Nyírpalota út",
                    "serviceId": "BKK_B97491AHCKZ-0021",
                    "directionId": "0",
                    "bikesAllowed": false,
                    "wheelchairAccessible": true
                }
            },
            "alerts": {}
        },
        "class": "entryWithReferences"
    }
}
