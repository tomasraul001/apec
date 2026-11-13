import { ArrowRight, Utensils } from 'lucide-react';
import { COURSES, TRAINING_AREAS } from '../data/cfpapecData';
import { ResilientImage } from './BrandMark';

interface AreasAndServicesProps {
  onSelectArea: (areaTitle: string) => void;
  onSelectCorporate: () => void;
}

export function AreasAndServices({
  onSelectArea,
  onSelectCorporate,
}: AreasAndServicesProps) {
  return (
    <section id="areas" className="border-t border-slate-200 bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#B45309]">
            O Que Oferecemos · Formação &amp; Soluções para Empresas
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B2559] sm:text-4xl text-balance">
            Nove áreas de formação e serviços corporativos integrados
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Para além da capacitação técnica de curta duração, fornecemos Equipamento de Protecção
            Individual (EPI), vestuário de trabalho e serviços de catering para instituições e
            empresas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {TRAINING_AREAS.map((area) => {
              const hasCourses = COURSES.some((c) => c.area === area.title);
              return (
                <button
                  key={area.index}
                  type="button"
                  onClick={() => {
                    if (hasCourses) {
                      onSelectArea(area.title);
                    } else {
                      onSelectCorporate();
                    }
                  }}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left transition-colors duration-150 hover:border-[#0B2559]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2559] cursor-pointer"
                >
                  <div>
                    <span className="font-display text-xs font-bold tracking-wider text-[#B45309] tabular-nums">
                      {area.index}.
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold leading-snug text-[#0B2559] group-hover:text-[#13357A]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{area.focus}</p>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0B2559] whitespace-nowrap">
                    {hasCourses ? 'Ver cursos da área' : 'Solicitar informação'}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0B2559] text-white lg:col-span-5">
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <ResilientImage
                src="/images/culinaria-confeitaria.jpg"
                alt="Formandos de Culinária e Confeitaria da CFPAPEC com aventais azuis e bolos preparados em aula prática"
                className="h-full w-full object-cover"
                fallbackTitle="Culinária, Confeitaria & Catering"
                fallbackSubtitle="Formação prática e serviços para empresas"
                icon={<Utensils className="h-6 w-6" />}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B2559] via-[#0B2559]/25 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#FACC15]">
                  Também Oferecemos · Soluções para Empresas
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  EPI, Vestuário &amp; Serviços de Catering
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Segurança, conforto e alimentação de qualidade para indivíduos, projectos
                  industriais, eventos institucionais e empresas em toda a província.
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5 text-sm">
                  <div>
                    <dt className="text-xs text-slate-300">Protecção &amp; Fardamento</dt>
                    <dd className="mt-1 font-semibold text-white">
                      Fornecimento de EPI e vestuário profissional
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-300">Alimentação</dt>
                    <dd className="mt-1 font-semibold text-white">
                      Catering corporativo e eventos locais
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={onSelectCorporate}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-bold text-[#0B2559] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15] cursor-pointer"
                >
                  <span>Solicitar Proposta Empresarial</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
