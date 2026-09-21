import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // GET products
  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // POST product
  const addProduct = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      return;
    }

    try {
      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
        }),
      });

      setName("");
      setPrice("");

      getProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // DELETE product
  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>Product Management</h1>
          <p>Manage your products efficiently</p>
        </div>

        <div className="product-count">
          <span>Total Products</span>
          <strong>{products.length}</strong>
        </div>
      </header>

      {/* Add Product */}
      <section className="add-section">

        <h2>Add New Product</h2>

        <form onSubmit={addProduct} className="product-form">

          <div className="input-group">
            <label>Product Name</label>

            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Price</label>

            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="add-btn">
            + Add Product
          </button>

        </form>

      </section>

      {/* Products */}
      <section className="products-section">

        <div className="section-header">
          <div>
            <h2>All Products</h2>
            <p>View and manage your products</p>
          </div>
        </div>

        <div className="table-container">

          <table className="product-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => (
                <tr key={product.id}>

                  <td>
                    <span className="id-badge">
                      #{product.id}
                    </span>
                  </td>

                  <td className="product-name">
                    {product.name}
                  </td>

                  <td className="price">
                    ₹{product.price}
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}

export default App;