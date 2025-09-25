const fs =require("fs");


//file create holo tar vitora lakha hello world lakha takba 
fs.writeFile("hey.txt","Hello World",function(err){
  if(err) console.error(err);
   else console.log("done");
})

//aga file create hoya chilo tar songa ma to accha hu add holo
fs.appendFile("hey.txt","ma to accha hu",function(err){
    if(err)console.error(err);
    else console.log("done");
})

//file ar name ta hey.txt taka Hello.txt holo
fs.rename("hey.txt","Hello.txt",function(err){
    if(err)console.error(err);
    else console.log("done");
})

//file k copy kora copy folder ar vitors copy.txt name a save korbo
fs.copyFile("Hello.txt","./copy/copy.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})

//file k delete korbo
fs.unlink("Hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done")
})

//copy folder ta delete korbo
fs.rmdir("./copy",{recursive:true},function(err){
    if(err) console.error(err);
    else console.log("removed");
})
