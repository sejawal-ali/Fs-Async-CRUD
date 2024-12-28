// CRDU Operations in Asynchronous Way

//import fs and path
const fs = require('fs');
const path = require('path');

const fileName = 'fsAsync.txt';
const filePath = path.join(__dirname, fileName);


/* fs.writeFile(): writes data to a file. replacing the file if it already exists

// SYNTAX: fs.writeFile(filepath, data, options, callback)

//? filePath: The file path to write to
//? data: The content to write to the file
//? options: Optional. includes encoding ('utf8'), mode or flags.
//? callBack: A function with an err parameter
*/


 fs.writeFile(filePath, "This my initial data", (err) => {
        if (err) console.log(err);
        else console.log('File has been saved');
        
 })



/* fs.readFile(): Reads the content of a file asynchronously and returns the file data as a string or buffer.

// SYNTAX: fs.readFile(filePath, options, callback);

//? filePath: filePath to read from
//? options: Optional. An object or string specifying encoding ('utf-8') or flag ('r' for reading)
//? callBack: A function with parameters (err, data)
*/

fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) console.log(err);
        else console.log(data);
        
})



/* fs.appendFile(): Appends data to a file. if a file does not exist, it is created.
//SYNTAX: fs.appendFile(filePath, options, callback);
*/


fs.appendFile(filePath, '\nThis is my updated data', 'utf-8', (err) => {
    if (err) console.log(err);
    else console.log('File has been updated');
    
} )



/* Delete File (fs.unlink()) Delete a file Asynchronously.
//SYNTAX: fs.unlink(filePath, callBack);
*/


// fs.unlink(filePath, (err) => {
 //   if (err) console.log(err);
  //  else console.log('File has been deleted');
    
// })