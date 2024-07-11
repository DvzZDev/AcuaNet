export const shareOnWhatsApp = (message) => {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
