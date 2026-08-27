'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStudyFlow } from '../components/studyflow-provider'

export default function HomePage() {
  const router = useRouter()
  const { isReady, userName } = useStudyFlow()

  useEffect(() => {
    if (isReady) router.replace(userName ? '/dashboard' : '/login')
  }, [isReady, router, userName])

  return null
}
