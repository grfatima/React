import Links from "../../Mock/Links";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src="/logo.png.svg" alt="logo" />
      </div>

      <div className="links">
        {Links.map(({ id, title, path }) => {
          return <p key={id}>{title}</p>;
        })}
      </div>

      <div className="button">
        <p>Log in</p>
      </div>
    </div>
  );
};

export default Navbar;
