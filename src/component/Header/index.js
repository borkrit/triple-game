import s from "./Header.module.css";
import logoPng from "../../assets/logo.png";
import Container from "../Container/Container";

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () =>{
    
    return (
            <header className={s.root}>
                <div className={s.header}>
                    <Container className={s.headerWrap} >
                        <div className={s.logo}>
                            {/* <img src={logoPng} alt="Logo" /> */}
                        </div>
                        <ul className={s.nav}>
                            {
                                MENU.map((item)=><li key={item} ><a href="#">{item}</a></li>)
                            }
                            
                        </ul>
                    </Container>
                </div>
            </header>
    )
}
export default Header;