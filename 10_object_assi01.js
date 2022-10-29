console.log("Q.1].----------Teacher Properties---------");
let teacherName={
}
console.log(teacherName);
let teacher = {
    firstName:"Suhas",
    lastName:"Jadhav",
    education:"M.Sc",
    'designation': 'Assistant Professor',
    degrees:{
        m_sc:'Maths',
        master_In:'Real Anyalysis',
        phd:'Mathematics'
  },
  certificates:{
    certificate_1:"Hacker Rank Participation",
    certificate_2:"Certificate in IFE course",
    certificate_3:"Certificate in Adv Progamming"
  },
  
}
console.table(teacher);
console.log("Q.2].----------Nested Object Degrees---------");
console.table(teacher.degrees);
console.log("Q.3].----------Nested Object Certificate---------");
console.table(teacher.certificates);
console.log("Q.4].---------- Adding New Property In Teacher Object---------");
teacher.age=42
console.table(teacher);
console.log("Q.65.---------- Modifying Properties---------");
teacher.degrees.phd="chemistry"
console.table(teacher.degrees);
console.log("Q.6].----------  Delete one certificate---------");
delete teacher.certificates.certificate_3
console.table(teacher.certificates);
console.log("Q.7].----------  Add new  one certificate in nested certificate---------");
teacher.certificates.certificate_3='leaving Certificate'
console.table(teacher.certificates);
