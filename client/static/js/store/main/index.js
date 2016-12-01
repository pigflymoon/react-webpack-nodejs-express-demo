var EventEmitter = require('events').EventEmitter;

class Store_MessageList extends EventEmitter {
    constructor() {
        this.allData = null;
    }

    getAllData(callback) {
        var self = this;
        fetch("/data/getMessage/")
            .then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        self.allData = data;
                        callback(self.allData);
                    });
                } else {
                    console.log('Looks like the response was not perfect, go status ', res.status);
                }

            }, function (e) {
                console.log('Fecth failed!', e);
            });
    }
}

module.exports = new Store_MessageList();