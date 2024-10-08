export const shareOnWhatsApp = (message) => {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

export const shareOnTwitter = (message) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`
  window.open(twitterUrl, "_blank")
}
