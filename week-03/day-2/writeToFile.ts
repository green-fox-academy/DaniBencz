let fs = require ('fs');

function writeTo(fileName: string, newContent: string){
  try{
    fs.readFileSync(fileName);
    fs.writeFileSync(fileName, newContent);
  } catch (error){
    return(error.message);
  }
} 
writeTo('empty.txt', 'Hello GreenFox');