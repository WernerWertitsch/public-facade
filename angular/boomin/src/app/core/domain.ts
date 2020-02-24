// Should be interfaces,

export class BaseEntity {
  id: string;
}

export class Category extends BaseEntity {
  name: string;
  description: string;
}

export class Classification extends BaseEntity {
  name: string;
  category: Category;
}

// export class ProductRequest {
//   classification: Classification;
//   value: number;
// }

export class Product extends BaseEntity {
  classification: Classification;
  value: number = 0;
  feePrct: number;
  premium: number;
  cancelled: boolean;
  insuredFrom: Date;
  insured: boolean;
}

export class ClassificationRequest {
  substanceNames: string[];
}



export class ImportedSubstance {
  name: string;
  value: number;
}


