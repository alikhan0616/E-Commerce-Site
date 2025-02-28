import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import Button from '../components/common/Button';
import PageTemplate from '../components/common/PageTemplate';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import QtyCounter from '../components/common/QtyCounter';
import apiEndpoints from '../api/endpoint';
import axios from 'axios';
import { CartContext } from '../ContextAPI';

const ProductDetail = () => {
  const { handleAdd } = useContext(CartContext);

  const [product, setProduct] = useState(null); 
  const { id } = useParams();


  const getProduct = async () => {
    try {
      const url = apiEndpoints.product(id);
      const response = await axios.get(url);
      setProduct(response.data);  
    } catch (error) {
      console.error('Error fetching product:', error.response || error.message); 
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]); 

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <PageTemplate>
      <Container className="my-[30px]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              className="w-full object-contain h-[80vh]"
              src={product.img || 'https://images.unsplash.com/photo-1602832339346-f7501f06e09a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt={product.title || 'product'}
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-800 font-semibold mb-[20px]">
              {`${product.title} | ${product.category.title}` || 'Clothing | Demo Product'}
            </h1>
            <Row className="gap-[40px]">
              <p className="text-[1.05rem] text-slate-700 w-[15%] mb-[8px]">Price :</p>
              <p className="text-[1.05rem] text-slate-700">{product.price || '$250'}</p>
            </Row>
            <Row className="gap-[40px]">
              <p className="text-[1.05rem] text-slate-700 w-[15%] mb-[8px]">Rating :</p>
              <p className="text-[1.05rem] text-slate-700">{product.rating || '2/5'}</p>
            </Row>
            <Row className="gap-[40px]">
              <p className="text-[1.05rem] text-slate-700 w-[15%] mb-[10px]">Category :</p>
              <p className="text-[1.05rem] text-slate-700">{product.category?.title || product.category?.name || 'Clothing'}</p>
            </Row>
            <Row className="gap-[40px]">
              <p className="text-[1.05rem] text-slate-700 w-[15%] whitespace-nowrap">Description :</p>
              <p className="text-[1.05rem] text-slate-700">
                {product.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
              </p>
            </Row>
            <div className="flex mt-[40px]">
              <QtyCounter data={product}/>
            </div>
              <Button onClick = {() => handleAdd(product)} className="mt-[20px] h-[38px] w-[125px]" title="Add to Cart" />
          </Row>
        </Row>
      </Container>
    </PageTemplate>
  );
};

export default ProductDetail;