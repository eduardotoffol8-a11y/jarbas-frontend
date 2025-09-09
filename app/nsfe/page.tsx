import bfetch from "@/lib/backend";
export default async function NFSe(){
  let list:any=null,error:any=null;
  try{ list = await bfetch("/nfse/listar"); }catch(e:any){ error=e?.data||e?.message; }
  return (<div><h1 style={{fontWeight:600, fontSize:20, marginBottom:8}}>NFSe</h1>
    <pre style={{background:"#111827", padding:12, borderRadius:8}}>{JSON.stringify(list??{error},null,2)}</pre></div>);
}