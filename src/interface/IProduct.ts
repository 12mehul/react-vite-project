import React from "react";

export interface ICommon {
  i: number;
}

export interface IProductPageProps extends ICommon {
  data: IProduct;
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface IReadMore {
  props: string;
}
