import { useEffect, useState } from 'react'
import api from '../../services/api'

import {Container, GroupQuestion} from './styles' 
const Questions = () => {

const [question, setQuestion] = useState('')

const [questions, setQuestions] = useState([])

const handleSubimit = (event) => {
    event.preventDefault()
    console.log(question)
   
    api.post('/question', {
        pergunta: question
    })

}

useEffect(() => {
  
    api.get('/getQuestion')
    .then((response) => { setQuestions( response.data )})
    .catch((err) => {console.error('erro: ' + err)})

}, [])



  return (
    <div className="App">
      <Container>
      <h1>Cadastrar Questões</h1>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
        <button onClick={() => {
            handleSubimit(event)
        }}>Enviar</button>

        <GroupQuestion>

        <h3>Peguntas Registradas</h3>

        <ul>
        {
            questions?.map((quest) => (<li>{`${quest.id_perguntas}  ${quest.pergunta}`}</li>) )
        }
        </ul>
        </GroupQuestion>
      </Container>
    </div>
  )
}

export default Questions
