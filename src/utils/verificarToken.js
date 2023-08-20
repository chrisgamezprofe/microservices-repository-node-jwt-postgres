const jwt = require('jsonwebtoken');

const verificarToken = ((req, res, next) => {
    const header = req.headers['authorization'];
    if (header) {
        // obtener el token del request
        //Bearer dsgfgdfgdgdg
        req.token = header.split(" ")[1];
        jwt.verify(req.token, process.env.TOKEN_SECRET_KEY, (error, data) => {
            if (error) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
});

module.exports = verificarToken;