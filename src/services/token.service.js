// const jwt = require('jsonwebtoken');
// const moment = require('moment');
// const config = require('../config/config');
// const { Token } = require('../models');
// const { tokenTypes } = require('../config/tokens');

// /**
//  * Generate token
//  * @param {ObjectId} userId
//  * @param {Moment} expires
//  * @param {string} type
//  * @param {string} [secret]
//  * @returns {string}
//  */
// const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
//     const payload = {
//         sub: userId,
//         iat: moment().unix(),
//         exp: expires.unix(),
//         type,
//     };
//     return jwt.sign(payload, secret);
// };

// /**
//  * Save a token
//  * @param {string} token
//  * @param {ObjectId} userId
//  * @param {Moment} expires
//  * @param {string} type
//  * @param {boolean} [blacklisted]
//  * @returns {Promise<Token>}
//  */
// const saveToken = async (token, userId, expires, type, blacklisted = false) => {
//     const tokenDoc = await Token.create({
//         token,
//         user: userId,
//         expires: expires.toDate(),
//         type,
//         blacklisted,
//     });
//     return tokenDoc;
// };

// /**
//  * Generate auth tokens
//  * @param {User} user
//  * @returns {Promise<Object>}
//  */
// const generateAuthTokens = async (user) => {
//     const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
//     const accessToken = generateToken(user.id, accessTokenExpires, tokenTypes.ACCESS);


//     return {
//         access: {
//             token: accessToken,
//             expires: accessTokenExpires.toDate(),
//         }
//     };
// };


// module.exports = {
//     generateToken,
//     saveToken,
//     generateAuthTokens
// };
