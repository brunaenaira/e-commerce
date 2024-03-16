import './styles.css';
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
    const { pathname } = useLocation();
    return (
        <div>
            <Link
                to="/"
                className={pathname === '/' ? 'active' : ''}>
                Home
            </Link>
            <Link
                to="/users"
                className={pathname === '/users' ? 'active' : ''}>
                Usuários
            </Link>
        </div>
    );
}
