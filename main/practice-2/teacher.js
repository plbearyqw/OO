const Person = require('./person');

module.exports = class Teacher extends Person{
          constructor(name, age, clazzes){
                    super();
                    this.name = name;
                    this.age = age;
                    this.clazzes = clazzes;
          }
          
          introduce(){
                    let introduce = super.introduce();
                    let cls = this.clazzes.map(item =>{
                              return item.clazz;
                    });
                    let clstr = cls.join(",");
                    if(cls.toString() != [].toString()){
                              return introduce 
                                        + " I am a Teacher. I teach Class " 
                                        + clstr + ".";
                    }
                    else{
                              return introduce
                                        + " I am a Teacher. I teach No Class.";
                    }

          }
}