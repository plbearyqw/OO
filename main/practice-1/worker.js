const Person = require('./person');

module.exports = class Worker extends Person{
          constructor(name, age){
                    super();
                    this.name = name;
                    this.age = age;
          }
          
          introduce(){
                    return super.introduce() 
                    + " I am a Worker. I have a job.";
          }
}