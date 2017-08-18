const Person = require('./person');

module.exports = class Student extends Person{
          constructor(name, age, clazz){
                    super();
                    this.name = name;
                    this.age = age;
                    this.clazz = clazz;
          }
          
          introduce(){
                    let introduce = super.introduce();
                    let clsName = this.clazz.clazz;
                    if(!this.isallowedtojoincls()){
                             return introduce
                              +  " I am a Student. I haven't been allowed to join Class."; 
                    }
                    else if(this.clazz.leader === this){
                              return introduce
                              +  " I am a Student. I am Leader of Class " 
                              + clsName + ".";
                    }
                    else{
                              return introduce 
                              +  " I am a Student. I am at Class " 
                              + clsName + ".";
                    }
                 }
          
          isallowedtojoincls(){
                    if(this.clazz.student.includes(this)){
                              return true;
                    }
                    else{
                              return false;
                    }
          }
}