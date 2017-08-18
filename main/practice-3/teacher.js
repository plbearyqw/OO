'use strict';
const Person = require('./person');

module.exports = class Teacher extends Person{
          constructor(name, age, clazzes){
                    super();
                    this.name = name;
                    this.age = age;
                    this.clazzes = clazzes;
                    this.joinCls(clazzes);
          }
          
          introduce(){
                    let cls = this.clazzes.map(item =>{
                              return item.clazz;
                    });
                    let clastr = cls.join(",");
                    if(cls.toString() !== [].toString()){
                              return super.introduce() 
                              + " I am a Teacher. I teach Class "
                              + clastr + ".";
                    }
                    else{
                              return super.introduce()
                              + " I am a Teacher. I teach No Class.";
                    }
          }
          
          isTeaching(student){
                    let stuCls = student.clazz;
                    if(this.clazzes.includes(stuCls)
                              && student.isallowedtojoincls()){
                              return true;
                    }
                    else{
                              return false;
                    }
          }
          
          notifyStudentAppended(str){          
                    return "I am " + this.name + ". I know " + str + ".";
          }
          
          notifyLeaderAssigned(str){
                    return "I am " + this.name + ". I know " + str + ".";
          }
          
          joinCls(clazzes){
                    for(let clazz of clazzes){
                              clazz.teacher = this;
                    } 
          }
}