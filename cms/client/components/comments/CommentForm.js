import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Input , Button} from 'antd'

const { TextArea} = Input;

const CommentForm = ({comment , setComment , handleSubmit , loading }) => {
    const [ auth , setAuth] = useContext(AuthContext)
    return(
        <>
        {/* <pre>{ JSON.stringify(comment, null , 4)} </pre> */}
        <TextArea
            disabled = {auth?.user === null && auth?.token === ''}
            value = { comment}
            onChange= { e => setComment(e.target.value)}
            placeholder="Write a comment..."
            
            rows = '4'
            maxLength={200}
        />
        <Button onClick={handleSubmit} disabled= {comment === ''} loading ={loading} style={{marginTop: 4}} type='primary'>
            Post
        </Button>
        </>
    )
}

export default CommentForm;