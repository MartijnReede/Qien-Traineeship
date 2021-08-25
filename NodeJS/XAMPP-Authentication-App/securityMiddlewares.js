const path = require("path");

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "/html-pages/index.html"));
    }
}

function isAdmin(req, res, next){
    if (req.isAuthenticated() && req.user.admin) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "/html-pages/index.html"));
    }
}

const securityObj = {
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin
}

module.exports = securityObj;