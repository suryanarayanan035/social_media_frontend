import {Box} from '@mui/system';
import {Typography} from'@mui/material';

function Post(props) {
	
	const {caption, file_url, posted_by, likes,comments} = props;

	return (
		<Box>
			<Typography>{caption}</Typography>
			<Box display='flex' justifyContent='space-around' sx={{border: '1px solid red'}}>
				<Typography>Likes: {likes} </Typography>
				<Typography> comments: {comments} </Typography>
			</Box>
		</Box>

	)
}

export default Post
