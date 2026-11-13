import { useState } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { CfpapecLogo, ResilientImage } from './components/BrandMark';
import { Header } from './components/Header';
import { CoursesSection } from './components/CoursesSection';
import { AreasAndServices } from './components/AreasAndServices';
import { AboutAndCoverage } from './components/AboutAndCoverage';
import { EnrollmentSection } from './components/EnrollmentSection';
import { INSTITUTIONAL_INFO } from './data/cfpapecData';

export default function App() {
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<string>('all');

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleEnrollClick() {
    scrollToSection('inscricao');
  }

  function handleSelectCourse() {
    scrollToSection('inscricao');
  }

  function handleSelectArea(areaTitle: string) {
    setSelectedAreaFilter(areaTitle);
    scrollToSection('cursos');
  }

  function handleSelectCorporate() {
    scrollToSection('inscricao');
  }

  function handleSelectDistrict() {
    scrollToSection('inscricao');
  }

  return (
    <div id="topo" className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header onEnrollClick={handleEnrollClick} />

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-[#B45309]">
                Inscrições Abertas · Govuro &amp; Província de Inhambane
              </p>

              <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0B2559] text-balance">
                Formação profissional prática e soluções para empresas
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Capacitamos jovens, crianças e profissionais através de formações práticas
                orientadas ao saber fazer, com estágio, cerimónia de graduação e certificado —
                além de fornecimento de EPI, vestuário e serviços de catering.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleEnrollClick}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0B2559] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#13357A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2559] cursor-pointer"
                >
                  <span>Inscrever-se Agora</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href="#cursos"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0B2559] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-100"
                >
                  Explorar 15 Cursos
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Govuro: Escola Secundária de Doane e EPC Sede · Sedes em Maxixe e Inhambane
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-[#0B2559] sm:min-h-[420px]">
                <ResilientImage
                  src="/images/graduacao-cfpapec.jpg"
                  alt="Cerimónia de Graduação da CFPAPEC com formandos fardados segurando os seus certificados oficiais"
                  className="h-full w-full object-cover object-top"
                  fallbackTitle="Cerimónia de Graduação CFPAPEC"
                  fallbackSubtitle="Formação prática, estágio e certificado"
                  icon={<GraduationCap className="h-7 w-7" />}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 text-white">
                  <p className="text-xs font-semibold text-[#FACC15]">
                    Cerimónia de Graduação CFPAPEC
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Formandos certificados em áreas técnicas, industriais e de serviços na
                    Província de Inhambane.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Full-Width KPI Strip */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-4 sm:gap-6">
            <div className="border-slate-200 sm:border-r sm:pr-4">
              <p className="font-display text-2xl font-extrabold text-[#0B2559] tabular-nums sm:text-3xl">
                2024
              </p>
              <p className="mt-1 text-xs font-medium text-slate-600">Ano de fundação</p>
            </div>

            <div className="border-slate-200 sm:border-r sm:pr-4">
              <p className="font-display text-2xl font-extrabold text-[#0B2559] tabular-nums sm:text-3xl">
                1.500+
              </p>
              <p className="mt-1 text-xs font-medium text-slate-600">Profissionais formados</p>
            </div>

            <div className="border-slate-200 sm:border-r sm:pr-4">
              <p className="font-display text-2xl font-extrabold text-[#0B2559] tabular-nums sm:text-3xl">
                12
              </p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Distritos em Inhambane
              </p>
            </div>

            <div>
              <p className="font-display text-2xl font-extrabold text-[#B45309] tabular-nums sm:text-3xl">
                400 MT
              </p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Taxa de inscrição (com BI)
              </p>
            </div>
          </div>
        </section>

        <CoursesSection
          selectedAreaFilter={selectedAreaFilter}
          onAreaFilterChange={setSelectedAreaFilter}
          onSelectCourse={handleSelectCourse}
        />

        <AreasAndServices
          onSelectArea={handleSelectArea}
          onSelectCorporate={handleSelectCorporate}
        />

        <AboutAndCoverage onSelectDistrict={handleSelectDistrict} />

        <EnrollmentSection />
      </main>

      <footer className="border-t border-white/10 bg-[#061638] py-10 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1">
              <CfpapecLogo className="h-full w-full" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-white">
                {INSTITUTIONAL_INFO.legalName}
              </p>
              <p className="text-xs text-slate-400">
                Formação · EPI &amp; Vestuário · Catering · NUIT{' '}
                <span className="tabular-nums">{INSTITUTIONAL_INFO.nuit}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <a href="#cursos" className="hover:text-white">
              Cursos
            </a>
            <a href="#areas" className="hover:text-white">
              Áreas
            </a>
            <a href="#sobre" className="hover:text-white">
              Sobre Nós
            </a>
            <a href="#cobertura" className="hover:text-white">
              Onde Estamos
            </a>
            <span className="tabular-nums">© 2026 CFPAPEC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
