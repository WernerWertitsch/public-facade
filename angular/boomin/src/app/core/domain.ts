export interface BaseEntity {
  id: string;
}

export interface Category extends BaseEntity {
  name: string;
  description: string;
}

export interface Classification extends BaseEntity {
  name: string;
  category: Category;
}

export interface Product extends BaseEntity{
  classification: Classification;
  feePrct: number;
  insuredValue: number;
  premium: number;
  cancelled: boolean;
  insuredFrom: Date;
}

export class ClassificationRequest {
  substanceNames: string[];
}

export class ProductRequest {
  classification: Classification;
  value: number;
}

export class ImportedSubstance {
  name: string;
  value: number;
}


