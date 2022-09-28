import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container } from "./styles"

const List = () => {
    const [questionId, setQuestionId] = useState(0)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswer] = useState([])
    const [answerWrongs, setAnswerWrongs] = useState([])

    useEffect(() => {

        api.get('/getQuestion').then((response) => { setQuestions( response.data )})
        .catch((err) => {console.error('erro: ' + err)})
       
    }, [])

    

    return(
        <div className="App">
        <Container>
            <h2>Lista Perguntas e Respostas</h2>

            <select name='perguntas' id='pergunta' onChange={(e) => setQuestionId(e.target.value)}>
            <option value={0}>Selecione uma pergunta</option>
            {questions?.map((question) => (<option value={question.id_perguntas}>{question.pergunta}</option>))}
            </select>
            <button onClick={(event,) => {
               
                    event.preventDefault()
                    api.get(`/getAnswer/${questionId}`).then((response) => { 
                        setAnswer(response.data);
                        setAnswerWrongs(  )
                        console.log(response.data.answerData)
                        console.log(response.data.wrongAnswerData)
                    })
                    .catch((err) => {console.error('erro: ' + err)})
                          
            }}>Buscar Questões</button>


        </Container>
        </div>
    )

}

export default List