import { useState , createContext} from 'react'

const MediaContext = createContext();

const MediaProvider = (props) => {
    //
    const[Media, setMedia] = useState(   // Using the same variable name everywhere is needed
         {
            images: [],
            selected: '',
            showMediaModal: false

        }
    );
 ;

    return(
        <MediaContext.Provider value={[Media,setMedia]}>
            {props.children}
        </MediaContext.Provider>

    );
} 

export {MediaContext , MediaProvider};