import { useState } from 'react';
import { Award, Check, Eye, MapPin, ShieldCheck, X } from 'lucide-react';
import {
  DISTRICTS,
  STUDENT_BENEFITS,
  WHY_CHOOSE_US,
} from '../data/cfpapecData';
import { ResilientImage } from './BrandMark';

interface AboutAndCoverageProps {
  onSelectDistrict: () => void;
}

export function AboutAndCoverage({ onSelectDistrict }: AboutAndCoverageProps) {
  const [activeDistrict, setActiveDistrict] = useState(DISTRICTS[0]);
  const [flyerOpen, setFlyerOpen] = useState(false);

  return (
    <>
      <section id="sobre" className="border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#B45309]">
                  Quem Somos · Instituição Moçambicana
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B2559] sm:text-4xl text-balance">
                  Sobre a CFPAPEC e o que cada formando conquista
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  A CFPAPEC – Centro de Formação Profissional, Lda é uma instituição moçambicana
                  especializada em formação profissional de curta duração, capacitação técnica e
                  desenvolvimento de competências — aliada ao fornecimento de EPI, vestuário e
                  serviços de catering.
                </p>

                <h3 className="mt-8 font-display text-lg font-bold text-[#0B2559]">
                  Porquê escolher a CFPAPEC
                </h3>
                <ul className="mt-4 space-y-3">
                  {WHY_CHOOSE_US.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#FACC15]/30 text-[#0B2559]">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xs font-semibold tracking-wide text-slate-500">
                  Parceiros e Enquadramento Local
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#0B2559]">
                  <span>Associação Txivuno</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>Governo da Província de Inhambane</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>Escola Secundária de Doane &amp; EPC Sede</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-6">
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 min-h-[280px]">
                <ResilientImage
                  src="/images/formandos-epi.jpg"
                  alt="Turma de formandos da CFPAPEC com equipamento de protecção individual (capacetes e coletes) em sala de formação"
                  className="h-full w-full object-cover"
                  fallbackTitle="Formação Prática e Participativa"
                  fallbackSubtitle="Acompanhamento contínuo dos participantes"
                  icon={<ShieldCheck className="h-6 w-6" />}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 text-white">
                  <p className="text-xs font-medium text-[#FACC15]">
                    Metodologias participativas
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    Formação prática com equipamento de segurança e acompanhamento contínuo dos
                    participantes.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {STUDENT_BENEFITS.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <div className="flex items-center gap-2 text-[#0B2559]">
                      <Award className="h-4 w-4 text-[#B45309] shrink-0" aria-hidden="true" />
                      <h4 className="font-display text-sm font-bold">{benefit.title}</h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cobertura" className="border-t border-slate-200 bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#B45309]">
                Cobertura Geográfica · Província de Inhambane
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B2559] sm:text-4xl text-balance">
                Onde Estamos: presença em 12 distritos
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Actuamos em regime de arrendamento por toda a Província de Inhambane, levando
                formação profissional perto das comunidades e empresas locais.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setFlyerOpen(true)}
              className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0B2559] whitespace-nowrap shrink-0 transition-colors hover:bg-slate-100 cursor-pointer sm:self-auto"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              <span>Ver Cartaz Oficial de Govuro</span>
            </button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:col-span-7">
              {DISTRICTS.map((district) => {
                const isSelected = activeDistrict.name === district.name;
                return (
                  <button
                    key={district.name}
                    type="button"
                    onClick={() => setActiveDistrict(district)}
                    className={`flex min-h-12 items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'border-[#0B2559] bg-[#0B2559] text-white'
                        : 'border-slate-200 bg-white text-[#0B2559] hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-display text-sm font-semibold truncate">
                      {district.name}
                    </span>
                    <MapPin
                      className={`h-4 w-4 shrink-0 ${
                        isSelected ? 'text-[#FACC15]' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold text-[#B45309]">{activeDistrict.role}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#0B2559]">
                  Distrito de {activeDistrict.name}
                </h3>
                <dl className="mt-5 space-y-4 border-t border-slate-200 pt-5 text-sm">
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Local de Atendimento / Polo</dt>
                    <dd className="mt-1 font-semibold text-slate-900">
                      {activeDistrict.locations}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Modalidade e Condições</dt>
                    <dd className="mt-1 text-slate-700">{activeDistrict.status}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={onSelectDistrict}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#0B2559] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#13357A] cursor-pointer"
                >
                  Solicitar inscrição em {activeDistrict.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {flyerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="flyer-modal-title"
          onClick={() => setFlyerOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5">
              <h3 id="flyer-modal-title" className="font-display text-base font-bold text-[#0B2559]">
                Cartaz Oficial · Formação Profissional Govuro
              </h3>
              <button
                type="button"
                onClick={() => setFlyerOpen(false)}
                aria-label="Fechar cartaz"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[78vh] overflow-y-auto bg-slate-100 p-3">
              <ResilientImage
                src="/images/cartaz-govuro.jpg"
                alt="Cartaz oficial da CFPAPEC com cursos de 1000 MT e 1500 MT por mês em Govuro"
                className="mx-auto w-full rounded-lg object-contain"
                fallbackTitle="Formação Profissional Govuro"
                fallbackSubtitle="Taxa de inscrição: 400 MT · Escola Secundária de Doane & EPC Sede"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
