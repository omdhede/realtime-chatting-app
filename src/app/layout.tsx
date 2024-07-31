import Providers from '@/components/Providers'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
// Done after the video and optional: add page metadata
export const metadata = {
  title: 'Chat with Om Dhede',
  description: "Let's have a Conversation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
		{children}
		<Analytics />
	</Providers>
      </body>
    </html>
  )
}
