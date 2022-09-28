import { useEffect, useState } from 'react'
import api from '../../services/api'

import {Container, GroupAnswer} from './styles' 
const Answer = () => {

const [answer, setAnswer] = useState('')
const [questionId, setQuestionId] = useState(1)
const [questions, setQuestions] = useState([])

const handleSubimit = (event) => {
    event.preventDefault()
    console.log(answer)
    console.log(questionId)
   
    api.post('/answer', {
        id_pergunta: questionId,
        resposta: answer
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
      <h1>Cadastrar Respostas</h1>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='digite uma resposta'/>
      <select name='perguntas' id='pergunta' onChange={(e) => setQuestionId(e.target.value)}>
        <option value={0}>Selecione uma pergunta</option>
        {questions?.map((question) => (<option value={question.id_perguntas}>{question.pergunta}</option>))}
      </select>
        <button onClick={() => {
            handleSubimit(event)
        }}>Enviar</button>

      </Container>
    </div>
  )
}

export default Answer
