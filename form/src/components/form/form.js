// import React from "react";
// import { useState } from "react";
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import "../form/form.css";

// const Form = () => {
//     const [formData, setFormData] = useState({
//         "name": null,
//         "age": null,
//         "dob": null,
//         "gender": null,
//         "vaccinated": null
//     })
//     console.log(formData)

//     // const submitForm = (formData) => {
//     //     await axios.POST('url', formData).then((response) => {
//     //         console.log('success')
//     //     }).catch(() => {
//     //         console.log('error')
//     //     })
//     // }

//     return (
//         <div className="form-container">
//             <div className="form-section">
//                 <div className="name-section">
//                     <span>Name</span>
//                     <span>
//                         <input type="string" placeholder="Enter your name" className="name" onChange={(e) => setFormData({...formData,"name": e.target.value})}></input>
//                     </span>
//                 </div>
//                 <div className="age-section">
//                     <span>Age</span>
//                     <span>
//                         <input type="number" placeholder="Enter your age" className="age" onChange={(e) => setFormData({...formData, "age": e.target.value})}></input>
//                     </span>
//                 </div>
//                 <div className="dob-section">
//                     <span>Date of Birth</span>
//                     <span>
//                         <input type="date" placeholder="Enter your daate of birth" className="dob" onChange={(e) => setFormData({...formData, "dob": e.target.value})}></input>
//                     </span>
//                 </div>
//                 <div className="gender-section">
//                     <span>Gender</span>
//                     <span>
//                         <select onChange={(e) => setFormData({...formData, "gender" : e.target.value})}>
//                             <option>Select</option>
//                             <option>Male</option>
//                             <option>Female</option>
//                         </select>
//                     </span>    
//                 </div>
//                 <div className="vaccin-section">
//                     <span>Are you vaccinated ?</span>
//                     <span>
//                         <input type="checkbox" onChange={(e) => setFormData({...formData, "vaccinated" : e.target.value})}></input>
//                     </span>
//                 </div>
//                 <Button className="submit-button" type="submit" >Submit</Button>
//             </div>
//         </div>
//     )
// }

// export default Form;



let data = [
    {
        "name": "Anu",
        "age": 12,
        "skills": ["react", "angular"]
    },
    {
        "name": "Anu",
        "age": 12,
        "skills": ["html", "angular"]
    },
    {
        "name": "Anu",
        "age": 12,
        "skills": ["react", "java", "nodejs"]
    },
]

let skillsArr = [];
const newArr = [];
const filteredArr = [];

const getSkills = (skill) => {

    for (let i=0; i<=skillsArr.length+1; i++) {
        console.log(skill)
        console.log(skillsArr[i+1], '============')
        console.log('--------------------------')
        if (skill == skillsArr[i+1]) {
            console.log(skill)
            console.log(skillsArr[i+1], '*********')
            console.log('***************')
            // skillsArr.splice(skillsArr[i+1])
            console.log(skillsArr)
            break;
        }
    }
    return skill != skill
}

data.map((studentData) => {
    (studentData.skills).map((skill) => {
        
        skillsArr.push(skill)

    })
    
})



const a = skillsArr.filter(getSkills)
console.log(skillsArr)

// for(let i=0; i<skillsArr.length; i++) {
//     for(let j=0;j<skillsArr.length; j++) {
//         if(skillsArr[i] == skillsArr[j+1]) {
//             skillsArr.splice(skillsArr[j+1])
//         }
//     }
// }

// console.log(skillsArr)
// console.log(newArr)
