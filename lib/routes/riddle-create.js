'use strict';

const Joi = require('joi');

module.exports = {
    method: 'post',
    path: '/riddle',
    options: {
        tags: ['api'],
        validate: {
            // Check POST'd data complies with model's schema
            payload: Joi.object({
                slug: Joi.string().required(),
                question: Joi.string().required(),
                answer: Joi.string().required()
            })
        },

        handler: async (request) => {

            // We nab our Riddles model, from which we execute queries on our Riddles table
            const { Riddles } = request.models();

            // We store our payload (the prospective new Riddle object)
            const riddle = request.payload;

            // We try to add the POST'd riddle using Objection's insertAndFetch method (http://vincit.github.io/objection.js/#insertandfetch)
            // If that throws for any reason, hapi will reply with a 500 error for us, which we could customize better in the future.

            return await Riddles.query().insertAndFetch(riddle);
        }
    }
};
