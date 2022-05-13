type GuitarComment = {
  id: string,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
  createAt: string,
  guitarId: number
};

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
  comments: GuitarComment[],
};

type Guitars = GuitarCard[];

export type {
  GuitarComment,
  GuitarCard,
  Guitars
};
