import { navData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className=" bg-accent space-y-2 font-primary capitalize italic w-[300px] text-center py-10 rounded-xl ">
        {navData.map((item, idx) => {
          return (
            <li key={idx} className="text-white hover:text-body">
              <a className="inline-block py-1" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
