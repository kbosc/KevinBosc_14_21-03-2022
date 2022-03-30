import { ThemeDefault } from "../utils/style/theme";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const SButtonLeft = styled(Button)(() => ({
    backgroundColor: ThemeDefault.colors.tertiary,
    "&:hover": {
      backgroundColor: ThemeDefault.colors.primary,
      color: ThemeDefault.colors.white,
    },
  }));
export const SButtonRight = styled(Button)(() => ({
    backgroundColor: ThemeDefault.colors.white,
    color: ThemeDefault.colors.tertiary,
    "&:hover": {
      backgroundColor: ThemeDefault.colors.primary,
      color: ThemeDefault.colors.white,
    },
  }));