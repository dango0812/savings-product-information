import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from 'src/components/logo';
import { useBoolean } from 'src/hooks/use-boolean';
import { NAV_MAIN_CONFIG } from '../nav-config';

const RootStyle = styled.header`
    position: fixed;
    width: 100%;
    z-index: 10;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    height: 64px;
    margin: 0 auto;
    padding: 0 24px;

    @media (max-width: 640px) {
        flex-direction: column;
        height: auto;
        padding: 24px;
    }
`;

const NavMenu = styled.ul`
    display: flex;

    @media (max-width: 640px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

const NavMenuItem = styled.li`
    width: 100%;
    margin-left: 16px;
    white-space: nowrap;
    display: flex;

    @media (max-width: 640px) {
        margin: 8px 0;
    }
`;

const NavMenuItemLink = styled.a`
    font-size: 16px;
    padding: 10px 10px;
    color: var(--grey700);
    border-radius: var(--radius-m);
    text-decoration: none;
    width: 100%;
    text-align: left;

    &:hover {
        background-color: var(--greyOpacity100);
    }
`;

export default function MainHeader() {
    const navDrawer = useBoolean();

    return (
        <RootStyle>
            <Container>
                <div css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                `}>
                <Logo width={100} height={24} />
                    <Image
                        css={css`
                            cursor: pointer;
                            @media (min-width: 640px) {
                                display: none;
                            }
                        `}
                        width={26}
                        height={26}
                        onClick={navDrawer.onToggle}
                        src="/assets/icons/ic_hamburger.svg"
                        alt="ic_hamburger.svg"
                    />
                </div>
                <NavMenu isOpen={navDrawer.value}>
                    {NAV_MAIN_CONFIG.map((item) => (
                        <NavMenuItem key={item.title}>
                        <NavMenuItemLink href={item.path}>{item.title}</NavMenuItemLink>
                        </NavMenuItem>
                    ))}
                </NavMenu>
            </Container>
        </RootStyle>
    );
};
