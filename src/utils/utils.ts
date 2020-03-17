/**
 * returns the head of the array
 * it does not
 */
function peek<T>(array: T[]): T {
  return array[0]
}

/**
 * NOT A PURE FUNCTION!!!
 * removes the head of the array and returns it.
 * In doing so it modify the original array ( IT MUTATE THE ORIGINAL ARRAY!!! )
 */
function pop<T>(array: T[]): T | undefined {
  return array.shift()
}

export { peek, pop }
