# aic-api

A simple Express API to get _An Inspector Calls_ quotes!

I've never used JavaScript like this before so have learnt alot, I've used guides and Claude to help teach me how to build this.

This is also a semi-competionion between me and [Jacob](https://github.com/smartsparkcoding) to find who could make a AIC API faster, he won, with [this](https://github.com/SmartSparkCoding/AIC-Quotes) Flask API but we both had fun learning how to build this.

## How can you get started

Just go to [aic.freddieyershon.co.uk](https://aic.freddieyershon.co.uk)! 

Here are some scope to get started:

| Scope                    | What it does?                  |
|--------------------------|--------------------------------|
| `/quotes`                | list of quotes                 |
| `quotes/random`          | random quote                   |
| `quotes/[character name] | all quotes from that character |

## Features

- List of quotes (tagged with; character, act, theme and more), stored in `data.json`

- API endpoints to list all tags (listed above) stored in the data

- API endpoints to filter quotes by character `/quotes/[name]`

- Main page and documentation (in development)

## How to run locally

_(make sure `npm` is installed, if not [look here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))

1. `git clone https://github.com/hippogriff101/aic-api && cd aic-api`

2. `npm install`

3. `node app.js`

Head to `localhost:3000` and you should be good to go!

## Credits

`public/openapi.yaml`, made by Claude caues idk how to make one

Claude aslso helped with debugging things!