'use client';
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style = {{backgroundColor: "black",
        padding: "1.5rem",textAlign:"center"}}>
          <h1 style={{color:"blue"}}>Inventory Manager</h1>
          </header>
          {children}
       
          </body>   
    </html>
  )
}
