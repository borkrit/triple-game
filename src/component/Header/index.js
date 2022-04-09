import "./Header.css"

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () =>{
    
    return (
            <header className="root">
                <div className="header">
                    <div className="container">
                    <div className="logo"></div>
                    <ul className="nav">
                        {
                            MENU.map((item)=><li key={item} ><a href="#">{item}</a></li>)
                        }
                        
                    </ul>
                    </div>
                </div>
            </header>
    )
}
export default Header;