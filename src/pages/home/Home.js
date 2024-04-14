import './Home.css';
import logo from './logo.svg';

const Home = () => {
    return(
        <main>
            <div className='main-block block'>
                <div className='wrapper'>
                    <div className='main-left'>
                        <p className='main-title'>Подтверди свое качество с помощью SAGYZ!</p>
                        <p className='main-subtitle'>Это платформа, использующая блокчейн для  сертификации и тщательного отслеживания поставки сельскохозяйственной продукции.</p>
                        <button className='main-button'>Начать!</button>
                    </div>
                    <img src={logo} alt=''/>
                </div>
            </div>
        </main>
    )
}

export default Home;