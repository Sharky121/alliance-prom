import Image from 'next/image'
import Link from "next/link";
import Logo from "@/components/Logo/logo";
import Navigation from "@/components/Navigation/navigation";

const Header = () => {
    return (
        <header className="header header--green">
            <div className="header__container container">
                <Logo/>
                <div className="header__address address address--warehouse">
                    <a className="address__title">Наш склад</a>
                    <a className="address__location" href="?view=contacts">г. Рязань, ул.Связи, 25 стр. 2</a>
                </div>
                <div className="header__address address address--office">
                    <a className="address__title" href="mailto:sales@aliance-prom.ru">sales@aliance-prom.ru</a>
                    <a className="address__location" href="?view=contacts">г. Рязань, ул. Петрова, 10 (офис)</a>
                </div>
                <div className="main-header__phone phone">
                    <a className="phone__link" href="tel:+78002224813">
                        +7 (800) 222-48-13
                        <span className="phone__text">Звонок бесплатный</span>
                    </a>
                    <a className="phone__link" href="tel:+74912427047">
                        +7 (4912) 70-19-81
                        <span className="phone__text">пн-пт 10:00 до 18:00</span>
                    </a>
                </div>
                <Navigation/>
            </div>
        </header>
    );
}

export default Header;
