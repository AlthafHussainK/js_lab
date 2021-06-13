const fs = require('fs')
const path = require('path')

//Create a folder
// fs.mkdir(path.join(__dirname, '/new_folder'), {}, err => {
//   if (err) throw err
//   console.log('Folder created...')
// })

// Create and write to file
fs.writeFile(path.join(__dirname, '/new_folder', 'hello.txt'),
  'Hello Node!',
  err => {
    if (err) throw err
    console.log('File written to...')
  }
)