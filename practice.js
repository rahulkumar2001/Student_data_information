"use strict";
const fs = require("fs");
//before using prompt function we need to install prompt-sync module using npm.
const ps=require("prompt-sync");
const prompt=ps()
let api_type=prompt("you have four options\n1:get\n2:create\n3:update\n4:delete\nenter your choice => ")
if (api_type==="1"){

  readAndProcessJsonFile('studentinfo.json', (err, jsonData) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
  
    console.log('Received JSON data:', jsonData);
  });
}
else if(api_type==="2"){
  createAndProcessJsonFile()

}
else if(api_type==="3"){
  //get user input
  var class_name=prompt("enter the class name ")
  var Roll=prompt("enter the Roll no.")
  var change_data=prompt("what do you want to change\n1:name\n2:age\n3:address");
  

  //2 calling the existing function
  //invoking get function
  updateAndProcessJsonFile()





}
else if(api_type==="4"){
  var class_name=prompt("enter the class name")
  var Roll_no=prompt("enter the Roll_no")
  deleteAndProcessJsonFile()
}

// Define your function that reads a JSON file and processes its data
function readAndProcessJsonFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
}


function createAndProcessJsonFile(payload, callback) {

  let name=prompt("enter the name");
  let age=prompt("enter the age")
  let address=prompt("enter the address")
  let roll_no=prompt("enter the roll_no")
  let Class_no=prompt("enter the class_no")
  var Class;
  
  fs.readFile("studentinfo.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      try {
  
        const myObject = JSON.parse(data);
        Class=myObject
        let i;
        for (i in Class){
          if (Class_no===i){
          let b=Class[i];
          let j;
          let x=1
          for (j in b){
        
            if (x<parseInt(j)){
              x=parseInt(j)
   
              
            }
        let newentry={}
        let newobj={"name":name,"age":age,"address":address}
        newentry[(x+1)]=newobj
        let v=Object.assign(newentry,b)
      
        Class[Class_no]=v
          
        const jsonString = JSON.stringify(Class);
        fs.writeFile("studentinfo.json", jsonString, "utf8", (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Object has been written to data.json");
          }
        });
      }
      
    }
  
    }
     
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  });
  
  

}
function updateAndProcessJsonFile(){
  readAndProcessJsonFile('studentinfo.json', (err, jsonData) => {
    if (err) {
      console.error('Error:', err.message);
      return;
    }
  
    let myObject=jsonData

    for(let i in myObject){
      if (class_name===i){
        let k=myObject[i]
        for (let j in k){
          if (Roll===j){
            // let change_data=prompt("what do you want to change\n1:name\n2:age\n3:address");
            if (change_data==="1"){
              let p=k[j]
              for(let n in p){
                let name_choice=prompt("enter the name of your choice")
                
                p["name"]=name_choice
                break;
              
                
              }
            }
            else if(change_data==="2"){
              let p=k[j]
              for(let n in p){
                
                let age_choice=prompt("enter the age")
                p["age"]=age_choice
                break;
                
                
              }
            }
            else if(change_data==="3"){
              let p=k[j]
              for(let n in p){
                let address_choice=prompt("enter the address you want to change")
                
                p["address"]=address_choice
                break;
                
                
              }
            }
          }
        }
        // console.log(myObject);
        const json_String = JSON.stringify(myObject);
        fs.writeFile("studentinfo.json", json_String, "utf8", (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Object has been written to data.json");
          }
        });

        
      }
    }
    
  });
}



function deleteAndProcessJsonFile(){
  readAndProcessJsonFile('studentinfo.json', (err, jsonData) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    let myObject=jsonData;
    for (let i in myObject){
      if (i===class_name){
        let k=myObject[i]
        for (let j in k){
          if (j===Roll_no){
            delete k[j]
            break;
          }
        }
        const json_String = JSON.stringify(myObject);

        fs.writeFile("studentinfo.json", json_String, "utf8", (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Object has been written to data.json");
          }
        });
    }
    }
  
    
  });
  

}





// updateAndProcessJsonFile
// fs.readFile("studentinfo.json", "utf8", (err, data) => {

//   let myObject=JSON.parse(data);
  // for(let i in myObject){
  //   if (class_name===i){
  //     let k=myObject[i]
  //     for (let j in k){
  //       if (Roll===j){
  //         let change_data=prompt("what do you want to change\n1:name\n2:age\n3:address");
  //         if (change_data==="1"){
  //           let p=k[j]
  //           for(let n in p){
  //             let name_choice=prompt("enter the name of your choice")
              
  //             p["name"]=name_choice
  //             console.log(myObject)
              
  //           }
  //         }
  //         else if(change_data==="2"){
  //           let p=k[j]
  //           for(let n in p){
              
  //             let age_choice=prompt("enter the age")
  //             p["age"]=age_choice
              
              
  //           }
  //         }
  //         else if(change_data==="3"){
  //           let p=k[j]
  //           for(let n in p){
  //             let name_choice=prompt("enter the address you want to change")
              
  //             p["address"]=address_choice
              
              
  //           }
  //         }
  //       }
  //     }
  //     console.log(myObject);
  //     const json_String = JSON.stringify(myObject);
  //     // console.log(json_String);
  //     // console.log(typeof json_String)
  //     fs.writeFile("studentinfo.json", json_String, "utf8", (err) => {
  //         if (err) {
  //           console.error("Error writing to file:", err);
  //         } else {
  //           console.log("Object has been written to data.json");
  //         }
  //       });

  //   }
  // }















// fs.readFile("studentinfo.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//   } else {
//     try {
//       const myObject = JSON.parse(data);
//       console.log("Object from JSON file:", myObject);
//     } catch (error) {
//       console.error("Error parsing JSON:", error);
//     }
//   }
// });


//   //  let newdict={}
  //       newdict["name"]=name
  //       newdict["age"]=age
  //       newdict["address"]=address
  //       b.newdict=newdict
        // let resulted_dict=Class
        // console.log(resulted_dict)
        