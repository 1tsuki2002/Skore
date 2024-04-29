import {Routes, Route} from 'react-router-dom'
import Primary_Login from './pages/Input/Primary_Login'

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Primary_Login/>}/>
        </Routes>
    )
}

export default MainRoutes 