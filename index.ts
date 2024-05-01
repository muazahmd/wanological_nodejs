import "reflect-metadata"
const os=require('os');
const express = require('express');
const app = express();

import { container, inject, injectable, singleton } from 'tsyringe';

import connectToDB from './Src/config/connection/MongoDB';
import { UserModel } from './Src/Model/index';
// j÷
connectToDB()
  .then(async () => {
    
    // let userData=await UserModel.create({
    //   firstName: "Muaz",
    //   lastName: "Ahmad",
    //   email: "muazahmd@gmail.com",
    //   password: "1234567890"
    // })
    let userData=await UserModel.findByIdAndUpdate("64b9092f3bdbd5e1f96eb9cd",{
      firstName: "Muaz Ahmad",
    })
    console.log(userData)
    // Start the Express server
    
  })

// Route for the home page
app.get('/', (req:any, res:any) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
// Connect to the MongoDB database
// @singleton()
// export class ClassA {
//   constructor() {
//     console.log('------classs A------------')


//   }

//   public printClassA():void{
//     console.log("printClassA")
//   }
// }

// @injectable()
// export class ClassB {
//   constructor(classA: ClassA) {
//     console.log('---------class b---------')

//   }
//  public printClassB():void{
//     console.log("printClassB")
//   }
// }


// @injectable()
// export class classC {
//   aclass:any;
//   bclass:any;
//   number:any
//   lastName:string;

//   constructor( @inject('lName')  lName:any ,aclass?: ClassA,bclass?: ClassB) {
//     this.aclass=aclass;
//     this.bclass=bclass;
//     this.lastName=lName;
//   }
//    print(){
//     this.aclass.printClassA();
//     this.bclass.printClassB();
//     console.log(    this.lastName      )
//   }
// }

// container.register('lName', {useValue:'hell muaz this is the parameterize value'});
// const businessLogicInstance = container.resolve(classC);

// businessLogicInstance.print()

// container.register('lName', {useValue:{"obj":1,"c":3}});
// const businessLogicInstance1 = container.resolve(classC);
// businessLogicInstance1.print()
