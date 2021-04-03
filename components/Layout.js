import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}