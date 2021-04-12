'use strict';

const Boom = require('@hapi/boom');
const Data = require('../data');

module.exports = {
    method: 'get',
    path: '/riddle-answer/{slug}',
    options: {
        tags: ['api'],
        handler: (request) => {

            const { slug } = request.params;
            const riddle = Data.getRiddle(slug);

            if (!riddle) {
                throw Boom.notFound('Sorry, that riddle doesn\'t (yet)');
            }

            return riddle.answer;
        }
    }
};
