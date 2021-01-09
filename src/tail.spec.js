 const tail = require('./tail');

 describe('Returns everything except first element', () => {

     it('Tail of [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
     });

     it('tail([]) should be []', () => {
        expect(tail([])).toEqual([]);
     });

 })

