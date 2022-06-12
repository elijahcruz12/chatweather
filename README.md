# Chatweather

Your favorite chat command for weather.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/elijahcruz12/chatweather)
[![Netlify Status](https://api.netlify.com/api/v1/badges/48415417-97ac-4520-9752-6773f940b46a/deploy-status)](https://app.netlify.com/sites/weatherchat/deploys)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](
https://opensource.org/licenses/MIT)

## Usage

If you wish to host chatweather on your own, you can do so on netlify, vercel, or anywhere else.
 I am using netlify so I can have a free domain for now to host it.

If you don't want to host it, I am hosting it [here](https://weatherchat.netlify.app/). The name is switched because someone took chatweather on netlify.

The homepage has full usage, including if it works in your country. I'm working on setting it up myself with more countries soon.

### Selfhosting

To run Chatweather on your own, you'll need NPM and Yarn installed.

Yarn is used to install dependencies, and to build the app using `yarn build`.

You will also need an API key for OpenWeatherMap and TheZipCodes.

You can get an API key for OpenWeatherMap [here](https://openweathermap.org/api).

You can get an API key for TheZipCodes [here](https://thezipcodes.com/api/register).

You'll need to make an .env.local file in the root of the project. From there, you add the API keys to the .env.local file. You'll also want to add the HOST variable (Without a trailing slash "/") to the .env.local file.

    ZIP_CODES_API_KEY=<your api key>
    OPENWEATHER_API_KEY=<your api key>
    HOST=http://example.com

TheZipCodes API key is used to get the longitude and latitude for you. This is used to get the weather from OpenWeatherMap.

### Non Selfhosting

If you don't want to host it, or you are hosting it and need to know how to use it, you can find the full usage [here](https://weatherchat.netlify.app/).

## Contributing

If you want to contribute, you can find the [GitHub repository](https://github.com/elijahcruz12/chatweather).

The project is a nextJS project, built also using Axios.

## License

I am using the MIT license. You can find the full license [here](https://github.com/elijahcruz12/chatweather/blob/main/license.md) (MIT).