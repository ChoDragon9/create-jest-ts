import {sum} from '../src/math'

describe('Math', () => {
  test('sum', () => {
    // Given
    const a = 10
    const b = 5

    // When
    const total = sum(a, b)

    // Then
    expect(total).toBe(15)
  })
})