import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container, GroupAnswer } from "./styles"

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
                        setAnswer(response.data.answerData);
                        setAnswerWrongs(response.data.wrongAnswerData)
                        console.log(response.data.answerData)
                        console.log(response.data.wrongAnswerData)
                    })
                    .catch((err) => {console.error('erro: ' + err)})
                          
            }}>Buscar Questões</button>
        <GroupAnswer>
        <div className="grupo">
        <h3>Respostas Verdadeira</h3>
        {answers?.map((aws) => (<p value={aws.id_pergunta}>{aws.resposta}</p>))}
        </div>
        <div className="grupo">
        <h3>Respostas Falsas</h3>
        {answerWrongs?.map((aws) => (<p value={aws.id_pergunta}>{aws.resposta_falsa}</p>))}
        </div>
        </GroupAnswer>

        </Container>
        </div>
    )

}

export default List
