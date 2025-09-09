"use client";
import { useState } from "react";
import bfetch from "@/lib/backend";

export default function Chat(){
  const [msg,setMsg]=useState(""); const [resp,setResp]=useState<any>(null); const [loading,setLoading]=useState(false);
  async function send(){
    setLoading(true);
    try{
      const r = await bfetch("/api/chat",{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ message: msg || "Olá" })});
      setResp(r);
    }catch(e:any){ setResp({error:e?.data||e?.message}); } finally{ setLoading(false); }
  }
  return (
    <div>
      <h1 style={{fontWeight:600, fontSize:20, marginBottom:8}}>Chat</h1>
      <textarea rows={3} value={msg} onChange={e=>setMsg(e.target.value)} style={{width:"100%", padding:8, borderRadius:8, background:"#111827", color:"#e5e7eb"}}/>
      <div style={{marginTop:8}}>
        <button onClick={send} disabled={loading} style={{padding:"8px 10px", background:"#1f2937", borderRadius:8}}>
          {loading?"Enviando…":"Enviar"}
        </button>
      </div>
      <pre style={{marginTop:12, background:"#111827", padding:12, borderRadius:8, overflowX:"auto"}}>{JSON.stringify(resp,null,2)}</pre>
    </div>
  );
}