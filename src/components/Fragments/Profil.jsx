const Profil = (props) => {
  const { srcimg, name } = props;
  return (
    <div>
      <header className="flex justify-between mt-4 p-3 rounded-lg  bg-blue-400 mx-80  ">
        <div className="flex ">
          <img
            className="rounded-full object-cover size-16"
            src={srcimg}
            alt="image description"
          ></img>
          <div className="pl-4">
            <p>Welcome back,</p>
            <h1 className="font-semibold text-3xl">{name}</h1>
          </div>
        </div>
        <a
          href="/services"
          className="button button-center bg-blue-600 font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 "
        >
          PRODUCTS
        </a>
      </header>
      <style jsx="true">{`
        .button {
          display: inline-block;
          padding: 5px 10px;
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 15px;
        }

        .button-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Profil;
