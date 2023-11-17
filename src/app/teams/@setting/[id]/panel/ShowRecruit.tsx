import { Box, Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

interface IShowRecruit {
  name: string
  teamId: string
}

const ShowRecruit = ({ name, teamId }: IShowRecruit) => {
  const router = useRouter()
  return (
    <>
      <Box sx={{ border: '1px solid', borderRadius: 2, p: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent={'space-between'}
        >
          <Typography fontWeight="bold">모집글</Typography>
          <Button
            variant="contained"
            onClick={() => router.push(`/recruit/${teamId}`)}
          >
            모집 글 보기
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>{name}</Typography>
        </Stack>
      </Box>
    </>
  )
}

export default ShowRecruit
