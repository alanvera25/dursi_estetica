export type Review = {
  author: string;
  initials: string;
  photoUrl?: string;
  rating: number;
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    author: 'Santiago Di Lena',
    initials: 'SD',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Increíble atención !\nSuper recomendable el tratamiento capilar !!\nMe sentí muy cuidado y guiado en cada proceso.'
  },
  {
    author: 'Natalia Belen Andreoli Galati',
    initials: 'NA',
    rating: 5,
    date: 'Hace 4 meses',
    text: 'Las chicas siempre te atienden con una sonrisa, te llenan de linda energía. El espacio es un 1000!!! No dejen de pasar por DURSI estética y darse un mimo. 🫶...'
  },
  {
    author: 'laura benitez',
    initials: 'LB',
    rating: 5,
    date: 'Hace 4 meses',
    text: 'Las chicas son las mejores, súper profesionales y sobre toda unas personas muy amorosas, me hago varias cositas con ellas y siempre un mil! ❤️✨'
  }
];
