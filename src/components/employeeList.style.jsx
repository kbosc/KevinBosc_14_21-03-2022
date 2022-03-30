import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ThemeDefault } from "../utils/style/theme"

export const STableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: ThemeDefault.colors.secondaryLighten,
      color: ThemeDefault.colors.tertiary,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    [`&.${tableCellClasses.body}`]: {
      // fontSize: 14,
      // fontWeight: 'bold',
      textAlign: 'left',
    },
  }));
  
export const STableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));