import {Container, Box} from '@mui/system'
import {Button} from '@mui/material'
import Post from '../components/post'
import { alovaInstance}  from '../common/alova';
import {useRequest} from  'alova'
import {useState,useEffect} from 'react';
function Home() {

	
	const [posts, setPosts] = useState([])
	const {loading,data,error,send,onSuccess} = useRequest(
			alovaInstance.Get('http://172.26.0.5:5000/',{})

	)

	onSuccess(async (response) => {
	console.log(response.data)
	console.log(response.data.data)
	const posts = await response.data.data;
	console.log('json data',posts)
	setPosts(posts['posts'])
	}) 
	useEffect( () =>{
			send();
	},[])

		
	const createUser = (e) => {
			console.log('function called');
			alovaInstance.Post('http://localhost:5000/create-account',{email:'test@sample.com',password:'surya035',confirm_password:'surya035'}).send()

			console.log('function ended')
	}	
		if(loading) {
			return (
					<Container maxwidth='xl' sx={{border: '1px solid black'}}>
					 Request not yet complete
					</Container>
			)
		}
	else if(!loading && !error){
		return (
			<Container maxwidth='xl' sx={{border: '1px solid black'}}>
				This is a homepage

				{posts.map(post => <Post caption={post.caption} key={post._id['$oid']}/>)}

				<Button onClick={createUser}> Sign Up </Button>			
			</Container>
		)
	}
}


export default Home
