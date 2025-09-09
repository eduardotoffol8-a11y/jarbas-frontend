const DEFAULT_BASE = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000").replace(/\/+$/,"");

export function buildUrl(path: string): string {
  if (!path) throw new Error("buildUrl: path vazio");
  if (/^https?:\/\//.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${DEFAULT_BASE}${p}`;
}

export default async function bfetch<T=any>(path: string, init?: RequestInit): Promise<T> {
  const url = buildUrl(path);
  const resp = await fetch(url, {
    ...init,
    headers: { Accept: "application/json, text/plain;q=0.9, */*;q=0.8", ...(init?.headers||{}) },
    cache: "no-store",
  });

  const ct = resp.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    const data = await resp.json();
    if (!resp.ok) throw Object.assign(new Error("Request failed"), { status: resp.status, data, url });
    return data;
  }
  const text = await resp.text();
  if (!resp.ok) throw Object.assign(new Error("Request failed"), { status: resp.status, data: text, url });
  // @ts-expect-error: quando não for JSON, retornamos string
  return text;
}