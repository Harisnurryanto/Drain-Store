const ContentCard = (props) => {
  const { header, description, srcimg, price, addToCart } = props;
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md w-[265px] h-[360px] m-2 p-3 px-4 ">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer ">
          <img
            className="rounded-lg object-cover size-48"
            src={srcimg}
            alt="image description"
          ></img>
        </figure>
        <div className="p-1 ">
          <div className="h-[91px]">
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              {header.substring(0, 20)}
            </h5>
            <p className="text-gray-700 text-base mb-3">
              {description.substring(0, 50)} ...
            </p>
          </div>
          <div className="flex justify-between  ">
            <p className="text-gray-900 text-lg mb-3 ">
              Rp.{" "}
              {price.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </p>
            <button
              onClick={addToCart}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
