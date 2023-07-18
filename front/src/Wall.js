import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Wall() {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/wall")
        .then((response) => {
            if(response.status === 200){
                setQuestions(response.data)
            }
        })
    }, [])

  return (
    <div>Wall</div>
  )
}

export default Wall