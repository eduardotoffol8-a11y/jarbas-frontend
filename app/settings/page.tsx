export default function Settings(){
  const v = process.env.NEXT_PUBLIC_BACKEND_URL || "(não definida)";
  return (
    <div>
      <h1 style={{fontWeight:600, fontSize:20, marginBottom:8}}>Settings</h1>
      <div style={{background:"#111827", padding:12, borderRadius:8}}>
        NEXT_PUBLIC_BACKEND_URL = <code>{v}</code>
      </div>
    </div>
  );
}