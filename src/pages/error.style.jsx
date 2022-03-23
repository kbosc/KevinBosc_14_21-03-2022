import styled from 'styled-components'
import { Link } from "react-router-dom";

export const MainContent = styled.div`
    margin: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MainError = styled.div`
    font-size: 288px;
    font-style: normal;
    font-weight: 700;
    line-height: 411px;
    letter-spacing: 0em;
    @media (max-width: 425px) {
        font-size: 96px;
        line-height: 137px;
}
`
export const Maintext = styled.div`
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 51px;
    letter-spacing: 0em;
    @media (max-width: 425px) {
        font-size: 18px;
        line-height: 26px;
}
`
export const LinkError = styled(Link)`
    text-decoration: underline;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    padding-top: 10rem;
    @media (max-width: 425px) {
        font-size: 14px;
        line-height: 20px;
}
`