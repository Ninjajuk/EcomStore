import React, { useState } from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";

function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cuttedPrice, setCuttedPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [warranty, setWarranty] = useState("");
  const [highlightInput, setHighlightInput] = useState("");
  const [highlights, setHighlights] = useState([]);
  const [brand, setBrand] = useState("");
  const [logoPreview, setLogoPreview] = useState("");
  const [specsInput, setSpecsInput] = useState({ title: "", description: "" });
  const [specs, setSpecs] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleLogoChange = (e) => {
    // Handle logo change here and update logoPreview state
  };

  const addHighlight = () => {
    // Add highlight logic here
  };

  const deleteHighlight = (index) => {
    // Delete highlight logic here
  };

  const handleSpecsChange = (e) => {
    // Handle specs input change here and update specsInput state
  };

  const addSpecs = () => {
    // Add specs logic here
  };

  const deleteSpec = (index) => {
    // Delete specs logic here
  };

  const handleProductImageChange = (e) => {
    // Handle product image change here and update imagesPreview state
  };

  const newProductSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <AdminLayout>
      <form
        onSubmit={newProductSubmitHandler}
        encType="multipart/form-data"
        className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4"
        id="mainform"
      >
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-2 py-1"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            rows={3}
            className="border rounded px-2 py-1"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-between">
            <input
              type="number"
              placeholder="Price"
              className="border rounded px-2 py-1"
              min={0}
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Cutted Price"
              className="border rounded px-2 py-1"
              min={0}
              required
              value={cuttedPrice}
              onChange={(e) => setCuttedPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-4">
            <select
              placeholder="Category"
              className="border rounded px-2 py-1"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* Map and render options here */}
            </select>
            <input
              type="number"
              placeholder="Stock"
              className="border rounded px-2 py-1"
              min={0}
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <input
              type="number"
              placeholder="Warranty"
              className="border rounded px-2 py-1"
              min={0}
              required
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center border rounded">
              <input
                value={highlightInput}
                onChange={(e) => setHighlightInput(e.target.value)}
                type="text"
                placeholder="Highlight"
                className="px-2 flex-1 outline-none border-none"
              />
              <span
                onClick={() => addHighlight()}
                className="py-2 px-6 bg-blue-500 text-white rounded-r hover:shadow-lg cursor-pointer"
              >
                Add
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {/* Map and render highlights here */}
            </div>
          </div>
          <h2 className="font-medium">Brand Details</h2>
          <div className="flex justify-between gap-4 items-start">
            <input
              type="text"
              placeholder="Brand"
              className="border rounded px-2 py-1"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <div className="w-24 h-10 flex items-center justify-center border rounded-lg">
              {!logoPreview ? (
                <p>Image Icon</p>
              ) : (
                <img
                  draggable="false"
                  src={logoPreview}
                  alt="Brand Logo"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <label className="rounded bg-blue-400 text-center cursor-pointer text-white py-2 px-2.5 shadow hover:shadow-lg">
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
              Choose Logo
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 m-2 sm:w-1/2">
          <h2 className="font-medium">Specifications</h2>
          <div className="flex justify-evenly gap-2 items-center">
            <input
              value={specsInput.title}
              onChange={(e) => handleSpecsChange(e, "title")}
              type="text"
              placeholder="Name"
              className="border rounded px-2 py-1"
            />
            <input
              value={specsInput.description}
              onChange={(e) => handleSpecsChange(e, "description")}
              type="text"
              placeholder="Description"
              className="border rounded px-2 py-1"
            />
            <span
              onClick={() => addSpecs()}
              className="py-2 px-6 bg-blue-500 text-white rounded hover:shadow-lg cursor-pointer"
            >
              Add
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {/* Map and render specs here */}
          </div>
          <h2 className="font-medium">Product Images</h2>
          <div className="flex gap-2 overflow-x-auto h-32 border rounded">
            {/* Map and render image previews here */}
          </div>
          <label className="rounded font-medium bg-blue-400 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2">
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleProductImageChange}
              className="hidden"
            />
            Choose Files
          </label>
          <div className="flex justify-end">
            <input
              form="mainform"
              type="submit"
              className="bg-blue-400 uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default ProductForm;
