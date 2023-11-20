// next
import Image from 'next/image';
// emotion
import { css } from '@emotion/react';
// components
import Logo from 'src/components/logo'
import { useBoolean } from 'src/hooks/use-boolean';
// nav config
import { NAV_MAIN_CONFIG } from '../nav-config'

const Navbar = css`
    position: fixed;
    width: 100%;
    height: 64px;
    z-index: 10;
`;

const NavbarContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    padding: 0 24px;
`;

const NavbarContent = css`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const NavbarMenu = css`
    display: flex;
    @media (max-width: 640px) {
        display: none;
    }
`;

const NavbarMenuItem = css`
    margin-left: 16px;
`;

const NavbarMenuItemLink = css`
    font-size: 16px;
    padding: 10px 10px;
    color: var(--grey700);
    border-radius: var(--radius-m);
    text-decoration: none;
    :hover {
        background-color: var(--greyOpacity100);
    }
`;

const IconHamburger = css`
    cursor: pointer;
    @media (min-width: 640px) {
        display: none;
    }
`;

export default function MainHeader() {
    const navDrawer = useBoolean();

    console.log(navDrawer.value)
    return (
        <header>
            <div css={Navbar}>
                <div css={NavbarContainer}>
                    <Logo width={100} height={24} />
                    <nav css={NavbarContent}>
                        <ul css={NavbarMenu}>
                            {NAV_MAIN_CONFIG.map((item) => (
                                <li key={item.title} css={NavbarMenuItem}>
                                    <a css={NavbarMenuItemLink} href={item.path}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Image
                        css={IconHamburger}
                        width={24} 
                        height={24}
                        onClick={navDrawer.onToggle}
                        src="/assets/icons/ic_hamburger.svg"
                        alt="ic_hamburger.svg"
                    />
                </div>
            </div>
        </header>
      );
  };
