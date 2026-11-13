import { ClipboardList, Mail, MapPin, Phone } from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/cfpapecData';

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL as string | undefined;

export function EnrollmentSection() {
  return (
    <section
      id="inscricao"
      className="border-t border-slate-200 bg-[#0B2559] py-16 text-white sm:py-24"
    >
      <div id="contactos" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[#FACC15]">
              Vamos Trabalhar Juntos? · Contactos Oficiais
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Inscreva-se ou solicite informações
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-200">
              Entre em contacto com a nossa equipa em Maxixe, Inhambane ou Govuro e descubra como
              podemos apoiar a sua formação ou empresa.
            </p>

            <dl className="mt-8 space-y-5 border-t border-white/15 pt-7 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">Endereço — Maxixe</dt>
                  <dd className="mt-0.5 text-slate-300">{INSTITUTIONAL_INFO.maxixeAddress}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">Endereço — Inhambane</dt>
                  <dd className="mt-0.5 text-slate-300">{INSTITUTIONAL_INFO.inhambaneAddress}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">Inscrições Presenciais — Govuro</dt>
                  <dd className="mt-0.5 text-slate-300">{INSTITUTIONAL_INFO.govuroAddress}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">Telefone / WhatsApp</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`tel:+${INSTITUTIONAL_INFO.phoneRaw}`}
                      className="text-slate-200 underline-offset-4 hover:text-white hover:underline tabular-nums"
                    >
                      {INSTITUTIONAL_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">Email &amp; Página</dt>
                  <dd className="mt-0.5 space-y-1 text-slate-300">
                    <p>
                      <a
                        href={`mailto:${INSTITUTIONAL_INFO.email}`}
                        className="underline-offset-4 hover:text-white hover:underline"
                      >
                        {INSTITUTIONAL_INFO.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-400">
                      Facebook: {INSTITUTIONAL_INFO.facebookName} · NUIT:{' '}
                      <span className="tabular-nums">{INSTITUTIONAL_INFO.nuit}</span>
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-white p-4 text-slate-900 sm:p-6 lg:col-span-7">
            <div className="flex flex-col gap-2 border-b border-slate-200 px-2 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#0B2559]">
                  Formulário de Pré-Inscrição
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Taxa de inscrição: {INSTITUTIONAL_INFO.registrationFee} · Requisito:{' '}
                  {INSTITUTIONAL_INFO.requirement}
                </p>
              </div>
              <p className="text-xs font-medium text-slate-500">
                Cursos e propostas para empresas
              </p>
            </div>

            {GOOGLE_FORM_URL ? (
              <iframe
                src={GOOGLE_FORM_URL}
                title="Formulário de pré-inscrição e propostas — CFPAPEC"
                className="mt-4 h-[1100px] w-full rounded-xl border border-slate-200 bg-white"
                loading="lazy"
              />
            ) : (
              <div className="mt-4 flex min-h-[420px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-[#F8FAFC] p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2559]/5 text-[#0B2559]">
                  <ClipboardList className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-4 font-display text-lg font-bold text-[#0B2559]">
                  Formulário do Google ainda não configurado
                </p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-600">
                  Defina <code className="font-semibold">VITE_GOOGLE_FORM_URL</code> em{' '}
                  <code className="font-semibold">.env.local</code> com o link embed do Google
                  Forms (terminado em <code className="font-semibold">?embedded=true</code>).
                </p>
              </div>
            )}

            <p className="mt-3 px-2 text-xs text-slate-500">
              Prefere falar diretamente? Ligue ou envie mensagem para{' '}
              <a
                href={`https://wa.me/${INSTITUTIONAL_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0B2559] underline-offset-4 hover:underline tabular-nums"
              >
                {INSTITUTIONAL_INFO.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
