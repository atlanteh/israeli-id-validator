const {assert} = require('chai');
const isIsraeliIdValid = require('../');

describe('israeli-id-validator', () => {
    it('should pass this basic functionality test', () => {
        assert.equal(isIsraeliIdValid(123456782), true)
        assert.equal(isIsraeliIdValid(123456785), false)
        assert.equal(isIsraeliIdValid(1234567856), false)
        assert.equal(isIsraeliIdValid(12345678), false)
        assert.equal(isIsraeliIdValid("123456782"), true)
        assert.equal(isIsraeliIdValid("123456785"), false)
        assert.equal(isIsraeliIdValid("023456783"), true)
        assert.equal(isIsraeliIdValid("23456783"), true)
    })
})