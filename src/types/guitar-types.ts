type GuitarComment = {
  id: string,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
  createAt: string,
  guitarId: number,
};

type GuitarComments = GuitarComment[];

type Guitar = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  description: string,
  previewImg: string,
  stringCount: number,
  rating: number,
  price: number,
  comments: GuitarComments,
};

type Guitars = Guitar[];

export type {
  Guitar,
  Guitars,
  GuitarComment,
  GuitarComments
};
