describe('hello world', function() {
    // const printThis = require('../lib/helloworld')
    it('should return hello world', function() {
        let result = printThis();
        expect(result).toEqual('hello world')
    })

})