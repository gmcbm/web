import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({children, page}) {
    return (
        <div>
            <Header/>
            <Navigation page={page}/>
            {children}
            <Footer/>
        </div>
    )
}