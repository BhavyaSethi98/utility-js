const reduce = require('./reduce');

describe('reduce', () => {

	it('reduce([],(x,y)=>x+y) should be undefined', () => {
		expect(reduce([], (x,y)=>x+y)).toBeUndefined();
	});

	it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
		expect(reduce([], (x,y)=>x+y,10)).toEqual(10);
	});

	it('Testing x+y reducer for a non-empty array', () => {
		expect(reduce(['a','b','c'], (x,y)=>x+y)).toMatch(/abc/);
	});

	it('Testing x+y,z filter for a non-empty array', () => {
		expect(reduce(['a','b','c'], (x,y)=>x+y,'z')).toMatch(/zabc/);
	});

})