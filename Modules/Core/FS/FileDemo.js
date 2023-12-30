const fs= require('fs');
fs.readFile("./contents/file.txt", function(err, data){
    if(err){
        console.log(err);
    }
    let readData = data.toString();
    // console.log(data.toString());

    fs.writeFile("./contents/file2.txt", readData, function(err, data){
        if(err){
            console.log(err);
        }
        console.log("Hiii",);
    })
  
})

// fs.readFile("./contents/file1.txt", function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })



