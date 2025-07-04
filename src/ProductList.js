// frontend/src/ProductList.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p._id} className="mb-4 border p-2 rounded">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p>{p.description}</p>
            <p><strong>Price:</strong> ${p.price}</p>
            {p.imageUrl && <img src={p.imageUrl} alt={p.title} className="w-32 mt-2" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
