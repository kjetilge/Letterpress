module.exports = function () {
  
  this.Before(function (callback) {
    console.log("RESET...")
    this.server.call('reset').then(callback);
  });

};
