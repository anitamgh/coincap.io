import Header from './header'
import Footer from './footer'
import Settings from '../../settings'

export default function MainLayout( {children} ){
    return(
        <>
        <Settings/>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}