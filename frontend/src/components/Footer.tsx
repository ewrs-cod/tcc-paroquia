import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-marian-blue text-gray-300 border-t-4 border-marian-red relative">
      {/* Detalhe Ornamental no Topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-marian-red rounded-full p-3 border-4 border-white/10">
         <div className="text-marian-gold text-xl">✝</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Identidade */}
        <div className="md:col-span-1">
          <h3 className="text-white font-serif text-lg font-bold mb-4 tracking-widest uppercase">
            Imaculado<br/>Coração de Maria
          </h3>
          <p className="text-xs leading-relaxed mb-6 text-blue-100/80">
            Diocese de Piracicaba<br/>
            Unidos na fé e na missão de evangelizar.
          </p>
          
          {/* REDES SOCIAIS LINKADAS */}
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/share/17fhbkQqay/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-marian-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/paroquiaimaculadorc?igsh=eXpuNjQ5dmhzeHVx"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-marian-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-marian-gold transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Sacramentos */}
        <div>
          <h4 className="text-marian-gold font-serif text-sm font-bold mb-4 uppercase">Sacramentos</h4>
          <ul className="space-y-2 text-sm text-blue-100/70">
            <li><a href="#" className="hover:text-white transition-colors">Batismo</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Eucaristia</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Crisma</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Matrimônio</a></li>
          </ul>
        </div>

        {/* Links A Paróquia */}
        <div>
          <h4 className="text-marian-gold font-serif text-sm font-bold mb-4 uppercase">A Paróquia</h4>
          <ul className="space-y-2 text-sm text-blue-100/70">
            <li><a href="/a-paroquia" className="hover:text-white transition-colors">História</a></li>
            <li><a href="/a-paroquia" className="hover:text-white transition-colors">Clero</a></li>
            <li><a href="/pastorais" className="hover:text-white transition-colors">Pastorais</a></li>
            <li><a href="/dizimo" className="hover:text-white transition-colors">Dízimo</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-marian-gold font-serif text-sm font-bold mb-4 uppercase">Contato</h4>
          <ul className="space-y-4 text-sm text-blue-100/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-marian-red mt-1" />
              <span>Rua Pe. Paulo Pastana Smith, 624<br />Jardim Hipódromo – CEP 13.505-364 <br /> Rio Claro - SP</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-marian-red" />
              <span>(19) 3527-3112 / 3527-3142</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-marian-red" />
              <span> imaculadocoracao.rc@diocesedepiracicaba.org.br</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center text-xs text-white/40">
          <p>&copy; 2025 Paróquia Imaculado Coração de Maria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}