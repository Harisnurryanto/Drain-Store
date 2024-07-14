const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-1 flex justify-start items-center mb-2">
      <img className="w-12 h-12 bg-slate-400 rounded-lg m-3" />
      <div className="block">
        <h3 className="text-lg font-medium text-gray-800 mb-1">Test</h3>
        <p className="text-gray-600 text-sm">paragraf</p>
      </div>
    </div>
  );
};

export default ProductCard;
