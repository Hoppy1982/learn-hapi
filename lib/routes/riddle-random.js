'use strict';

const Data = require('../data');

module.exports = {
    method: 'get',
    path: '/riddle-random',
    options: {
        handler: () => {

            const randomIndex = Math.floor(Math.random() * Data.riddles.length);
            const randomRiddle = Data.riddles[randomIndex];

            return `${randomRiddle.slug} - ${randomRiddle.question}`;
        }
    }
};
