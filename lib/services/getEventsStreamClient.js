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