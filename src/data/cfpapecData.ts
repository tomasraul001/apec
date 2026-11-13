export type TuitionTier = '1000' | '1500';

export interface Course {
  id: string;
  name: string;
  tuition: TuitionTier;
  tuitionLabel: string;
  area: string;
  summary: string;
}

export interface TrainingArea {
  index: string;
  title: string;
  focus: string;
}

export interface DistrictInfo {
  name: string;
  role: string;
  locations: string;
  status: string;
}

export const COURSES: Course[] = [
  // Cursos de 1.000 MT/mês
  {
    id: 'gestao-rh',
    name: 'Gestão de Recursos Humanos',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Administração e Gestão',
    summary: 'Recrutamento, gestão de equipas, processos laborais e desenvolvimento de talento organizacional.',
  },
  {
    id: 'secretariado-executivo',
    name: 'Secretariado Executivo',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Administração e Gestão',
    summary: 'Atendimento protocolar, arquivo, redacção administrativa, agenda executiva e apoio à direcção.',
  },
  {
    id: 'electricidade-instaladora',
    name: 'Electricidade Instaladora',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Engenharia e Produção Industrial',
    summary: 'Instalações eléctricas residenciais e comerciais, quadros de distribuição e normas de segurança.',
  },
  {
    id: 'canalizacao-hidraulica',
    name: 'Canalização Hidráulica',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Construção Civil',
    summary: 'Montagem e manutenção de redes de abastecimento de água, esgotos e sistemas hidráulicos.',
  },
  {
    id: 'informatica-basica',
    name: 'Informática Básica',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Tecnologias de Informação',
    summary: 'Operação de computadores, processamento de texto, folhas de cálculo, apresentações e internet.',
  },
  {
    id: 'corte-e-costura',
    name: 'Corte e Costura',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Artes',
    summary: 'Modelagem, corte de tecidos, confecção de vestuário e acabamentos profissionais.',
  },
  {
    id: 'logistica-procurement',
    name: 'Logística e Procurement',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Administração e Gestão',
    summary: 'Gestão de compras, cadeias de abastecimento, controlo de stocks e aprovisionamento.',
  },
  {
    id: 'electricidade-auto',
    name: 'Electricidade Auto',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Engenharia e Produção Industrial',
    summary: 'Diagnóstico eléctrico automóvel, sistemas de arranque, carga, iluminação e cablagem.',
  },
  {
    id: 'gestao-negocios',
    name: 'Gestão de Negócios e Empresas',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Administração e Gestão',
    summary: 'Empreendedorismo, controlo financeiro básico, atendimento ao cliente e sustentabilidade de PME.',
  },
  {
    id: 'higiene-seguranca',
    name: 'Higiene e Segurança no Trabalho',
    tuition: '1000',
    tuitionLabel: '1.000 MT/mês',
    area: 'Saúde e Segurança no Trabalho',
    summary: 'Prevenção de acidentes laborais, uso correcto de EPI, avaliação de riscos e conformidade.',
  },

  // Cursos de 1.500 MT/mês
  {
    id: 'refrigeracao-climatizacao',
    name: 'Refrigeração e Climatização',
    tuition: '1500',
    tuitionLabel: '1.500 MT/mês',
    area: 'Engenharia e Produção Industrial',
    summary: 'Instalação, carga de gás, manutenção preventiva e reparação de sistemas de frio e ar condicionado.',
  },
  {
    id: 'culinaria-confeitaria',
    name: 'Culinária e Confeitaria',
    tuition: '1500',
    tuitionLabel: '1.500 MT/mês',
    area: 'Hotelaria e Turismo',
    summary: 'Técnicas práticas de cozinha, pastelaria, panificação, higiene alimentar e apresentação de pratos.',
  },
  {
    id: 'serrilharia-civil',
    name: 'Serrilharia Civil (Soldadura)',
    tuition: '1500',
    tuitionLabel: '1.500 MT/mês',
    area: 'Construção Civil',
    summary: 'Corte metálico, soldadura por arco eléctrico, fabrico de estruturas, portões e grades.',
  },
  {
    id: 'restaurante-bar',
    name: 'Restaurante e Bar',
    tuition: '1500',
    tuitionLabel: '1.500 MT/mês',
    area: 'Hotelaria e Turismo',
    summary: 'Serviço de mesa e balcão, protocolo de hospitalidade, preparação de bebidas e gestão de sala.',
  },
  {
    id: 'mecanica-automovel',
    name: 'Mecânica Automóvel',
    tuition: '1500',
    tuitionLabel: '1.500 MT/mês',
    area: 'Engenharia e Produção Industrial',
    summary: 'Manutenção de motores, sistemas de travagem, suspensão, transmissão e diagnóstico oficinal.',
  },
];

