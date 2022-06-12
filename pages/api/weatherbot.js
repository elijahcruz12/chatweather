import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // We need the ZIP code.
        const query = req.query;
        const { zip, username } = query;

        if (!zip) {
            res.status(400).send('Missing ZIP code.');
            return;
        }

        // Get Axios
        const axios = require('axios')

        // Create an instance of Axios
        const zipInstance = axios.create({
            baseURL: 'https://thezipcodes.com/api/v1/search',
            params: {
                zipCode: zip,
                countryCode: 'US',
                apiKey: process.env.ZIP_CODES_API_KEY
            }
        });


        // Get the data
        const zipData = await zipInstance.get();
        const { data } = zipData;
        const location = data.location;
        const { latitude, longitude } = location[0];

        // Get The Weather
        const weatherInstance = axios.create({
            baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
            params: {
                lat: latitude,
                lon: longitude,
                appid: process.env.OPENWEATHER_API_KEY,
                exclude: 'minutely,hourly,daily,alerts,flags',
                units: 'imperial'
            }
        });



        // Get the data
        const weatherData = await weatherInstance.get();
        const { data: weather } = weatherData;
        const current = weather.current;
        const { temp, feels_like} = current;

        if(username) {
            res.status(200).send('It is currently ' + temp + ' degrees Fahrenheit and feels like ' + feels_like + ' degrees Fahrenheit for ' + username + '.',
            });
        }
        else {
            res.status(200).send('It is currently ' + temp + ' degrees Fahrenheit and feels like ' + feels_like + ' degrees Fahrenheit.');
        }

        // Send the data


    } else {
        // We do not take any other requests.
        res.status(405).send('Method Not Allowed')
    }
}