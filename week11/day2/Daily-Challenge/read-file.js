import fs  from 'fs';

const file ='./files/file-data.txt'

function displayData (file){
    fs.readFile(file , 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        console.log('File contents:', data);
      });
}

//displayData(file)

export default displayData
