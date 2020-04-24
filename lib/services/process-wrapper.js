const elasticio = require('elasticio-node');
const messages = elasticio.messages;

/**
 * Receives an action process function and returns a wrapper around it
 * Extra functionality:
 * - this.emitData(data)
 *
 * Usage:
 * const processWrapper = require('../services/process-wrapper.js');
 * exports.process = processWrapper(processAction);
 *
 * @param {function} processFn - the function to wrap
 * @returns {function} - the wrapper with additional functionality
 */
module.exports = function processWrapper(processFn) {
    let num_emit = 0;
    return function(msg, cfg, snp) {
        console.log('---MSG: ' + JSON.stringify(msg));
        console.log('---CFG: ' + JSON.stringify(cfg));
        console.log('---SNP: ' + JSON.stringify(snp));
        let originalEmit = this.emit;
        this.emit = (type, msg) => {
            console.log('---EMIT', new Date().toISOString(), ++num_emit, type, JSON.stringify(msg));
            return originalEmit.call(this, type, msg);
        };
        this.emitData = (data) => this.emit('data', messages.newMessageWithBody(data));
        this.emitSnap = (snp) => this.emit('snapshot', snp);
        return Promise.resolve()
            .then(() => processFn.apply(this, arguments))
            .then(() => undefined);
    };
};