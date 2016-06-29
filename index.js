'use strict';

const selenium = require('selenium-standalone');

module.exports = () => {
  let server;
  return {
    start: () => {
      return Promise.resolve()
      .then(() => {
        return new Promise((resolve, reject) => {
          selenium.install((err, child) => {
            if (err) {
              return reject(err);
            } else {
              resolve();
            }
          });
        });
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          selenium.start((err, child) => {
            if (err) {
              return reject(err);
            } else {
              server = child;
              resolve();
            }
          });
        });
      });
    },
    stop: () => {
      server.kill();
    }
  };
};
