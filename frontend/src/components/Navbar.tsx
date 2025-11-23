import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-marian-blue/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo / Nome */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Link href="/" className="text-white font-serif text-xl md:text-2xl tracking-wide hover:text-marian-gold transition-colors">
              Imaculado Coração de Maria
            </Link>
            <span className="text-marian-gold text-xs uppercase tracking-[0.2em] font-light">
              Igreja Católica
            </span>
          </div>
          
          {/* Links Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white/90 hover:text-marian-gold text-xs font-bold transition-all tracking-widest uppercase">Início</Link>
              <Link href="/a-paroquia" className="text-white/90 hover:text-marian-gold text-xs font-bold transition-all tracking-widest uppercase">A Paróquia</Link>
              <Link href="/horarios" className="text-white/90 hover:text-marian-gold text-xs font-bold transition-all tracking-widest uppercase">Horários</Link>
              <Link href="/pastorais" className="text-white/90 hover:text-marian-gold text-xs font-bold transition-all tracking-widest uppercase">Pastorais</Link>
              
              {/* Botão Contato */}
              <Link href="/contato" className="border border-white/30 text-white hover:bg-white hover:text-marian-blue px-6 py-2 text-xs font-bold transition-all uppercase tracking-widest">
                Contato
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button className="text-white hover:text-marian-gold p-2">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}