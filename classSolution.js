const fs = require('fs')

let textFromUnsorted = []

let text = fs.readFileSync('unsorted-names-list.txt', 'utf-8')

textFromUnsorted = text.split('\n').sort()

console.info('textFromUnsorted')
console.info(textFromUnsorted)

class User {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  static compare(userA, userB) {
    if (userA.surname < userB.surname) {
      return -1
    } else if (userA.surname > userB.surname) {
      return 1
    }
    return 0
  }
}

let arr = []
let arrOfArr = []

textFromUnsorted.forEach(function (element) {
  let num = element.lastIndexOf(' ')
  let lastName = element.slice(num + 1)
  let firstName = element.slice(0, num)
  arr = [firstName, lastName]
  arrOfArr.push(arr)
})

let customers = []
for (let i = 0; i < arrOfArr.length; i++) {
  customers[i] = new User(arrOfArr[i][0], arrOfArr[i][1])
}

customers.sort(User.compare)

let result = customers.map((a) => a.name + ' ' + a.surname)

let sortedString = result.join('\n')

fs.writeFile('./sorted-names-list.txt', sortedString, (err) => {
  if (err) {
    console.error(err)
    return
  } else {
    return console.log('File written successfully!!!')
  }
})
