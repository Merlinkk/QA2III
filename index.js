const fs = require('fs')
const path = require('path')

const readFromFile = (filePath) =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const file1path = path.join(__dirname, 'textfile.txt')
const file2path = path.join(__dirname, 'textfile2.txt')

Promise.all([readFromFile(file1path), readFromFile(file2path)])
    .then(contents => {
        const displayValue = contents.join(' ')
        console.log(contents, displayValue)
    })