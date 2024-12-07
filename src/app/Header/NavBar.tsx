
type Props = {
    name_li1: string;
    name_li2: string;
    name_li3: string;
};

const NavBar = ({ name_li1, name_li2, name_li3 }: Props) => {
  return (
    <nav className="flex justify-center items-center bg-orange-300">
        <ul className="flex space-x-6 items-center">
            <li>{name_li1}</li>
            <li>{name_li2}</li>
            <li>{name_li3}</li>
        </ul>
    </nav>
  )
}

export default NavBar;