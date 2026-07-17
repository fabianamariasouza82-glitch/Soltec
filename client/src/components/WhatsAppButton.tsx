import { trackWhatsAppConversion } from "@/lib/analytics";

export default function WhatsAppButton() {
  return (
    
      href="https://wa.me/5519994252525"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      onClick={trackWhatsAppConversion}
    >
      {/* Pulsing ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-75 animate-ping" />
      {/* Solid button */}
      <span className="relative inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe57] transition-colors">
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.65 4.53 1.78 6.4L4 29l7.78-1.74A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6c-1.94 0-3.76-.52-5.33-1.43l-.38-.22-4.62 1.03 1-4.5-.25-.39A9.55 9.55 0 0 1 5.4 15c0-5.85 4.76-10.6 10.6-10.6S26.6 9.15 26.6 15 21.85 24.6 16.004 24.6Zm5.86-7.94c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.77-1-2.42-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
