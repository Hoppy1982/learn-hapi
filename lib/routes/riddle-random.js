'use strict';

const Boom = require('@hapi/boom');

module.exports = {
    method: 'get',
    path: '/riddle-random',
    options: {
        tags: ['api'],
        handler: async (request) => {

            const { Riddles } = request.models();
            const nRiddles = await Riddles.query().resultSize();

            if (nRiddles === 0) {
                throw Boom.notFound('Looks like we don\'t have any riddles. Sorry!');
            }

            const randomOffset = Math.floor(Math.random() * nRiddles);

            const randomRiddle = await Riddles.query().offset(randomOffset).first();

            return randomRiddle;
        }
    }
};
