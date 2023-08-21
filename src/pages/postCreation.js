import {Container} from '@mui/system'
import {FormControl,InputLabel,TextField,Input,Button} from '@mui/material'
import {alovaInstance} from '../common/alova';
import {useState} from 'react';
import {axiosRequestAdapter} from '@alova/adapter-axios'

 function PostCreation() {

	const [postData, setPostData] = useState({
	caption: ''
	})

	const createPost = e => {
		e.preventDefault();
		alovaInstance.Post('http://localhost:5000/posts',postData,
				{headers:{'Content-Type': 'application/json',
							'access-control-allow-origin':'*',
							'access-control-allow-headers':'*'}}).send()
	
	}

	const handleInputChange = (e => {
		setPostData({...postData, [e.target.name]: e.target.value})
	})

return(
		<Container>
			<form onSubmit={createPost}>
			<FormControl>
				<InputLabel htmlFor='caption' />
				<TextField
						name='caption'
						value={postData.caption}
						onChange={handleInputChange}
						id='caption' 
						variant='outlined' 
						placeholder='Caption'/>
				<Input type='file' disableUnderline/>
				<Button type='submit' variant='outlined'>Creatr Post </Button>
		</FormControl>
		</form>
		</Container>
)
}
export default PostCreation

