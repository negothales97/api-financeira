const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const customers = await connection('customers').select('*');
        return response.json(customers);
    },
    async show(request, response) {
        return response.json([]);
    },
    async create(request, response) {
        const {
            name,
            email,
            password,
        } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");
        await connection('customers').insert({
            id,
            name,
            email,
            password,
        });
        return response.json({
            id
        });
    },
    async edit(request, response) {
        return response.json([]);
    },
    async delete(request, response) {
        return response.json([]);
    },

}