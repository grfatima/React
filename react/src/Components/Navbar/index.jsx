import Links from "../../Mock/Links";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center h-[80px] gap-5">
        <img src="/logo.png.svg" alt="logo" />

        {Links.map(({ id, title, path }) => {
          return <p key={id}>{title}</p>;
        })}
        {
            
        }
      </div>

      <div className="border-1 border-[#067A46] px-5 py-1 text-[#067A46]">
        <p>Log in</p>
      </div>
    </div>
  );
};

export default Navbar;
