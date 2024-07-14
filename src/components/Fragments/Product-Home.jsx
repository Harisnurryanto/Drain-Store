import ProductCard from "../Elements/Product-Card";

const ProductHome = () => {
  return (
    <article className="block bg-blue-200 w-72 fixed right-0 m-4 p-6 h-auto rounded-lg">
      <h1 className="font-bold mb-2 text-blue-400  text-xl">- Top Products</h1>
      <div className="relative w-full rounded-lg  flex items-start mb-2 shadow-md">
        <input
          className="w-full focus:outline-none focus:ring-2 focus:ring-blue-200  rounded-lg pl-10 pr-3 py-2"
          type="text"
          placeholder="Search products..."
        />
      </div>

      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </article>
  );
};

export default ProductHome;
