import { trackWhatsAppConversion, buildWhatsAppLink } from "@/lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink("Olá! Vim através do site da Soltec e gostaria de mais informações.")}
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
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.997.583 3.858 1.588 5.427L2 22l4.679-1.556A9.96 9.96 0 0 0 12.001 22C17.523 22 22 17.523 22 12.001 22 6.478 17.523 2 12.001 2Zm5.696 14.176c-.237.669-1.174 1.225-1.926 1.386-.512.108-1.181.194-3.432-.737-2.881-1.193-4.737-4.104-4.881-4.293-.138-.19-1.166-1.553-1.166-2.962 0-1.41.735-2.103 1.001-2.393.238-.259.517-.323.689-.323.172 0 .345.001.495.008.16.008.373-.061.583.446.216.522.734 1.803.798 1.935.064.132.107.288.021.462-.086.174-.129.283-.253.435-.128.156-.267.348-.382.467-.128.132-.261.276-.113.541.15.265.665 1.098 1.428 1.779 1.028.916 1.848 1.209 2.116 1.343.268.135.427.113.585-.064.163-.181.7-.813.888-1.092.183-.279.371-.232.626-.14.259.093 1.643.775 1.925.916.281.14.469.211.538.328.069.117.069.677-.168 1.347Z" />
        </svg>
      </span>
    </a>
  );
}
