import { NgClass } from '@angular/common';

export class Businessproperty {
  id!: number;
  businessId!: number;
  consumerId!: number;
  insurancetype!: string;
  propertytype!: string;
  buildingsqft!: string;
  buildingtype!: string;
  buildingstoreys!: number;
  buildingage!: number;
  costoftheasset!: number;
  salvagevalue!: number;
  usefullifeoftheAsset!: number;

  constructor() {}
}
