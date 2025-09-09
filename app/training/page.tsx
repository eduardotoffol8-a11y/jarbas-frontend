"use client";
import bfetch from "@/lib/backend";
import { useState } from "react";
export default function Training(){
  const [resp,setResp]=useState<any>(null);
  async function list(){ try{ setResp(await bfetch("/training/list")); }catch(e:any){ setResp({error:e?.data||e?.message}); } }
  return (
    <div>
      <h1 style={{fontWeight:600, fontSize:20, marginBottom:8}}>Treinamento</h1>
      <button onClick={list} style={{padding:"8px 10px", background:"#1f2937", borderRadius:8}}>Listar</button>
      <pre style={{marginTop:12, background:"#111827", padding:12, borderRadius:8}}>{JSON.stringify(resp,null,2)}</pre>
    </div>
  );
}