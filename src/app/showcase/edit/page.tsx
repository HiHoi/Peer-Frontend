'use client'

import { Stack, Typography } from '@mui/material'
import React from 'react'
import ShowcaseEditor from '../panel/ShowcaseEditor'
import { IShowcaseData } from '@/types/IShowcaseEdit'
import useAxiosWithAuth from '@/api/config'
import useSWR from 'swr'
import CuCircularProgress from '@/components/CuCircularProgress'
import { useSearchParams } from 'next/navigation'

const ShowCaseEditPage = () => {
  const params = useSearchParams()
  const showcaseId = params.get('showcaseId')
  const axiosWithAuth = useAxiosWithAuth()
  const { data, isLoading, error } = useSWR<IShowcaseData>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/showcase/${showcaseId}`,
    // defaultGetFetcher,
    (url: string) => axiosWithAuth.get(url).then((res) => res.data),
    { shouldRetryOnError: false },
  )

  if (!data?.author) {
    return <Typography color={'error'}>잘못된 접근입니다.</Typography>
  }
  if (isLoading) return <CuCircularProgress color={'secondary'} />
  if (error)
    return <Typography color={'error'}>에러가 발생했습니다.</Typography>

  return (
    <Stack direction={'column'} sx={{ overflow: 'auto' }}>
      {data && (
        <ShowcaseEditor
          data={data}
          showcaseId={Number(showcaseId)}
          requestMethodType={'put'}
          router={null}
        />
      )}
    </Stack>
  )
}

export default ShowCaseEditPage
