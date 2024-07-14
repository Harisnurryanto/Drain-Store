const MainBody = (props) => {
  const { children, custom } = props;
  return (
    <div>
      <main className=" bg-blue-200 h-auto mx-80 my-4 p-4 rounded-lg">
        <div
          className={`${custom} overflow-y-scroll h-[560px] w-[860px] custom-scrollbar `}
        >
          {children}
        </div>
      </main>
      <style jsx="true">{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MainBody;
