// import "antd/dist/antd.css"
import {ThemeProvider} from "../context/theme"
import TopNav from "../components/TopNav"
import '../public/styles/styles.css';
import {Toaster} from 'react-hot-toast'
import {AuthProvider} from '../context/auth'
// import "antd/dist/antd.dark.css"

function MyApp({Component , pageProps }){
    return (
    <ThemeProvider>
        <AuthProvider>
        <Toaster/>
        <TopNav/>

        <Component{...pageProps} />
        </AuthProvider>
        
    </ThemeProvider>
    );
    
}
export default MyApp