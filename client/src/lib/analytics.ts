export function trackWhatsAppConversion() {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17524430990/o3L9CJnz7JYbEI6xpqRB",
    });
  }
}

export function buildWhatsAppLink(message: string) {
  const phone = "5519994252525";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
