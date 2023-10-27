// import useSWR from 'swr'
import { Avatar, Stack, Typography } from '@mui/material'
// import { defaultGetFetcher } from '@/api/fetchers'
import { ITeamInfo } from '@/types/ITeamInfo'
import useModal from '@/hook/useModal'
import {
  StatusIcon,
  IconInfo,
  RegionInfo,
  OperationFormInfo,
  TypeInfo,
} from './TeamInfoComponent'
import TeamMemberModal from './TeamMemberModal'

const defaultLogoPath = '/images/profile.jpeg' // TODO : 기본 로고 path 확인하기

const TeamInfoContainer = ({ id }: { id: number }) => {
  const { isOpen, closeModal, openModal } = useModal()
  // TODO : id를 이용해서 데이터 받아오기
  //   const { data, error, isLoading } = useSWR<ITeamInfo>(
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/team/main/${id}`,
  //     defaultGetFetcher,
  //   )

  // Mock Data
  const {
    data,
    error,
    isLoading,
  }: { data: ITeamInfo; error: any; isLoading: boolean } = {
    data: {
      id: id,
      name: '프로젝트 스페이스도그 🐶🚀',
      teamPicturePath: null,
      status: 'BEFORE',
      memberCount: '1/3',
      leaderName: '야채',
      type: 'STUDY',
      dueTo: 12,
      operationForm: 'ONLINE',
      region: ['서울', '인천'],
    },
    error: false,
    isLoading: false,
  }

  // render 1 : 로딩중
  if (isLoading) {
    // 로딩 컴포넌트 구체화
    return <div>로딩중</div>
  }
  // render 2 : 에러
  if (error || !data) {
    // 에러 컴포넌트 구체화
    // 에러 알림?!
    return <div>에러!</div>
  }
  // render 3 : 정상
  return (
    <>
      <Stack direction={'row'} spacing={1}>
        <Avatar
          alt="team logo"
          variant="rounded"
          sx={{ width: 89, height: 92, border: 1, borderRadius: 1.2 }}
          src={data.teamPicturePath ? data.teamPicturePath : defaultLogoPath}
        />
        <Stack>
          <Stack direction={'row'}>
            <Typography variant="h5">{data.name}</Typography>
            <StatusIcon status={data.status} />
          </Stack>
          <Stack direction={'row'}>
            <IconInfo
              type="MEMBER"
              text={data.memberCount}
              onClick={() => openModal()}
            />
            <IconInfo type="LEADER" text={data.leaderName} />
            <IconInfo type="DATE" text={data.dueTo.toString()} />
          </Stack>
          <Stack direction={'row'}>
            <TypeInfo type={data.type} />
            <OperationFormInfo operationForm={data.operationForm} />
          </Stack>
          <Stack direction={'row'}>
            {data.region.map((region, idx) => (
              <RegionInfo key={idx} region={region} />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <TeamMemberModal
        teamId={data.id}
        open={isOpen}
        handleClose={closeModal}
      />
    </>
  )

  // 모달 컴포넌트도 추가할 것.
}

export default TeamInfoContainer
