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
        padding: "1rem",textAlign:"center"}}>
          <h1 style={{color:"white"}}>International Used Auto Parts Inventory Manager</h1>
          </header>
          {children}
          <footer style={{backgroundColor:"blue", padding:"1rem", textAlign:"center"}}><h1 style={{color:"white"}}>IUAP</h1></footer>
          </body>   
    </html>
  )
}
