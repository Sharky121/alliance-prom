import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="header__main-nav main-nav">
            {/*<button className="main-nav__toggle" type="button">*/}
            {/*    <span className="visually-hidden">Открыть меню</span>*/}
            {/*</button>*/}

            <div className="main-nav__wrapper">
                <div className="site-menu">
                    <ul className="site-menu__list">
                        <li className="site-menu__item">
                            <button className="site-menu__link site-menu__link--catalog" id="catalog">Каталог продукции</button>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/press-form">Пресс-формы</Link>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/customer-service">Сервис</Link>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/service">Услуги</Link>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/news">Новости</Link>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/video">Наши работы</Link>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/articles">Полезное</Link>
                        </li>
                        <li className="site-menu__item">
                            <Link className="site-menu__link" href="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </div>

                <div className="main-nav__submenu submenu">
                    <ul className="submenu__list">
                        <li className="submenu__item">
                            <Link className="submenu__link" href="">Литье
                                пластмасс</Link>
                        </li>
                        <li className="submenu__item">
                            <Link className="submenu__link" href="">Литье
                                цветных металлов</Link>
                        </li>
                        <li className="submenu__item">
                            <Link className="submenu__link" href="">Периферийное
                                оборудование</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
