import {move, insert} from './index'

test('testing the move function', () => {
  expect(move(['a', 'b', 'c', 'd'], 1, 2)).toEqual(['a', 'c', 'b', 'd'])
  expect(move(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b'])
  expect(move(['a', 'b', 'c'], 2, 2)).toEqual(['a', 'b', 'c'])
  expect(move([['a', 'b'], 'c', [1, 2]], 1, 2)).toEqual([['a', 'b'], [1, 2], 'c'])
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