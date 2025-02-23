

function Navbar({menuname}) {
  return (
    <div><ul className="flex items-center justify-center gap-1 ">
        <MenuItem menu={menuname}/>
        
    </ul></div>
  )
}

const MenuItem = ({menu})=> {
    return menu.map( (element) => <li className="menu_item"> {element} </li>)
}

export default Navbar