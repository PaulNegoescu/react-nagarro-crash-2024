import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Nav.module.css';

interface Props extends NavLinkProps {
  className?: string;
}

function BrandNavLink({ children, className, ...props }: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx({ [styles.active]: isActive }, className)
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}

export function Nav() {
  return (
    <nav>
      <menu>
        <li>
          <BrandNavLink to="/">Home</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="counter">Counter</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="boardgames">Boardgames</BrandNavLink>
        </li>
      </menu>
    </nav>
  );
}
