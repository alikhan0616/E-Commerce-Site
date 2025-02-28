import { backend_url } from "../../server";

const apiEndpoints = {
  products: (pageSize = 5, catId) =>
    `${backend_url}/products?page=1&pageSize=${pageSize}&sortBy=rating&sort=desc${
      catId ? `&cid=${catId}` : ''
    }`,
  categories: `${backend_url}/categories`,
  product: (id) => `${backend_url}/products/${id}`,
};

export default apiEndpoints;
