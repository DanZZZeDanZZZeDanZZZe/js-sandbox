import {swap, insert, clamp} from './index'

test('testing the clamp function', () => {
  expect(clamp(10, 2, 4)).toBe(4)
  expect(clamp(-10, 2, 4)).toBe(2)
  expect(clamp(3, 2, 4)).toBe(3)
  expect(clamp(2, 2, 4)).toBe(2)
  expect(clamp(4, 2, 4)).toBe(4)
  expect(() => clamp(-10, 4, 2)).toThrowError('Invalid range specified')
})

test('testing the swap function', () => {
  expect(swap(['a', 'b', 'c', 'd'], 1, 2)).toEqual(['a', 'c', 'b', 'd'])
  expect(swap(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b'])
  expect(swap(['a', 'b', 'c'], 2, 2)).toEqual(['a', 'b', 'c'])
  expect(swap([['a', 'b'], 'c', [1, 2]], 1, 2)).toEqual([['a', 'b'], [1, 2], 'c'])
})

test('testing the insert function', () => {
  expect(insert([1, 7, 8], 3, 2)).toEqual([1, 7, 3, 8])
  expect(insert([1, 7, 8], 3, 3)).toEqual([1, 7, 8, 3])
  expect(insert([1, 7, 8], 3)).toEqual([1, 7, 8, 3])
  expect(insert([1, 7, 8], 3, 0)).toEqual([3, 1, 7, 8])
  expect(insert([1, 7, 8], 3, -3)).toEqual([1, 3, 7, 8])
  expect(insert([1, 7, 8], 3, -1)).toEqual([1, 7, 8, 3])
  expect(insert([1, 7, 8], 3, -4)).toEqual([3, 1, 7, 8])
  expect(() => { 
    insert([1, 7, 8], 3, 4)
  }).toThrowError('Index is in invalid range')
  expect(() => { 
    insert([1, 7, 8], 3, -5)
  }).toThrowError('Index is in invalid range')
  
})