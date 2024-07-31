"use client"

import Button from '@/components/ui/Button'
import { signOut } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return <div>
    <Analytics />
    <Button onClick={() => signOut()}>Sign out</Button>
  </div>
}
