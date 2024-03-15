import { useState } from "react";
import './styles.css'

export default function Menu() {
    const [activeLink, setActiveLink] = useState('Home');
    return (
        <div>
            <a className={activeLink === 'Home'?'active':''} 
            onClick={() => {
                setActiveLink('Home');
            }}>Home
            </a>
            <a className={activeLink === 'Usuários'?'active':''} 
            onClick={() => {
                setActiveLink('Users');
                }}>Usuários</a>
        </div>
    );   
}
