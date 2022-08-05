import { useState , useEffect, useContext} from "react";
import AdminLayout from "../../../components/layout/adminLayout";
import { AuthContext } from "../../../context/auth";
import {Row , Col , Button , Input , Checkbox , Select , Avatar} from 'antd';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from "next/router";
import {MediaContext} from "../../../context/media";
import Media from '../../../components/media';

const UpdateUser = () =>  {

    console.log("Enter Function")
    const [auth, setAuth] = useContext(AuthContext);
    const [media, setMedia] = useContext(MediaContext);
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [ Website , setWebsite] = useState('');
    const [password , setPassword] = useState('');
    const [ role , setRole ] = useState()
    const [image ,setImage] = useState({});
    const [id ,setId] = useState('');
    const [loading , setLoading] = useState(false);
    // const [checked , setChecked] = useState('')
    const router = useRouter();

    useEffect(() => {
        const currentuser = async () => {
            try{
                const { data } = await axios.get(`/user/${router.query.id}`);
                setId(data._id);
                setName(data.name);
                setEmail(data.email);
                setWebsite(data.website);
                setRole(data.role);
                setImage(data.image);
            }
            catch(err){ console.log(err);}
        }
        if(auth?.token) {
        currentuser();
        }
        },[auth] );


// function to request a new user in backend

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            
            const { data } = await axios.put(`/update-user-by-admin`, {
                id,
                name,
                email,
                Website,
                password,
                role,
                // make sure to use .populate('image') in controller currentUser response
                image: media?.selected?._id
                  ? media.selected._id
                  : image?._id
                  ? image._id
                  : undefined,
              });

              if(data?.error){
                toast.error(data.error)
              }
              else{
                setAuth({...auth, user: data})
                let fromLocalStorage = JSON.parse(localStorage.getItem("auth"))
                fromLocalStorage.user = data 
                localStorage.setItem("auth", JSON.stringify(fromLocalStorage))
                toast.success("User updated successfully")
              }
            // console.log("updated user" ,data);
           
        }
        catch(err){ 
        console.log(err);
        toast.error("User update failed, Try again");
        setLoading(false);
    }
};
    return(

    <AdminLayout>
        <Row>
            <Col span={12} offset={6}>
                <h3 style={{marginBottom: "-10px"}}>Update user</h3>
                <br/>
                
                <br/>
                <br/>
                    <div style ={{marginBottom: 20 , textAlign: "center"}}>
                        {media.selected ? (
                            <>
                            <div style={{marginBottom: 15}}></div>
                            <Avatar src={media.selected.url} size = {100}/>
                            </>
                        ) : image ? (
                            <>
                            <div style={{marginBottom: 15}}></div>
                            <Avatar src={image.url} size = {100}/>
                            </>

                        ): ''}
                    </div>
                    <Media/>
                <Input 
                style = {{margin: '20px 0px 10px 0px'}}
                size = "large"
                placeholder="Full Name"
                value ={name}
                onChange = {((e) => setName(e.target.value))}
                />
                 <Input 
                style = {{margin: '10px 0px 10px 0px'}}
                size = "large"
                placeholder="Email"
                value ={email}
                onChange = {((e) => setEmail(e.target.value))}
                />
                  <Input 
                style = {{margin: '10px 0px 10px 0px'}}
                size = "large"
                placeholder="Website"
                value ={Website}
                onChange = {((e) => setWebsite(e.target.value))}

                />
                <Input.Password 
                style = {{margin: "20px 0px 10px 0px"}}
                size ="large"
                placeholder="Enter Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)} 
                />
                <Select 
                value= {role}
                style={{margin : "20px 0px 10px 0px" , width: "100%"}}
                onChange={(e) => setRole(e)} >

                    <Select.Option value= "Subscriber"> Subscriber </Select.Option>
                    <Select.Option value= "Author"> Author </Select.Option>
                    <Select.Option value= "Admin"> Admin </Select.Option>
                    
                </Select>
                <Button onClick={handleSubmit}
                 type ="default" 
                 style ={{margin : "20px 0px 10px 0px" }}
                 loading = {loading}
                 block> 
                    Submit</Button>
            </Col>
        </Row>
        </AdminLayout>   
    )
}

export default UpdateUser