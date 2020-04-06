import {
  isDate,
  isFormData,
  isPlainObject,
  isURLSearchParams,
  extend,
  deepMerge
} from '../../src/helpers/utils'

describe('helpers:utils', () => {
  describe('isXXX', () => {
    test('should validate Date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(1234)).toBeFalsy()
    })
  })
})
