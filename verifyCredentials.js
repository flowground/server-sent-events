/**
 * flowground :- Telekom iPaaS / server-sent-events-connector
 * Copyright © 2020, Deutsche Telekom AG
 * contact: https://flowground.net/en/support-and-contact
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the top-level directory.
 */
const getSSEClient = require('./lib/services/getEventsStreamClient');

module.exports = verify;

function verify(credentials) {
    return getSSEClient(credentials).catch(err => {
        console.error('Failed to verify credentials:', err);
        throw err;
    });
}