const fs = require('fs') //for reading and writing files

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

textFromUnsorted = text.split('\n').sort()

//Testing

expect(textFromUnsorted[0]).toBe('Aconis Julius Archer')

// 2. Moving first name and last name for sorting by last name

let sortedByLastname = []

textFromUnsorted.forEach(function (element) {
  let num = element.lastIndexOf(' ')
  let lastName = element.slice(num + 1)
  let firstName = element.slice(0, num)
  let fullName = lastName.concat(' ', firstName)
  sortedByLastname.push(fullName)
})

sortedByLastname.sort()

//Testing

expect(sortedByLastname[0]).toBe('Alvarez Marin')

// 3. Moving back first name and last name

let sortedArray = []

sortedByLastname.forEach(function (element) {
  num = element.indexOf(' ')
  firstName = element.slice(num + 1)
  lastName = element.slice(0, num)
  fullName = firstName.concat(' ', lastName)
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
