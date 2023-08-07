import {generateApiObject} from '.';

export const GetProductListService = () =>
  generateApiObject({
    method: 'get',
    url: 'products/products',
  });

export const GetProductDetailService = (id: number) =>
  generateApiObject({
    method: 'get',
    url: 'products/products',
  });
