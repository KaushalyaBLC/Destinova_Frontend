import React from 'react'
import axios from 'axios'

const NovaResult = (personalData, educationDetails, answers,ip, setResults) => {
  
    axios.post('https://destinova-backend.fly.dev/nova', {
        personalData: personalData,
        educationDetails: educationDetails,
        answers: answers,
        ip:ip
       
    }).then((response) => {
        setResults(response.data)
        console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })
}

export default NovaResult