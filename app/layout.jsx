import './globals.css'
import { StudyFlowProvider } from '../components/studyflow-provider'

export const metadata = {
  title: 'StudyFlow',
  description: 'A focused study task dashboard.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StudyFlowProvider>{children}</StudyFlowProvider>
      </body>
    </html>
  )
}
