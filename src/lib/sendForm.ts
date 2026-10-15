// Sends a form submission to your inbox through Web3Forms (free tier, no backend needed).
// The access key is public by design (it only lets people send TO your inbox).
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "5de6b93c-da45-4904-82e7-a7c16216d1b2";

export type SendResult = { ok: boolean; message?: string };

export async function sendForm(payload: Record<string, string>): Promise<SendResult> {
  if (!ACCESS_KEY) return { ok: false, message: "Access key is not set" };
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: ACCESS_KEY, from_name: "AntA website", ...payload }),
    });
    let json: { success?: boolean; message?: string } = {};
    try {
      json = await res.json();
    } catch {
      // response was not JSON
    }
    if (json.success) return { ok: true };
    return { ok: false, message: json.message || `HTTP ${res.status}` };
  } catch (err) {
    return { ok: false, message: err instanceof Error ? err.message : "Network error" };
  }
}
