'use client'
import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Stack, Typography } from '@mui/material'
import CommentList from './panel/CommentList'

interface NoticeContentContainerProps {
  children: ReactNode
  isMine: boolean | null | undefined
  params: { id: string; postId: string }
}

const NoticeContentContainer = ({
  children,
  isMine,
  params,
}: NoticeContentContainerProps) => {
  const router = useRouter()
  const { id, postId } = params
  return (
    <Stack spacing={2} width={'100%'}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant="body2">공지사항</Typography>
        {isMine ? (
          <Button
            onClick={() => router.push(`/teams/${id}/notice-edit/${postId}`)}
            variant="text"
          >
            수정
          </Button>
        ) : null}
      </Stack>
      {children}
    </Stack>
  )
}

const TeamNoticeView = ({
  params,
}: {
  params: { id: string; postId: string }
}) => {
  const { postId } = params
  // TODO 🐧 : postId로 공지사항 정보 받아오기
  const dummy = {
    data: {
      title: '공지사항 제목이 들어오는 자리입니다.',
      description:
        '팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요. 팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요. 팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요. 팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요. 팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요. 팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.팀이 진행하고자 하는 스터디 혹은 프로젝트에 대해 설명해 주세요.',
      tag: ['중요 공지'], // TODO 🐧 : 필요한건지 확인해보기
      isMine: true,
    },
    loading: false,
    error: null,
  }
  const { data, loading, error } = dummy

  const handleDelete = () => {
    // TODO 🐧 : id를 이용해서 글 삭제 기능 구현 가능
    alert('Delete notice #' + postId)
  }

  if (error || !data)
    return (
      <NoticeContentContainer isMine={data.isMine} params={params}>
        <Typography>문제가 발생했습니다.</Typography>
      </NoticeContentContainer>
    )
  return (
    <Stack>
      <NoticeContentContainer isMine={data.isMine} params={params}>
        {loading ? (
          <Typography>로딩중...</Typography>
        ) : (
          <>
            <Stack spacing={1}>
              <Typography>제목</Typography>
              <Typography>{data.title}</Typography>
            </Stack>
            <Stack spacing={1}>
              {/* TODO 🐧 : 에디터 내장 뷰어 사용하는건지? */}
              <Typography>설명</Typography>
              <Typography>{data.description}</Typography>
            </Stack>
            <Stack alignItems={'flex-end'}>
              {data.isMine ? (
                <Button variant={'text'} color="warning" onClick={handleDelete}>
                  삭제
                </Button>
              ) : null}
            </Stack>
            {/* <Stack spacing={1}>
              TODO 🐧 : 와이어프레임이 없음. 기능명세 확인하고 와이어프레임에 추가 요청하기
              <Typography>태그</Typography>
              <Typography>{data.tag}</Typography>
            </Stack> */}
          </>
        )}
      </NoticeContentContainer>
      <CommentList postId={parseInt(postId)} />
    </Stack>
  )
}

export default TeamNoticeView
