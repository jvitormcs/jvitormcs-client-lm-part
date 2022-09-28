import {BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import Answer from '../Answer'
import WrongAnswer from '../WrongAnswer'
import Home from '../Home'
import Questions from '../Questions'
import {NavContainer} from './styles'
import List from '../listAnwers'
const Nav = () => {

    return(
        <Router>
            <NavContainer>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/question'>Questões</Link>
                </li>
                <li>
                    <Link to='/answer'>Respostas</Link>
                </li>
                <li>
                    <Link to='/wrongAnswer'>Respostas Falsas</Link>
                </li>
                <li>
                    <Link to='/list'>Lista Repostas</Link>
                </li>
            </ul>
            </NavContainer>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/question' element={<Questions/>}/>
                <Route path='/answer' element={<Answer/>}/>
                <Route path='/wrongAnswer' element={<WrongAnswer/>}/>
                <Route path='/list' element={<List/>}/>
                <Route />
            </Routes>
        </Router>
    )

}

export default Nav