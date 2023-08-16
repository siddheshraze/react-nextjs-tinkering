import Link from 'next/link';

export interface NavProps {
    text : string,
    href : string,
    active: Boolean
}

const NavItem = ({ text, href, active } : NavProps) => {
    return (
        <Link href={href} className={`nav__item ${
            active ? "active" : ""
        }`}>
            {text}
        </Link>
    );
};

export default NavItem;