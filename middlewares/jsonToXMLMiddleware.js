const xml = require('xml');

module.exports = (req, res, next) => {
    res.hooks.on('send', (args) => {
        console.log(args)
        args[0] = xml(args[0]);
    });

    res.set('Content-Type', 'text/xml');
    next();
}