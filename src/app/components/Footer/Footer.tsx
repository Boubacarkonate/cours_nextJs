
type Props = {
    element1: string;
    element2: string;
    element3: string;
}

const Footer = ({ element1, element2, element3 }: Props ) => {
  return (
    <div className="bg-lime-500">
        <h2 className="text-center">Footer</h2>
        <ul className="flex justify-center items-center" >
            <li style={{color:'blue'}}>{ element1 }</li>
            <li>{ element2 }</li>
            <li>{ element3 }</li>
        </ul>
    </div>
  )
}

export default Footer