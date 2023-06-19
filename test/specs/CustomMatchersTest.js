describe('expect utility', () => {
	beforeAll(() => {
		jasmine.addMatchers({
			testMatcher: function testMatcher(/*matcherUtils*/) {
				return {
					compare: function compare(/*actual, expected*/) {
						return {pass: true, message: 'Just good vibes.'};
					}
				};
			}
		});
	});

	it('should provide the custom matcher', () => {
		const customMatcher = expect(1).testMatcher;
		expect(customMatcher).toBeDefined();
		expect(customMatcher).toBeInstanceOf(Function);
	});
});
