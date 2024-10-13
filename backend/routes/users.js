
const express = require('express'),
    schema = require('../util/Schema'),
    jwt = require('jsonwebtoken'),
    uuid = require('uuid'),
    mockdb = require('../util/MockDatabase');
const { expressjwt: expressJwt } = require('express-jwt')

const secret_keys = {
    get_users_key: 'GET_USERS_UNSAFE'
};

const router = express.Router();
const users = new mockdb(new schema({
    refid: 'string',
    password: 'string',
    permissionLevel: 'number',
    lifetimeStart: 'date',
    lifetimeEnd: 'date',
}));

const generateRandomPassword = (length=8) => Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 62) + (Math.random() < 0.5 ? 65 : 97))).join('');
const generateUniqueReferenceId = (password) => `${crypto.pbkdf2Sync(password,crypto.randomBytes(7).toString('hex'),1000,12,'sha512',(err) => err != null && console.error(err)).toString('hex')}`;

const tryJWTSign = (secret) => expressJwt({
    secret: secret,
    algorithms: ['HS256'],
    requestProperty: 'auth',
    getToken: (req) => req.headers.authorization && req.headers.authorization.split(' ')[1],
})

const assertUserPermission = (permission) => (req, res, next) => {
    const user = users.find({ token: req.auth.token });
    if (user.length === 0 || user[0].get('permissionLevel') < permission) return res.status(403).json({ error: 'Forbidden' });
    next();
}

router.get('/users', tryJWTSign(secret_keys.get_users_key), assertUserPermission(3), async (_, res) => {
    res.json(users.raw());
})

router.get('/users/get-user-info/:refid', async (req, res) => {
    const user = users.find({ refid: req.params.refid });
    if (user.length === 0) return res.status(404).json({ code: -1, message: 'User not found.' });
    res.json({ code: 0, message: `User "${req.params.refid}" is found.`, content: user[0].raw()});
})

module.exports = router;