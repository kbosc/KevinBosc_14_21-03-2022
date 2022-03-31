import styled from '@emotion/styled';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeDefault } from "../utils/style/theme";
import Box from '@mui/material/Box';

export const LogoHrnet = styled.img `
    width: 10em;
    @media (max-width: 768px) {
        width: 5em;
    }
`
export const TitleHeader = styled.h1 `
    color: ${ThemeDefault.colors.tertiary};
    font-family: 'Permanent Marker', cursive;
    font-size: 3em;
    @media (max-width: 768px) {
        font-size: 2em;
    }
`
export const Header = styled.header `
    display: flex;
    flex-direction: column;
`
export const HeaderUp = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    `
export const SBox = styled(Box)`
    padding: 1em;
    @media (max-width: 425px) {
        padding: 0;
        margin-top: 1em;
    }
`
export const useStyles = makeStyles(() => ({
    customTab: {
      color: ThemeDefault.colors.primary,
    },
  }));
