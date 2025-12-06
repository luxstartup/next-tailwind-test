import './styles/globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Tennis Matching',
  description: 'ヨーロッパ向けテニスマッチングサービス',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}
