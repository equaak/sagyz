import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = (props) => {
    return(
        <main>
            <header className={props.back === 'white' ? 'white' : 'green'}>
                <div className='wrapper header'>
                    <Link to=''><p className='header-title'>Sagyz project</p></Link>
                    
                    <nav>
                        <Link to='profile'>Профиль</Link>
                        <Link to='orders'>Запросы</Link>
                        <Link to='auth'><button className='header-button'>Регистрация</button></Link>
                    </nav>
                </div>
            </header>

            <Outlet />
        </main>
    )
}

export default Layout;