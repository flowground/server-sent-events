/**
 * flowground :- Telekom iPaaS / server-sent-events-connector
 * Copyright © 2020, Deutsche Telekom AG
 * contact: https://flowground.net/en/support-and-contact
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the top-level directory.
 */
const getEventsStreamClient = require('../services/getEventsStreamClient');
const processWrapper = require('../services/process-wrapper');

let run = 0;
let client;

/**
 * Init function
 * @returns {Promise}
 */
exports.init = function() {
    console.log('---INIT');
    return Promise.resolve();
};

/**
 * Startup function
 * @returns {Promise}
 */
exports.startup = function() {
    console.log('---STARTUP');
    return Promise.resolve();
};

exports.process = processWrapper(processAction);

/**
 * Emit events from event streaming connection
 *
 * @param {object} cfg
 * */
async function processAction(msg, cfg, snp) {
    run++;
    console.log('---RUN', run);
    if(run > 1) {
        return;
    }

    client = await getEventsStreamClient(cfg);

    client.onmessage = event => {
        this.emitData(event);
    };

    client.onerror = err => {
        console.error('---ERROR', err);
        this.emitError(err);
    };
}

exports.shutdown = function() {
    return client.close();
};