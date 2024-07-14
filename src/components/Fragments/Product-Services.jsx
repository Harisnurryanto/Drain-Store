import { useState, useEffect } from "react";
import MainBody from "../Elements/Main-Body/index.jsx";

const ProductServices = (props) => {
  const { Token, axiosJwt, Id } = props;
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    if (Id) {
      getProducts((data) => {
        setProducts(data);
      });
    }
  }, [Token, axiosJwt, Id]);

  const getProducts = async (callback) => {
    try {
      const response = await axiosJwt.get(
        `http://localhost:3000/api/user/${Id}/products`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      callback(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      price,
      description,
    };

    try {
      console.log("Sending data:", productData); // Log the data being sent

      const response = await axiosJwt.post(
        `http://localhost:3000/api/user/${Id}/products`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Product created successfully", response.data);
      setProducts([...products, response.data.data]);
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request data:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axiosJwt.delete(
        `http://localhost:3000/api/user/${Id}/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setProducts(products.filter((product) => product.id !== id));
      setShowConfirmModal(false);
      setProductIdToDelete(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const confirmDeleteProduct = (id) => {
    setShowConfirmModal(true);
    setProductIdToDelete(id);
  };

  return (
    <div>
      <MainBody>
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Product Management
        </h1>
        <div className="mb-4">
          <form onSubmit={handleCreateProduct}>
            <input
              type="text"
              className="border p-2 mr-2"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              className="border p-2 mr-2"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              className="border p-2 mr-2"
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="bg-blue-600 text-white py-2 px-4 mr-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Add Product
            </button>
          </form>
        </div>
        <table className="min-w-full bg-neutral-200 ">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Description</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">
                  Rp.{" "}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td className="border px-4 py-2">
                  {product.description.substring(0, 100)} ...
                </td>
                <td className="border px-4 py-2 flex">
                  <button
                    className="bg-blue-600 text-white py-2 px-4 mr-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                    // onClick={() => handleEditProduct(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => confirmDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showConfirmModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl mb-4">
                Are you sure you want to delete this product?
              </h2>
              <div className="flex justify-end">
                <button
                  className="bg-gray-300 text-black py-2 px-4 mr-2 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                  onClick={() => setShowConfirmModal(false)}
                >
                  No
                </button>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
                  onClick={() => handleDeleteProduct(productIdToDelete)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </MainBody>
    </div>
  );
};

export default ProductServices;
