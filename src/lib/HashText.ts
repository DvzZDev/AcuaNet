import crypto from "crypto"

export default function hashTextToSha256(text: string): string {
  const hash = crypto.createHash("sha256")
  hash.update(text)
  return hash.digest("hex")
}
