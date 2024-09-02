import React, { useState } from 'react';
import './Inventory.css';

const InventoryForm = () => {
  const [product, setProduct] = useState({ name: '', quantity: '', expirationDate: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct(prevProduct => ({
        ...prevProduct,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, quantity, expirationDate, image } = product;

    if (name && quantity && expirationDate && image) {
      // Assuming successful addition of product
      alert('Product added successfully!');

      // Clear the form
      setProduct({ name: '', quantity: '', expirationDate: '', image: null });
      setImagePreview(null);
    } else {
      alert('Please fill out all fields and upload an image');
    }
  };

  return (
    <div className="inventory-form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="inventory-form">
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={product.expirationDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Product Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
        {imagePreview && (
          <img src={imagePreview} alt="Product Preview" className="image-preview" />
        )}
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
