const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');


module.exports = function() {

    this.name = 'health';

    this.value = 20;
}