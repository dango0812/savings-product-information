// emotion
import { css } from '@emotion/react';
// components

//  icon
import { FiChevronRight } from 'react-icons/fi'


const footer = css`
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: auto;

    @media screen and (max-width:840px) {
        padding: 5rem 0; 
    }

`;


const FooterCard = css`
    padding: 3rem 1rem;
    position: relative;
    gap: 2rem;
    border-radius: 1rem;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    
    @media (min-width: 840px) {

        flex-direction : row;

    }


`;

const FooterLeft = css`
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 0.5rem;
`;


const FooterContent = css`
    font-size: 13px;
    color: #333;
`;

const FooterRight = css`
   
    flex-basis: 50%;
    width: 100%;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    display: grid;
    align-items: center;

    @media screen and (min-width:840px) {
     
        grid-template-columns: repeat(3, 1fr);
        padding-bottom: 1rem;
    }

   
`;


const linkGroup = css`
    
`;

const groupTitle = css`
    display: block;
    font-weight: 600;
    margin-bottom: .5rem;
`;

const FooterTitle = css`
    
    display: block;
    font-weight: 600;
    margin-bottom: .5rem;
    font-size:20px;
`;

const footerList = css`
    font-size: 15px;
    list-style: none;
`;

const icon = css`

`;
export default function Footer() {

    return (
        <div css={footer}>
            

                <div css={FooterCard}>
                    <div css={FooterLeft}>
                        <Logo width={80} height={20} />
                        <div css={FooterContent}>
                        <div css={linkGroup}>
                            <sapn css={FooterTitle}>
                                Youtube
                            </sapn>
                            <sapn css={FooterTitle}>
                                Instagram
                            </sapn>
                            <sapn css={FooterTitle}>
                                Pinterest
                            </sapn>
                            
                        </div>
                        </div>
                    </div>


                    <div css={FooterRight}>
                        {/* Group 1 */}
                        <div css={linkGroup}>
                            <sapn css={groupTitle}>
                                강좌 바로가기
                            </sapn>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                포토샵
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                일러스트레이터
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                피그마
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                XD
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                Sketch
                            </li>
                        </div>

                        {/* Group 2 */}
                        <div css={linkGroup}>
                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                Web Design
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                Web Coding
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                Invision
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                Three.js
                            </li>
                        </div>

                        {/* Group 3 */}
                        <div css={linkGroup}>
                            <sapn css={groupTitle}>
                                페이지 바로가기
                            </sapn>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                소개
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                멤버쉽
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                메거진
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                북마크
                            </li>

                            <li css={footerList}>
                                <FiChevronRight css={icon} />
                                무료 소스
                            </li>
                        </div>
                    </div>
                </div>


            </div>

    );
};
