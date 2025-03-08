import React from 'react'
import axios from 'axios'

const NovaResult = (personalData, educationDetails, answers,ip, setResults) => {
  
    axios.post('http://127.0.0.1:3000/nova', {
        personalData: personalData,
        educationDetails: educationDetails,
        answers: answers,
       
    }).then((response) => {
        setResults(response.data)
        console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })
}

export default NovaResult