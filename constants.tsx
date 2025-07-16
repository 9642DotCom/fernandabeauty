import React from 'react';
import { Service } from './types';

export const services: Service[] = [
  {
    name: 'Volume Brasileiro',
    description: 'Manutenção de 15 a 20 dias, fios y.',
    applicationPrice: 120,
    maintenancePrice: 100,
    image: '/images/volumebrasileiro.png',
  },
  {
    name: 'Volume Egípcio',
    description: 'Manutenção de 15 a 20 dias, fios 4D.',
    applicationPrice: 130,
    maintenancePrice: 100,
    image: '/images/volumeegipcio.jpg',
  },
  {
    name: 'Mega Luxo',
    description: 'Duração de 30 a 40 dias, sem manutenção.',
    applicationPrice: 150,
    image: '/images/megaluxo.png',
  },
  {
    name: 'Mega Power',
    description: 'Duração de 30 a 40 dias, sem manutenção.',
    applicationPrice: 160,
    image: '/images/megapower.jpg',
  },
  {
    name: 'Efeito Fox',
    description: 'Manutenção de 15 a 20 dias, fios retos, curvatura m.',
    applicationPrice: 145,
    maintenancePrice: 100,
    image: '/images/efeitofox.png',
  },
  {
    name: 'Brasileiro Marrom',
    description: 'Manutenção de 15 a 20 dias, fios y cor marrom.',
    applicationPrice: 140,
    maintenancePrice: 100,
    image: '/images/volumebrasileiromarrom.png',
  },
   {
    name: 'Efeito Molhado',
    description: 'Manutenção de 15 a 20 dias.',
    applicationPrice: 120,
    maintenancePrice: 100,
    image: '/images/efeitomolado.jpg',
  },
  {
    name: 'Efeito Anime',
    description: '20 dias, sem manutenção.',
    applicationPrice: 140,
    image: '/images/efeitoanime.jpg',
  },
];

export const removalService: Service = {
    name: 'Remoção',
    description: 'Remoção química sem prejudicar os fios naturais. Procedimento de 30 minutos.',
    applicationPrice: 30,
    image: '/images/remocao.png',
}

export const careGuideItems = [
    "Não molhar os cílios nas primeiras 24 horas.",
    "Pentear e higienizar diariamente com produtos adequados.",
    "Não usar rímel. Remover maquiagem com demaquilante sem óleo.",
    "Evitar esfregar os olhos ou puxar os fios.",
    "Evitar calor excessivo (sauna, secador muito próximo, banhos muito quentes).",
];

export const bookingInfoItems = [
    { title: "Sinal de Reserva", text: "Para garantir seu horário, pedimos um sinal de R$25,00 via Pix. Este valor é para evitar faltas devido à alta demanda." },
    { title: "Pagamento", text: "No dia do procedimento, você pagará apenas o valor restante do serviço." },
    { title: "Tolerância de Atraso", text: "Temos uma tolerância de 15 minutos de atraso para não impactar os próximos atendimentos." },
    { title: "Reagendamento", text: "O valor do sinal não é reembolsável. Em caso de emergência, você pode reagendar seu horário uma vez." },
];

// SVG Icons
export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

export const OrnamentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line y1="9.5" x2="35" y2="9.5" stroke="url(#paint0_linear_1_2)"/>
    <path d="M49.9999 1C52.301 3.66667 53.8999 7.4 49.9999 19C46.0999 7.4 47.6988 3.66667 49.9999 1Z" stroke="url(#paint1_linear_1_2)"/>
    <line x1="65" y1="9.5" x2="100" y2="9.5" stroke="url(#paint2_linear_1_2)"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="0" y1="10" x2="35" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#F472B6"/><stop offset="1" stop-color="#FBCFE8"/></linearGradient>
      <linearGradient id="paint1_linear_1_2" x1="50" y1="1" x2="50" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#F472B6"/><stop offset="1" stop-color="#FBCFE8"/></linearGradient>
      <linearGradient id="paint2_linear_1_2" x1="65" y1="10" x2="100" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#F472B6"/><stop offset="1" stop-color="#FBCFE8"/></linearGradient>
    </defs>
  </svg>
);