export const TRAINING_AREAS: TrainingArea[] = [
  {
    index: '01',
    title: 'Engenharia e Produção Industrial',
    focus: 'Electricidade instaladora e auto, refrigeração, climatização e mecânica.',
  },
  {
    index: '02',
    title: 'Construção Civil',
    focus: 'Canalização hidráulica, serrilharia civil e soldadura estrutural.',
  },
  {
    index: '03',
    title: 'Tecnologias de Informação',
    focus: 'Informática básica, ferramentas de escritório e produtividade digital.',
  },
  {
    index: '04',
    title: 'Administração e Gestão',
    focus: 'Recursos humanos, secretariado executivo, logística, procurement e negócios.',
  },
  {
    index: '05',
    title: 'Agricultura e Conservação',
    focus: 'Capacitação técnica orientada para produção sustentável e conservação local.',
  },
  {
    index: '06',
    title: 'Hotelaria e Turismo',
    focus: 'Culinária e confeitaria, serviço de restaurante e bar e hospitalidade.',
  },
  {
    index: '07',
    title: 'Saúde e Segurança no Trabalho',
    focus: 'Higiene ocupacional, prevenção de riscos e protocolos de protecção laboral.',
  },
  {
    index: '08',
    title: 'Artes',
    focus: 'Corte e costura, expressão prática e ofícios criativos geradores de renda.',
  },
  {
    index: '09',
    title: 'Comunicação e Línguas',
    focus: 'Comunicação profissional, atendimento ao público e competências linguísticas.',
  },
];

export const WHY_CHOOSE_US = [
  'Fundada em 2024, com mais de 1.500 profissionais formados',
  'Formação prática orientada para o mercado de trabalho',
  'Metodologias participativas e acompanhamento contínuo dos participantes',
  'Presença em 12 distritos da Província de Inhambane',
  'Compromisso com resultados, empregabilidade e responsabilidade social',
];

export const STUDENT_BENEFITS = [
  {
    title: 'Competências Práticas',
    description: 'Aulas orientadas ao saber fazer para aplicação imediata no mercado ou negócio próprio.',
  },
  {
    title: 'Estágio Profissional',
    description: 'Ligação prática ao contexto real de trabalho para consolidação da aprendizagem.',
  },
  {
    title: 'Cerimónia de Graduação',
    description: 'Reconhecimento público do percurso formativo junto da comunidade e parceiros.',
  },
  {
    title: 'Certificado Oficial',
    description: 'Certificação emitida pela CFPAPEC para valorização curricular e contratação.',
  },
];

export const DISTRICTS: DistrictInfo[] = [
  {
    name: 'Govuro',
    role: 'Inscrições Abertas · Núcleo Activo',
    locations: 'Escola Secundária de Doane e EPC Sede',
    status: 'Aulas de 2ª a 6ª e aos Sábados · Taxa de Inscrição: 400 MT',
  },
  {
    name: 'Maxixe',
    role: 'Sede Operacional',
    locations: 'Bairro Chambone 5, Av. Heróis Moçambicanos',
    status: 'Atendimento presencial, inscrições e coordenação comercial',
  },
  {
    name: 'Inhambane',
    role: 'Delegação Provincial',
    locations: 'Bairro Muelé 1, ao longo da EN5A',
    status: 'Formação técnica, parcerias institucionais e atendimento',
  },
  {
    name: 'Vilankulo',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Formação profissional e capacitação local',
  },
  {
    name: 'Massinga',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Turmas presenciais orientadas ao mercado local',
  },
  {
    name: 'Inhassoro',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Formação técnica e segurança no trabalho',
  },
  {
    name: 'Inharrime',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Formação prática de curta duração',
  },
  {
    name: 'Homoíne',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Capacitação de jovens e profissionais',
  },
  {
    name: 'Jangamo',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Cursos técnicos e ofícios práticos',
  },
  {
    name: 'Zavala',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Formação comunitária e profissional',
  },
  {
    name: 'Funhalouro',
    role: 'Polo Distrital',
    locations: 'Actuação em regime de arrendamento',
    status: 'Capacitação técnica distrital',
  },
];

export const INSTITUTIONAL_INFO = {
  legalName: 'CFPAPEC – Centro de Formação Profissional APEC, Lda',
  phoneDisplay: '+258 86 898 1314',
  phoneRaw: '258868981314',
  email: 'cfpapec@gmail.com',
  nuit: '401258116',
  facebookName: 'Centro de Formação Profissional APEC',
  maxixeAddress: 'Bairro Chambone 5, Av. Heróis Moçambicanos',
  inhambaneAddress: 'Bairro Muelé 1, ao longo da EN5A',
  govuroAddress: 'Escola Secundária de Doane e EPC Sede',
  registrationFee: '400 MT',
  schedule: '2ª a 6ª feira e aos Sábados',
  requirement: 'Cópia de BI',
};
