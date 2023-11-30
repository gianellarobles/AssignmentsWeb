/* B'H
 */

const userModel = require('../models/users');

module.exports = {
    parseAuthorizationToken(req, res, next) {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];
        if (!token) {
            return next()
        }
        const payload = userModel.verifyJWT(token);
        req.user = payload;
}