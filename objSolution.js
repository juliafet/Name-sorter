const fs = require('fs')

// Function for testing

function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log('Success')
      } else {
        console.error(`Value is ${value} , but expectation is ${exp}`)
      }
    },
  }
}

// 1. Getting and sorting data by first name from unsorted-names-list.txt

let textFromUnsorted = []

let text = fs.readFileSync('unsorted-names-list.txt', 'utf-8')

textFromUnsorted = text.split('\n')

//Testing

expect(textFromUnsorted[0]).toBe('Janet Parsons')

// 2. Slicing first name and last name for creating arrays of array

let arr = []
let arrOfArr = []

textFromUnsorted.forEach(function (element) {
  let num = element.lastIndexOf(' ')
  let lastName = element.slice(num + 1)
  let firstName = element.slice(0, num)
  arr = [lastName, firstName]
  arrOfArr.push(arr)
})

// 3. Converting array into object and sorting object

const objArray = Object.fromEntries(arrOfArr)

const ordered = Object.fromEntries(Object.entries(objArray).sort())

//Testing

expect(Object.keys(ordered)[0] + Object.values(ordered)[0]).toBe('AlvarezMarin')

// 4. Converting object into array

const sorteredArrArr = Object.entries(ordered)

let fullName
let sortedArray = []

sorteredArrArr.forEach(function (element) {
  fullName = element[1].concat(' ', element[0])
  sortedArray.push(fullName)
})

//Testing

expect(sortedArray[0]).toBe('Marin Alvarez')

// 4. Writing data into sorted-names-list.txt

let sortedString = sortedArray.join('\n')

console.log(sortedString)

fs.writeFile('./sorted-names-list.txt', sortedString, (err) => {
  if (err) {
    console.error(err)
    return
  } else {
    return console.log('File written successfully!!!')
  }
})
