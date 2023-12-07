import { TeamType } from '@/app/teams/types/types'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const TeamTypeCard = ({ type }: { type: TeamType }) => {
  return (
    <Box width={60} sx={{ margin: 0, backgroundColor: grey[900] }}>
      <Typography
        textAlign={'center'}
        color={type === TeamType.STUDY ? 'yellow.strong' : 'green.strong'}
        fontWeight={'bold'}
      >
        {type === TeamType.STUDY ? '스터디' : '프로젝트'}
      </Typography>
    </Box>
  )
}

export default TeamTypeCard
