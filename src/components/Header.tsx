import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CfpapecLogo } from './BrandMark';

interface HeaderProps {
  onEnrollClick: () => void;
}

const NAV_LINKS = [
  { href: '#cursos', label: 'Cursos' },
  { href: '#areas', label: 'Áreas' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#cobertura', label: 'Onde Estamos' },
  { href: '#contactos', label: 'Contactos' },
];

export function Header({ onEnrollClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#F8FAFC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        <a
          href="#topo"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2559]"
        >
          <CfpapecLogo className="h-8 w-8 shrink-0" />
          <span className="font-display text-lg font-bold tracking-tight text-[#0B2559]">
            CFPAPEC
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#0B2559] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2559]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onEnrollClick}
            className="hidden sm:inline-flex min-h-10 items-center justify-center rounded-lg bg-[#0B2559] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#13357A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2559] cursor-pointer"
          >
            Inscrever-se
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0B2559] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2559] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav aria-label="Menu móvel" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0B2559]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onEnrollClick();
              }}
              className="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg bg-[#0B2559] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13357A] cursor-pointer"
            >
              Inscrever-se
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
