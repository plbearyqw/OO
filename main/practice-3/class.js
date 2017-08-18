// Write your code here
module.exports = class Class {
          constructor(clazz){
                    this.clazz = clazz;
                    this.student = [];
          }
          
          appendMember(student){
                    let stuCls = student.clazz.clazz;
                    let stuName = student.name;
                    this.student.push(student);
                    if(this.teacher){
                              this.teacher.notifyStudentAppended(stuName 
                              + " has joined Class " + stuCls);
                    }
          }
          
          assignLeader(student){
                    if(this.hasstudent(student)){
                              let stuCls = student.clazz.clazz;
                              let stuName = student.name;
                              this.leader = student;                         
                              if(this.teacher){
                                        this.teacher.notifyLeaderAssigned(stuName 
                                        + " become Leader of Class " 
                                        + stuCls);
                              }
                              return "Assign team leader successfully.";
                    }
                    else{
                              return "It is not one of us.";
                    }
          }
          
          hasstudent(student){
                    if(this.student.includes(student)){
                              return true;
                    }
                    else{
                              return false;
                    }
          }
}