import {useState} from 'react';
import {TabPage} from './src/components/TabPage/TabPage';
import LoginPage from './src/components/LoginPage/LoginPage';

export default function App() {

    const [login, setLogin] = useState('')

    if (login==='Hello'){
        return <TabPage/>
    }

    return (
        <LoginPage setLogin={setLogin}/>
    )
}
