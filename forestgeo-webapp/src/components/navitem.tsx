import Link from 'next/link';

export interface NavItemProps {
    text : string,
    href : string,
    active: Boolean
}

const NavItem = ({ text, href, active } : NavItemProps) => {
    return (
        <Link href={href} className={`nav__item ${
            active ? "active" : ""
        }`}>
            {text}
        </Link>
    );
};

export default NavItem;