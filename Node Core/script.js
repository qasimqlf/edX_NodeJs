const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const csvfilepath = './customer-data.xls'

csv()
.fromFile(csvfilepath)
.then ((jSONObject)=>{
      
    var jsonContent = JSON.stringify(jSONObject,null,2);

    fs.writeFile(path.join(__dirname,'customer-data.json'),jsonContent, (error)=>{
    if (error) return console.error(error)
    console.log('File successfully converted to JSON. Done')
    })

})