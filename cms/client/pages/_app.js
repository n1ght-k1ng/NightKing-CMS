// import "antd/dist/antd.css"
import {ThemeProvider} from "../context/theme"
// import { CategoryProvider } from "../context/category";
import { PostProvider } from "../context/post";
import TopNav from "../components/TopNav"
import '../public/styles/styles.css';
import {Toaster} from 'react-hot-toast'
import { MediaProvider } from '../context/media';
import {AuthProvider} from '../context/auth'
// import "antd/dist/antd.dark.css"

function MyApp({Component , pageProps }){
    return (
    <ThemeProvider>
        <AuthProvider>
            <PostProvider>
                {/* <CategoryProvider> */}
                <MediaProvider>
        <Toaster/>
        <TopNav/>

        <Component{...pageProps} />
            </MediaProvider>
            </PostProvider>
        </AuthProvider>
        
    </ThemeProvider>
    );
    
}
export default MyApp