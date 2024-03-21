
const {join,join2,funct1,funct2,arr}=require("./node1");
const kinae=require("./util.js");
console.log(`My name is ${join} and ${join2}`);
funct1();
funct2();
kinae();
console.log("The array items is ", arr);
const os=require("os")
const ll=os.userInfo();
console.log(ll);
console.log("The system uptime is ",os.uptime() ,"seconds");
const curr={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    mem:os.freemem(),
}
console.log(curr);
const path=require("path")
const kinm=path.join("/Folder/","Subfolder/","nest.txt")
const fimnt=path.basename(kinm);
console.log(fimnt);
const abs=path.resolve("__dirname","Folder","Subfolder","nest.txt")
console.log(abs);
const fs=require("fs");
// const kamke=fs.readFileSync("../Folder/nest.txt","utf8");
// console.log(kamke);
// const namke=fs.writeFileSync("../Folder/nest57.txt",`Here is my file: ${kamke}`)
// console.log(namke);

const jail=fs.readFile("../Folder/nest.txt","utf8",(err,res)=>{
   if(err){
    console.log(err);
    return;
   }
   else{
    console.log(res);
   }
   const nail=fs.writeFile("../Folder/besyt.txt",`You are a foolish person ${res}`,(err,res)=>{
    if(err){
     console.log(err);
     return;
    }
    else{
     console.log(res);
    }
})
})