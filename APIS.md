### APIS

#### `/api/ping` - `[GET]`

Ping the microservice.

```json
// http://localhost:5522/api/ping

{
  "datetime": 1587299873790,
  "info": "PING_OK",
  "status": 200
}
```

#### `/api/data/locations?query={query}` - `[GET]`

Get the list of the available locations

```json
// http://localhost:5522/api/data/locations?query=fe

{
  "datetime": 1587768464358,
  "info": "OK",
  "status": 200,
  "data": [
    {
      "title": "Santa Cruz de Tenerife",
      "location_type": "City",
      "woeid": 773692,
      "latt_long": "28.46163,-16.267059"
    },
    {
      "title": "Santa Fe",
      "location_type": "City",
      "woeid": 2488867,
      "latt_long": "35.666431,-105.972572"
    }
  ]
}
```

#### `/api/data/location?id={locationId}` - `[GET]`

Get a detailed information about the weather by the city unique identifier (`woeid`).

```json
// http://localhost:5522/api/data/location?id=773692

{
  "datetime": 1587768637071,
  "info": "OK",
  "status": 200,
  "data": {
    "sources": [
      {
        "title": "BBC",
        "slug": "bbc",
        "url": "http://www.bbc.co.uk/weather/",
        "crawl_rate": 360
      },
      {
        "title": "Forecast.io",
        "slug": "forecast-io",
        "url": "http://forecast.io/",
        "crawl_rate": 480
      },
      {
        "title": "HAMweather",
        "slug": "hamweather",
        "url": "http://www.hamweather.com/",
        "crawl_rate": 360
      },
      {
        "title": "OpenWeatherMap",
        "slug": "openweathermap",
        "url": "http://openweathermap.org/",
        "crawl_rate": 360
      },
      {
        "title": "Weather Underground",
        "slug": "wunderground",
        "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
        "crawl_rate": 720
      },
      {
        "title": "World Weather Online",
        "slug": "world-weather-online",
        "url": "http://www.worldweatheronline.com/",
        "crawl_rate": 360
      }
    ],
    "weather": [
      {
        "id": 5812568268472320,
        "weather_state_name": "Light Cloud",
        "weather_state_abbr": "lc",
        "wind_direction_compass": "N",
        "created": "2020-04-24T20:16:55.724020Z",
        "applicable_date": "2020-04-25",
        "min_temp": 16.135,
        "max_temp": 18.805,
        "the_temp": 17.37,
        "wind_speed": 5.779576871072934,
        "wind_direction": 353.5,
        "air_pressure": 1020,
        "humidity": 73,
        "visibility": 9.598942177682336,
        "predictability": 70
      },
      {
        "id": 5690322745032704,
        "weather_state_name": "Heavy Cloud",
        "weather_state_abbr": "hc",
        "wind_direction_compass": "NNE",
        "created": "2020-04-24T20:16:58.541518Z",
        "applicable_date": "2020-04-26",
        "min_temp": 16.47,
        "max_temp": 19.615000000000002,
        "the_temp": 17.53,
        "wind_speed": 3.8171957766642803,
        "wind_direction": 11.5,
        "air_pressure": 1019,
        "humidity": 69,
        "visibility": 9.999726596675416,
        "predictability": 71
      },
      {
        "id": 4814995206438912,
        "weather_state_name": "Showers",
        "weather_state_abbr": "s",
        "wind_direction_compass": "NW",
        "created": "2020-04-24T20:17:01.622028Z",
        "applicable_date": "2020-04-27",
        "min_temp": 17.17,
        "max_temp": 20.255,
        "the_temp": 18.29,
        "wind_speed": 3.4471556112304143,
        "wind_direction": 314.5,
        "air_pressure": 1019,
        "humidity": 78,
        "visibility": 9.237304143800207,
        "predictability": 73
      },
      {
        "id": 6304339071074304,
        "weather_state_name": "Heavy Cloud",
        "weather_state_abbr": "hc",
        "wind_direction_compass": "NNE",
        "created": "2020-04-24T20:17:04.547080Z",
        "applicable_date": "2020-04-28",
        "min_temp": 17.22,
        "max_temp": 19.665,
        "the_temp": 17.83,
        "wind_speed": 5.8506577586892545,
        "wind_direction": 11.5,
        "air_pressure": 1022,
        "humidity": 71,
        "visibility": 9.999726596675416,
        "predictability": 71
      },
      {
        "id": 5335822402322432,
        "weather_state_name": "Showers",
        "weather_state_abbr": "s",
        "wind_direction_compass": "NE",
        "created": "2020-04-24T20:17:07.576280Z",
        "applicable_date": "2020-04-29",
        "min_temp": 17.29,
        "max_temp": 19.88,
        "the_temp": 17.92,
        "wind_speed": 7.2473655849836955,
        "wind_direction": 38.5,
        "air_pressure": 1024,
        "humidity": 75,
        "visibility": 9.999726596675416,
        "predictability": 73
      },
      {
        "id": 4886438699073536,
        "weather_state_name": "Light Cloud",
        "weather_state_abbr": "lc",
        "wind_direction_compass": "N",
        "created": "2020-04-24T20:17:10.759853Z",
        "applicable_date": "2020-04-30",
        "min_temp": 17.310000000000002,
        "max_temp": 20.075000000000003,
        "the_temp": 17.5,
        "wind_speed": 6.259048755269228,
        "wind_direction": 1.9999999999999918,
        "air_pressure": 1023,
        "humidity": 78,
        "visibility": 9.999726596675416,
        "predictability": 70
      }
    ],
    "entity": "Forecast",
    "_id": "5ea36cf17cb3746559f1dcc2",
    "cityId": 773692,
    "cityName": "Santa Cruz de Tenerife",
    "latitude": "28.46163",
    "longitude": "-16.267059",
    "parent": {
      "title": "Spain",
      "location_type": "Country",
      "woeid": 23424950,
      "latt_long": "39.894890,-2.988310"
    },
    "sunRise": "2020-04-25T08:29:28.419158+02:00",
    "sunSet": "2020-04-25T21:36:50.191315+02:00",
    "svgLink": "https://www.metaweather.com/static/img/weather/",
    "timezone": "Europe/Madrid",
    "created": 1587768561644,
    "updated": 1587768561644,
    "__v": 0
  }
}
```

You will get an error if you provide an invalid location identifier:

```json
// http://localhost:5522/api/data/location?id=123

{
  "name": "MoleculerClientError",
  "message": "INVALID_LOCATION_ID",
  "code": 400
}
```
