import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia  } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
            component='img'
            height='140'
            image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
            alt='react image'
            />
            <CardContent>
           <Typography gutterBottom variant='h5' component='div'>React </Typography>
           <Typography variant='body2'      color='text.secondary'>
           React is a JavaScript library created by Facebook
           React is a User Interface (UI) library
           React is a tool for building UI components
           </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

