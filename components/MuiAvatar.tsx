import { Stack, Avatar, AvatarGroup } from '@mui/material'

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
          <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
          <Avatar src='https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg'
             alt='Christian Bale'/>
             <Avatar
        src='https://t0.gstatic.com/images?q=tbn:ANd9GcTzEMn9FI59qysZbAAnImz7GVhhx2Z2rd7xdyB5FXSnDh3YtbIa'
            alt='Henry Cavill'
             />
             </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Avatar variant='square' sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>BW</Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: 'success.light', width: 48, height: 48  }}>CK</Avatar>
        </Stack>
    </Stack>
    
  )
}

