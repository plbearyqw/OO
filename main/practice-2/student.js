const Person = require('./person');

module.exports = class Student extends Person{
          constructor(name, age, clazz){
                    super();
                    this.name = name;
                    this.age = age;
                    this.clazz = clazz;
          }
          
          introduce(){
                    let led = this.leader;
                    let introduce = super.introduce();
                    if(led){
                              return introduce
                                        +  " I am a Student. I am Leader of Class " 
                                        + this.clazz.clazz + ".";
                    }
                    else{
                              return introduce 
                                        +  " I am a Student. I am at Class " 
                                        + this.clazz.clazz + ".";
                    }
                    
          }
}