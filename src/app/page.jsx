import '@/styles/home.css'
import axios from 'axios'

export default function Home() {
    axios.get('https://fakestoreapi.com/docs')
    .then(res => console.log(res))
    return (
        <div>
            <header>
                <div className="container">
                    <nav className='navbar'>
                        <ul className='top-bar'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <img src="../images/svg/image.svg" alt="images" />
                        <ul className='top-bar'>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Free Version</a></li>
                            <li><a href="">Purchase</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div className="container">

                </div>
            </main>
        </div>
    )
}