import { Link } from 'react-router-dom';
import './Header.scss';
import { MdSearch } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";

export default function Header() {
    return (
        <header>
            <span className='logo'>
                Megaflix
            </span>

            <nav>
                <Link to={"/"}><p>Catálogo</p></Link>
                <Link to={"/"}><p>Categorias</p></Link>
                <Link to={"/"}><MdSearch className='icon' /></Link>
                <Link to={"/"}><MdPersonOutline className='icon' /></Link>
            </nav>
        </header>
    )
}