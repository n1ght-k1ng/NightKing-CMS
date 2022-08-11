import { useState } from "react";
import AdminLayout from "../../../components/layout/adminLayout";
import {Row , Col , Button , Input , Checkbox , Select ,Divider} from 'antd'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useRouter } from "next/router";
import generator from "generate-password"

const NewUSer = () =>{

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [ Website , setWebsite] = useState('')
    const [password , setPassword] = useState(generator.generate({length: 6}))
    const [ role , setRole ] = useState('')
    const [loading , setLoading] = useState(false)
    const [checked , setChecked] = useState('')


// function to request a new user in backend

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            setLoading(true)
            // console.table({name , email , Website , password , role , checked})

            const { data } = await axios.post('/create-user',{
                name , email , Website , password , role , checked
            })
            if(data.error) {
                toast.error(data.error)
                setLoading(false)
            }
            else{
                toast.success("User created successfully")
                setLoading(false)
            }


        }
        catch(err){ 
        console.log(err)
        toast.error("Signup failed, Try again")
        setLoading(false)
        
    }
}
    return(

    <AdminLayout>
        <Row>
            <Col span={12} offset={6}>
                {/* <h1>Form</h1> */}
                <Divider style={{marginBottom: "-10px"}}>Add new user</Divider>
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
                <div style ={{display: 'flex'}}> 

                <Button onClick = {() => setPassword(generator.generate({ length: 6 }))}
                type ="default"
                size="large"
                style = {{margin: "20px 0px 10px 0px"}}>
                    Generate Password
                </Button>

                <Input.Password 
                style = {{margin: "20px 0px 10px 0px"}}
                size ="large"
                placeholder="Enter Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)} 
                />
                </div>
                

                <Select 
                defaultValue= "Subscriber" 
                style={{margin : "20px 0px 10px 0px" , width: "100%"}}
                onChange={(e) => setRole(e)} >

                    <Select.Option value= "Subscriber"> Subscriber </Select.Option>
                    <Select.Option value= "Author"> Author </Select.Option>
                    <Select.Option value= "Admin"> Admin </Select.Option>

                </Select>


                <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
                    Send the new User an Email about their account

                </Checkbox>

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

export default NewUSer
