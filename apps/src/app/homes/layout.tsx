// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Archivo } from 'next/font/google'
import './styles.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export default function Layout({ children }:{children:any}) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        {children}
      </body>
    </html>
  )
}