const filter = require('./filter');

describe('Implements filter function ', () => {

	it('Testing filter([], x => true) should give []', () => {
		expect(filter([], x=>true)).toEqual([]);
	});

	it('Testing filter([1,2,3],x => true) should give [1,2,3]', () => {
		expect(filter([1,2,3], x=>true)).toEqual([1,2,3]);
	});

	it('Testing filter([1,2,3],x => false) should give []', () => {
		expect(filter([1,2,3], x=>false)).toEqual([]);
	});

	it('Testing filter([1,2,3],x => x > 1) should give [2,3]', () => {
		expect(filter([1,2,3], x=>x>1)).toEqual([2,3]);
	});

   it('Testing upperCase filter for an array', () => {
		const filterUpperCase = (value) => {
			return value === value.toUpperCase();
		}
		expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
	});

})