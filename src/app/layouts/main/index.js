// prop-types
import PropTypes from 'prop-types';
// emotion
import { css } from '@emotion/react';
// header
import MainHeader from './header';

const RootStyle = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export default function MainLayout({ children }) {
    return (
        <div css={RootStyle}>
            <MainHeader />
            {children}
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node
};
  