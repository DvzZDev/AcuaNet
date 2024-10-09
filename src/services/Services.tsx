export const shareOnWhatsApp = (message: string) => {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

export const shareOnTwitter = (message: string) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`
  window.open(twitterUrl, "_blank")
}
