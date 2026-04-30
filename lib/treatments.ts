export type TreatmentKey =
  // Faciales
  | 'prp'
  | 'meso-ojeras'
  | 'meso-facial'
  | 'peeling'
  | 'radiofrecuencia'
  | 'fraxface'
  | 'fraxface-prp'
  | 'limpieza'
  | 'limpieza-alquimia'
  | 'skinbooster'
  | 'hifu-facial'
  | 'botox'
  | 'relleno'
  | 'radiesse'
  // Capilar
  | 'prp-capilar'
  | 'meso-capilar'
  // Corporales
  | 'criolipolisis'
  | 'body-up'
  | 'peptonas'
  | 'meso-celulitis'
  | 'enzimas-lipoliticas'
  | 'hifu-corporal'
  | 'depilacion'
  // Tratamientos aparte
  | 'nutricion'
  | 'consulta-medica';

export type TreatmentCategory =
  | 'faciales'
  | 'capilar'
  | 'corporales'
  | 'consultas';

export interface Treatment {
  key: TreatmentKey;
  category: TreatmentCategory;
  index: string;
}

export const treatments: Treatment[] = [
  // Faciales (13)
  { key: 'limpieza', category: 'faciales', index: '01' },
  { key: 'limpieza-alquimia', category: 'faciales', index: '02' },
  { key: 'peeling', category: 'faciales', index: '03' },
  { key: 'radiofrecuencia', category: 'faciales', index: '04' },
  { key: 'fraxface', category: 'faciales', index: '05' },
  { key: 'fraxface-prp', category: 'faciales', index: '06' },
  { key: 'hifu-facial', category: 'faciales', index: '07' },
  { key: 'prp', category: 'faciales', index: '08' },
  { key: 'meso-facial', category: 'faciales', index: '09' },
  { key: 'meso-ojeras', category: 'faciales', index: '10' },
  { key: 'skinbooster', category: 'faciales', index: '11' },
  { key: 'botox', category: 'faciales', index: '12' },
  { key: 'relleno', category: 'faciales', index: '13' },
  { key: 'radiesse', category: 'faciales', index: '14' },
  // Capilar (2)
  { key: 'prp-capilar', category: 'capilar', index: '15' },
  { key: 'meso-capilar', category: 'capilar', index: '16' },
  // Corporales (7)
  { key: 'criolipolisis', category: 'corporales', index: '17' },
  { key: 'body-up', category: 'corporales', index: '18' },
  { key: 'peptonas', category: 'corporales', index: '19' },
  { key: 'meso-celulitis', category: 'corporales', index: '20' },
  { key: 'enzimas-lipoliticas', category: 'corporales', index: '21' },
  { key: 'hifu-corporal', category: 'corporales', index: '22' },
  { key: 'depilacion', category: 'corporales', index: '23' },
  // Consultas (2)
  { key: 'consulta-medica', category: 'consultas', index: '24' },
  { key: 'nutricion', category: 'consultas', index: '25' }
];

export const categories: TreatmentCategory[] = [
  'faciales',
  'capilar',
  'corporales',
  'consultas'
];
