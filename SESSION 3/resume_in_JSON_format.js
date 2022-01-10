let resume = {
    Email : "ragavinrap@gmail.com",
    Mobile : 9444249040,
    Address : "No:16A, Govindhawamy Street, Jolarpettai - 635851",
    //OBJECTIVE
    Objective :  "A position as an active employee, involving responsibility and working with others as a team member to achieve advancement and growth for the company",
    //QUALIFICATION
    School : "Don Bosco TPT",
    College : "BE Marine Engineering",
    Strength : ["Never Give Up Spirit"," Self Confidence"," Flexibility and Adaptability"," Teamwork"],
    //BIO DATA
    Age : 24,
    Sex : "Male",
    Date_of_birth : "01.10.1996",
    Father_Name : "Panchatsharam P",
    Nationality : "Indian",
    Languages_known : "Tamil and English",
    //DECLARATION
    Declaration : "I hereby declare that all information given above is true to the best of my knowledge." 
}
for(let resume_details in resume){
     console.log(`${resume_details} => ${resume[resume_details]}`)
}