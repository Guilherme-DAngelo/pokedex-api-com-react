import { ButtonToggler } from "../../buttons/button-off";
import { Logo } from "./logo";
import { Header } from "./style";



const Menu = () => (
    <Header>
        <a href="/">
            <Logo />
        </a>
        <ButtonToggler />
    </Header>
)

export { Menu }