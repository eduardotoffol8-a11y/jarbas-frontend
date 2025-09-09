import bfetch from "@/lib/backend";
export default async function Whats(){
  let data:any=null,error:any=null;
  try{ data = await bfetch("/whatsapp/status"); }catch(e:any){ error=e?.data||e?.message; }
  return (<div><h1 style={{fontWeight:600, fontSize:20, marginBottom:8}}>WhatsApp</h1>
    <pre style={{background:"#111827", padding:12, borderRadius:8}}>{JSON.stringify(data??{error},null,2)}</pre></div>);
}