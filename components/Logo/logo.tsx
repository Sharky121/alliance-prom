import Image from "next/image";
import Link from "next/link";

const Logo = () => (
    <Link className="header__logo logo" href="/">
        <Image className="logo__img"
               src="images/logo-white.svg"
               width={120}
               height={47}
               alt="Логотип Альянс-пром"/>
        <span className="logo__text">Поставки на условиях <br/> FOB и DDP</span>
    </Link>
)

export default Logo;
