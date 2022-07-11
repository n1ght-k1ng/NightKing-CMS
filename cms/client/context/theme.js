import {useContext , useEffect , useState , createContext} from 'react'

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    //
    const[theme, setTheme] = useState("light");
    useEffect(()=>{
        if(localStorage.getItem('theme')){
            setTheme(localStorage.getItem('theme'))
        }
    },[]);

    return(
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>

    );
} 

export {ThemeContext , ThemeProvider};