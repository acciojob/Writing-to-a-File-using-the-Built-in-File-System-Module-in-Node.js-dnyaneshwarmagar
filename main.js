const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"
fs.writeFile('output.txt', "Hello, World!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
