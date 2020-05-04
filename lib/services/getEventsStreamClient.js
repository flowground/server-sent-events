/**
 * flowground :- Telekom iPaaS / server-sent-events-connector
 * Copyright © 2020, Deutsche Telekom AG
 * contact: https://flowground.net/en/support-and-contact
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the top-level directory.
 */
const EventSource = require('eventsource');

/**
 * Establish connection to an event streaming server
 *
 * @param {object} config
 * @param {string} config.url - url to connect
 * */
module.exports = config => new Promise((resolve, reject) => {
    let url = config.url;
    if(!url) {
        throw new Error('Please enter a url');
    }

    new URL(url); // will throw if url is invalid

    console.log('---Connecting to', url);
    let client = new EventSource(url);
    client.onopen = () => {
        console.log('---Connected');
        resolve(client);
    };

    client.onerror = err => {
        console.error('---ERROR', err);
        reject(err);
    };
});