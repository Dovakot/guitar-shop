type GuitarCard = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  description: string,
  previewImg: string,
  stringCount: number,
  rating: number,
  price: number,
};

type Guitars = GuitarCard[];

export type {
  GuitarCard,
  Guitars
};
