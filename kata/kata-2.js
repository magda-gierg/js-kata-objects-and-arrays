// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
function hasItem (arr, item) {
  for (var i=0; i< arr.length; i++) {
    if(arr[i] == item) {
      return true
    }
  } return false
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex (arr, idx) {
  if (arr[idx]) {
    return arr[idx]
  } else {
    return new Error()
}
}

// replaceItemAtIndex should replace the element at `idx` with `item`
function replaceItemAtIndex (arr, idx, item) {
  arr[idx] = item
  return arr
}

// insertItemAtIndex should insert `item` at `idx` without overwriting
// any array values (the array should get longer)
function insertItemAtIndex (arr, item,  idx) {
  arr.splice(idx, 0, item)
  return arr
}

// deleteItemAtIndex should remove the element at `idx` (the array
// should get shorter).
function deleteItemAtIndex (arr, idx) {
  arr.splice(idx, 1)
  return arr
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem (arr, item) {
  return arr.filter(function(currentItem) {
    return currentItem !== item
  })
}

// keys should return an array of the object's property names (keys)
// For example, given {foo: 1, bar: 2} it would return ['foo', 'bar']
function keys (obj) {
  return Object.keys(obj)
}

// values should return an array of the object's own values
// For example, given { foo: 1, bar: 2} it would return [1, 2]
function values (obj) {
  return Object.keys(obj).map(function(prop) {
   return obj[prop]
 })
}
// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2}
function zipObject (keys, values) {
  const newObject = {}
  for (var i=0; i< keys.length; i++) {
    var prop = keys[i]
    newObject[prop] = values[i]
  } return newObject
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given { foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject(obj) {
  const arr = []
 for (let prop in obj) {
   const child = [prop, obj[prop]]
   arr.push(child)
 }
 return arr
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [ { a: 1 }, { b: 2, c: 3 } ] and { b: 2 }
// it will return:
//   { b: 2, c: 3 }
function findOneByProperty (arr, search) {
  let found = null
  const prop = Object.keys(search)[0]
  arr.forEach(function (item) {
    const itemProp = Object.keys(item)[0]
    if (itemProp === prop && item[prop] === search[prop]) {
      found = item
    }
  })
  return found
}


// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll (arr, search) {
  const found = []
   const prop = Object.keys(search)[0]
   arr.forEach(function (item) {
     const hasKey = Object.keys(item).includes(prop)
     if (hasKey && item[prop] === search[prop]) {
       found.push(item)
     }
   })
   return found
 }




 

module.exports = {
  hasItem : hasItem,
  getItemAtIndex : getItemAtIndex,
  replaceItemAtIndex: replaceItemAtIndex,
  insertItemAtIndex: insertItemAtIndex,
  deleteItemAtIndex: deleteItemAtIndex,
  deleteItem: deleteItem,
  keys: keys,
  values: values,
  zipObject: zipObject,
  unzipObject: unzipObject,
  findOneByProperty: findOneByProperty,
  findAll: findAll
}
