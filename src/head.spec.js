const head = require('./head');

describe('Returns first element', () => {

    it('head([1,2,3]) should be 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('head([]) should be null', () => {
       expect(head([])).toBeUndefined();
    });

})
