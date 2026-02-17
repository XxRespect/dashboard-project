import AppSideBar from "@/components/AppSideBar"
import AppNavBar from "@/components/AppNavBar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>

      <main>
        <AppNavBar />
        <div className='px-4'>{children}</div>
      </main>

      </body>
    </html>
  )
}