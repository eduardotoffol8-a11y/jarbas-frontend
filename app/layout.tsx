import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jarbas",
  description: "Frontend do Jarbas"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{margin:0}}>
        <aside style={{
          position:"fixed", left:0, top:0, bottom:0, width:240, padding:12,
          background:"#0f172a", color:"#e5e7eb", borderRight:"1px solid #1f2937"
        }}>
          <div style={{fontWeight:700, marginBottom:12}}>Jarbas</div>
          <nav style={{display:"grid", gap:6}}>
            {[
              ["/dashboard","Dashboard"],
              ["/chat","Chat"],
              ["/whatsapp","Whatsapp"],
              ["/email","Email"],
              ["/nfse","NFSe"],
              ["/training","Treinamento"],
              ["/calendar","Calendário"],
              ["/settings","Settings"],
            ].map(([href,label])=>(
              <Link key={href as string} href={href as string} style={{padding:"8px 10px", borderRadius:8, background:"#111827", color:"#e5e7eb"}}>
                {label as string}
              </Link>
            ))}
          </nav>
        </aside>

        <aside style={{
          position:"fixed", right:0, top:0, bottom:0, width:320, padding:12,
          background:"#0f172a", color:"#e5e7eb", borderLeft:"1px solid #1f2937"
        }}>
          <div style={{fontWeight:600, marginBottom:8}}>Central de Info</div>
          <div style={{fontSize:12, opacity:.7, marginBottom:8}}>WhatsApp • Email • Agenda</div>
          <div style={{display:"grid", gap:8}}>
            <div style={{background:"#111827", padding:10, borderRadius:8}}>WhatsApp</div>
            <div style={{background:"#111827", padding:10, borderRadius:8}}>Email</div>
            <div style={{background:"#111827", padding:10, borderRadius:8}}>Calendário</div>
          </div>
        </aside>

        <header style={{
          position:"fixed", left:240, right:320, top:0, height:48,
          display:"flex", alignItems:"center", padding:"0 12px",
          background:"#0b1020", color:"#e5e7eb", borderBottom:"1px solid #1f2937"
        }}>
          Jarbas • Ambiente: <code style={{marginLeft:6}}>{process.env.NODE_ENV}</code>
        </header>

        <main style={{marginLeft:240, marginRight:320, padding:16, paddingTop:64, minHeight:"100vh", background:"#0b1020", color:"#e5e7eb"}}>
          {children}
        </main>
      </body>
    </html>
  );
}