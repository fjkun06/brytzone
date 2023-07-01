'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page({ params }: { params: { name: string } }) {
  const router = useRouter()
  useEffect(() => {
    router.push(params.name+'/profile')
  })
  
  return <div>Loading...</div>
}