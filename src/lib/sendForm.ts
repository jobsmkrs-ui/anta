// Sends a form submission to your inbox through Web3Forms (free tier, no backend needed).
// 1) Get a free access key at https://web3forms.com (enter anta.mkrs@gmail.com — the key is emailed to you).
// 2) Either paste it below, or set NEXT_PUBLIC_WEB3FORMS_KEY in your build environment.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "5de6b93c-da45-4904-82e7-a7c16216d1b2";

export async function sendForm(payload: Record<string, string>): Promise<boolean> {
  if (ACCESS_KEY === "5de6b93c-da45-4904-82e7-a7c16216d1b2") {
    console.error("sendForm: Web3Forms access key is not set.");
    return false;
  }
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: ACCESS_KEY, from_name: "AntA website", ...payload }),
    });
    const json = await res.json();
    return Boolean(json.success);
  } catch {
    return false;
  }
}
