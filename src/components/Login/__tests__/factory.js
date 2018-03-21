const factory = {
	loading: false,
	errorMessage: ''
}

it('should export profiles and props', () => {
  expect(factory).not.toBeFalsy();
});

export default factory;