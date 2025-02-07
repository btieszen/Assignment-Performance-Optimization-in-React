import { useState,useCallback } from 'react';
import { Button,Form,Container,Row,Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddPost } from '../features/postSlices';


   const postPosts=async(posts)=>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/?_limit=10',{
        method:"POST",
        headers:{
        'Content-type':'application/json',
        },
        body:JSON.stringify(posts),
        });
        if(!response.ok){
            throw new Error("Failed to add new post");
            }
            return response.json();
   };

   const AddPosts = () =>{
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');

  
    const dispatch=useDispatch();

    const handleSubmit = useCallback ((e)=>{
        e.preventDefault();
        const post = {id:Date.now(),title,body};
        dispatch(AddPost(post));

        setTitle('');
        setBody('');
      
    },[title,body,dispatch]);


    console.log ("Post updated with ID:",title);

return(
    <div>
  
 

    <Container>
        <Row className = "justify-content-md-center">
            <Col md={6}>
                <h2>Add New Post</h2>
                    <Form onSubmit = {handleSubmit}>
                    <Form.Group className = 'mb-3'>  
                    <Form.Label>New Post</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter Post Title"
                     
                   
                    />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder="Post Body"
                     
                
                            />
                        </Form.Group>
                    
                        <Button variant ="primary" type="submit">
                        Add Post
                        </Button>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
     
    );
   };

export default AddPosts;