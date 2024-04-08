export function parsePayload(access: string | undefined) {
  if (!access) return null;

  const payload = access?.split(".")[1];
  const binaryString = atob(payload);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const userString = new TextDecoder("utf8").decode(bytes);
  return JSON.parse(userString);
}
