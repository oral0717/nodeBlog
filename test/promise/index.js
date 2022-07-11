/*
 * @Descripttion: 
 * @version:
 * @Author: Oral
 * @Date: 2022-07-11 12:54:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 13:34:40
 */
const fs = require('fs');
const path = require('path');

// callback-hell
// function getFileContent(fileName, callback) {
//   const fullFileName = path.resolve(__dirname, '', fileName)
//   fs.readFile(fullFileName, (err, data) => {
//     if (err) {
//       console.error(err);
//       return
//     }

//     callback(
//       JSON.parse(data.toString())
//     )
//   })
// }

// getFileContent('a.json', aData => {
//   console.log('a data', aData);
//   getFileContent('b.json', bData => {
//     console.log('b data', bData);
//     getFileContent('c.json', cData => {
//       console.log('c data', cData);
//     })
//   })
// })

// Promise
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, '', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err);
        return
      }

      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}

getFileContent('a.json').then((data) => {
  console.log(1111, data)
  return getFileContent(data.next)
}).then((data) => {
  console.log(222, data)
  return getFileContent(data.next)
}).then((data) => {
  console.log(333, data)
})

