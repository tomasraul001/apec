# CFPAPEC — Landing Page

Landing page institucional da CFPAPEC – Centro de Formação Profissional, Lda.
Cursos técnicos práticos, EPI, vestuário e catering na Província de Inhambane, Moçambique.

## Requisitos

- Node.js 20+

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
npm run dev
```

Depois edite `.env.local` e defina `VITE_GOOGLE_FORM_URL` com o link embed do
Google Forms:

```
https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?embedded=true
```

O formulário aparece na secção "Inscreva-se ou solicite informações".

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  App.tsx                  # composição da página
  components/              # secções e componentes visuais
  data/cfpapecData.ts      # cursos, áreas, distritos e contactos
public/images/             # imagens usadas na página
```

Sem backend: o único serviço externo é o Google Forms incorporado via iframe.
