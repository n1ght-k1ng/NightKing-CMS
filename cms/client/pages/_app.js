// import "antd/dist/antd.css"
import {ThemeProvider} from "../context/theme"
import TopNav from "../components/TopNav"
// import "antd/dist/antd.dark.css"

function MyApp({Component , pageProps }){
    return (
    <ThemeProvider>
        <TopNav/>
        <Component{...pageProps} />
        
    </ThemeProvider>
    );
    
}
export default MyApp