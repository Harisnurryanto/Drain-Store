import NavbarNav from "../Elements/Navbar-Link";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { RiDrinks2Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuDessert } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="block items-center justify-between flex-wrap bg-blue-400 p-6 pr-16 max-w-5xl m-4 rounded-lg h-auto fixed">
      <div className="flex items-center flex-shrink-0 text-white mb-16">
        <span className="font-bold text-3xl -tracking-tighter  text-blue-100 jus">
          DRAIN TECH
        </span>
      </div>

      <div className="items-center flex-shrink-0 text-white mb-64 relative">
        <NavbarNav
          icon={<GoHome className="m-1 mr-4 size-7" color="white" />}
          margin={"mb-5"}
          to={"/dashboard"}
        >
          Home
        </NavbarNav>
        <NavbarNav
          icon={<FcAbout className="m-1 mr-4 size-7" />}
          margin={"mb-5"}
          to={"/about"}
        >
          About
        </NavbarNav>
        <NavbarNav
          margin={"mb-5"}
          icon={
            <MdOutlineRestaurantMenu
              className="m-1 mr-4 size-7"
              color="white"
            />
          }
        >
          <div className="relative">
            <button onClick={toggleDropdown} className="">
              Menu
            </button>
            {isDropdownOpen && (
              <div className=" absolute w-44 bg-blue-500  focus:outline-none rounded-md focus:ring-2 focus:ring-inset focus:ring-white mt-1 px-2">
                <NavbarNav
                  margin={"m-1"}
                  icon={
                    <IoFastFoodOutline
                      className="m-1 mr-4 size-7"
                      color="white"
                    />
                  }
                >
                  Foods
                </NavbarNav>
                <NavbarNav
                  margin={"m-1"}
                  icon={
                    <RiDrinks2Line className="m-1 mr-4 size-7" color="white" />
                  }
                >
                  Drinks
                </NavbarNav>
                <NavbarNav
                  margin={"m-1"}
                  icon={<LuDessert className="m-1 mr-4 size-7" color="white" />}
                >
                  Desserts
                </NavbarNav>
              </div>
            )}
          </div>
        </NavbarNav>
        <NavbarNav
          margin={"mb-5"}
          icon={<FaRegMessage className="m-1 mr-4 size-7" color="white" />}
        >
          Message
        </NavbarNav>
        <NavbarNav
          margin={""}
          icon={<FiShoppingCart className="m-1 mr-4 size-7" color="white" />}
          to={"/cart"}
        >
          Cart
        </NavbarNav>
      </div>

      <div className="items-center flex-shrink-0 mb-1">
        <NavbarNav margin={""}>Settings</NavbarNav>
      </div>
    </nav>
  );
};

export default Navbar;
