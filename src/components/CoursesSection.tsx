import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { COURSES, INSTITUTIONAL_INFO, type TuitionTier } from '../data/cfpapecData';

interface CoursesSectionProps {
  selectedAreaFilter: string;
  onAreaFilterChange: (area: string) => void;
  onSelectCourse: () => void;
}

type TierFilter = 'all' | TuitionTier;

export function CoursesSection({
  selectedAreaFilter,
  onAreaFilterChange,
  onSelectCourse,
}: CoursesSectionProps) {
  const [tierFilter, setTierFilter] = useState<TierFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return COURSES.filter((course) => {
      const matchesTier = tierFilter === 'all' || course.tuition === tierFilter;
      const matchesArea =
        selectedAreaFilter === 'all' || course.area === selectedAreaFilter;
      const matchesQuery =
        query === '' ||
        course.name.toLowerCase().includes(query) ||
        course.area.toLowerCase().includes(query) ||
        course.summary.toLowerCase().includes(query);
      return matchesTier && matchesArea && matchesQuery;
    });
  }, [tierFilter, selectedAreaFilter, searchQuery]);

  const count1000 = COURSES.filter((c) => c.tuition === '1000').length;
  const count1500 = COURSES.filter((c) => c.tuition === '1500').length;

  return (
    <section id="cursos" className="border-t border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#B45309]">
              Formação Profissional · Inscrições Abertas em Govuro e Inhambane
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B2559] sm:text-4xl text-balance">
              Cursos práticos com mensalidades transparentes
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Capacitamos crianças, jovens e adultos através de formações práticas orientadas ao
              saber fazer, com aulas de {INSTITUTIONAL_INFO.schedule.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 sm:gap-6">
            <div>
              <p className="text-xs text-slate-500">Taxa de inscrição</p>
              <p className="mt-0.5 font-display text-lg font-bold text-[#0B2559] tabular-nums">
                {INSTITUTIONAL_INFO.registrationFee}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Horário</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">2ª–6ª e Sábados</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Requisitos</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">
                {INSTITUTIONAL_INFO.requirement}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div
            role="group"
            aria-label="Filtrar cursos por mensalidade"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
          >
            <button
              type="button"
              onClick={() => setTierFilter('all')}
              className={`min-h-10 rounded-md px-3.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                tierFilter === 'all'
                  ? 'bg-white text-[#0B2559] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2559]'
              }`}
            >
              Todos ({COURSES.length})
            </button>
            <button
              type="button"
              onClick={() => setTierFilter('1000')}
              className={`min-h-10 rounded-md px-3.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 tabular-nums transition-colors duration-150 cursor-pointer ${
                tierFilter === '1000'
                  ? 'bg-white text-[#0B2559] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2559]'
              }`}
            >
              1.000 MT/mês ({count1000})
            </button>
            <button
              type="button"
              onClick={() => setTierFilter('1500')}
              className={`min-h-10 rounded-md px-3.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 tabular-nums transition-colors duration-150 cursor-pointer ${
                tierFilter === '1500'
                  ? 'bg-white text-[#0B2559] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2559]'
              }`}
            >
              1.500 MT/mês ({count1500})
            </button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {selectedAreaFilter !== 'all' && (
              <button
                type="button"
                onClick={() => onAreaFilterChange('all')}
                className="min-h-10 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-[#0B2559] whitespace-nowrap shrink-0 hover:bg-slate-100 cursor-pointer"
              >
                Área: {selectedAreaFilter} ×
              </button>
            )}

            <div className="relative w-full sm:w-72">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar curso ou área..."
                aria-label="Pesquisar curso ou área"
                className="min-h-10 w-full rounded-lg border border-slate-200 bg-[#F8FAFC] py-2 pr-3.5 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B2559] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="mt-10 rounded-xl border border-slate-200 bg-[#F8FAFC] p-10 text-center">
            <p className="font-display text-lg font-semibold text-[#0B2559]">
              Nenhum curso encontrado para este filtro
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Limpe a pesquisa ou seleccione todas as mensalidades para ver os 15 cursos disponíveis.
            </p>
            <button
              type="button"
              onClick={() => {
                setTierFilter('all');
                setSearchQuery('');
                onAreaFilterChange('all');
              }}
              className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#0B2559] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#13357A] cursor-pointer"
            >
              Ver todos os cursos
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors duration-150 hover:border-slate-300 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="truncate">{course.area}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-[#0B2559] whitespace-nowrap shrink-0 tabular-nums">
                      {course.tuitionLabel}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-bold tracking-tight text-[#0B2559]">
                    {course.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {course.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-200/80 pt-4">
                  <button
                    type="button"
                    onClick={onSelectCourse}
                    className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#0B2559] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#13357A] cursor-pointer"
                  >
                    <span>Inscrever neste curso</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
