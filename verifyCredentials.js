const getSSEClient = require('./lib/services/getEventsStreamClient');

module.exports = verify;

function verify(credentials) {
    return getSSEClient(credentials).catch(err => {
        console.error('Failed to verify credentials:', err);
        throw err;
    });
}