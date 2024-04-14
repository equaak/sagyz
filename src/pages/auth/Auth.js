import './Auth.css';
import logo from '../home/logo.svg';

const Auth = () => {
    return(
        <main>
            <div className='auth-block'>
                {/* <div className='wrapper'> */}
                    <div className='auth-right'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='auth-left'>
                        <p className='auth-title'>Регистрация</p>
                        <p className='auth-subtitle'>Название</p>
                        <input type='text' />
                        <p className='auth-subtitle'>Адрес</p>
                        <input type='text' />
                        <p className='auth-subtitle'>БИН</p>
                        <input type='text' />
                        <p className='auth-subtitle'>Имя</p>
                        <input type='text' />
                        <p className='auth-subtitle'>Эл.почта</p>
                        <input type='text' />
                        <p className='auth-subtitle'>Пароль</p>
                        <input type='text' />
                        <div className='policy'>
                            <p><input type='checkbox' />Я принимаю Правила пользования сервисом и Политику конфиденциальности</p>
                        </div>
                        <button className='auth-button'>Зарегистрироваться</button>
                    </div>
                {/* </div> */}
            </div>
        </main>
    )
}

export default Auth;    