import phoneNumberValidator from '../basic';

test('should validate phone numbers', () => {
  expect(phoneNumberValidator('8 (927) 000-00-00')).toBe('+79270000000');
  expect(phoneNumberValidator('+7 960 000 00 00')).toBe('+79600000000');
  expect(phoneNumberValidator('+86 000 000 0000')).toBe('+860000000000');
});
