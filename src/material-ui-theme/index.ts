import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { grey, blueGrey } from '@material-ui/core/colors';
import { PaletteOptions, SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';

const breakpoints = createBreakpoints({});

export const commonColors = {
  mainBlack: '#1f1f2b',
  blackButton: '#545865',
  lightGray: '#f8f8fb',
  lightBlue: '#dbf2ff',
  backgroundGray: '#efeff5',
  grayHover: '#e0e0ea',
  grayLines: '#cbcbdc',
  lavenderGray: '#cacadc',
  grayMedium: '#8c8ca5',
  white: '#fff',
  ghostWhite: '#f9f9fb',
  gray: '#9c9caf',
  green: '#44ab5c',
  error: '#f82417',
  errorUnderline: '#ff6a61',
  lightError: '#ffedee',
  borderError: '#ff8f8f',
  textError: '#f90c0c',
  successNotification: '#01ca69',
  warningNotification: '#f4b000',
  grayDisabled: '#adadc1',
  yellow: '#df7b00',
};

export const boxShadow = '0 6px 20px rgba(109, 104, 139, .2)';

export const defaultBoxBorder = `1px solid ${commonColors.grayLines}`;

export const transition = '500ms all cubic-bezier(.4, 0, .2, 1)';

export const leftNavigationWidth = 200;

export const leftNavigationCollapsedWidth = 80;

export const TOP_MARGIN = 120;

export const BOTTOM_MARGIN = 80;

export const fontWeight = {
  lighter: 100,
  thin: 300,
  regular: 400,
  semiBold: 500,
  bold: 600,
};

export const modalWidth = {
  small: 540,
  medium: 690,
  large: 890,
};

export const inputWidth = {
  small: 290,
  medium: 340,
  large: 400,
};

export const inputHeight = {
  small: 36,
  medium: 38,
};

export const materialTheme = (palette: PaletteOptions) =>
  createMuiTheme({
    palette: {
      ...palette,
      background: {
        default: commonColors.backgroundGray,
      },
    },
    overrides: {
      MuiAvatar: {
        root: {
          width: 48,
          height: 48,
          fontWeight: fontWeight.bold,
          letterSpacing: -0.5,
        },
        colorDefault: {
          color: commonColors.blackButton,
          backgroundColor: palette.action?.selected,
        },
      },
      MuiFormControl: {
        root: {
          width: '100%',
        },
      },
      MuiFilledInput: {
        root: {
          '&.Mui-disabled': {
            margin: '0 -10px',
            backgroundColor: commonColors.ghostWhite,
          },
        },
        underline: {
          '&.Mui-disabled:before': {
            borderBottom: `1px solid ${commonColors.grayHover}`,
            marginRight: '10px',
            marginLeft: '10px',
          },
        },
      },
      MuiInputLabel: {
        root: {
          color: commonColors.blackButton,
          whiteSpace: 'nowrap',
          fontSize: 14,
          lineHeight: '17px',
          '&.MuiInputLabel-animated': {
            transition,
          },
          '&.MuiFormLabel-filled, &.MuiInputLabel-shrink': {
            fontSize: 12,
            color: commonColors.mainBlack,
            lineHeight: '15px',
          },
        },
        filled: {
          transform: 'translate(0, 10px) scale(.75)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(0, 10px) scale(.75)',
          },
        },
        shrink: {
          transform: 'translate(0, 1.5px)',
          transformOrigin: 'top left',
        },
      },
      MuiInputBase: {
        input: {
          '&.MuiInputBase-input': {
            fontWeight: fontWeight.semiBold,
          },
          '&.Mui-disabled': {
            backgroundColor: commonColors.ghostWhite,
            padding: '6px 12px 10px',
          },
          '&:-webkit-autofill': {
            transitionDelay: '9999999s',
            transitionProperty: 'background-color, color',
          },
        },
      },
      MuiInput: {
        underline: {
          '&:before': {
            borderBottom: `1px solid ${grey[300]}`,
          },
          '&:after': {
            borderBottom: `2px solid ${(palette.secondary as SimplePaletteColorOptions).main}`,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid ${grey[500]}`,
          },
        },
      },
      MuiFormHelperText: {
        root: {
          marginTop: 2,
          lineHeight: '17px',
          '&.MuiFormHelperText-filled': {
            color: commonColors.blackButton,
          },
          '&.Mui-error': {
            color: commonColors.error,
          },
        },
      },
      MuiCheckbox: {
        root: {
          color: blueGrey[200],
        },
      },
      MuiButton: {
        root: {
          borderRadius: '10px',
          fontWeight: fontWeight.bold,
          backgroundColor: (palette.primary as SimplePaletteColorOptions)?.main,
          textTransform: 'none',
          fontSize: '18px',
          lineHeight: '22px',
          '&:hover': {
            backgroundColor: palette.action?.hover,
          },
          '&:visited, &:active': {
            backgroundColor: palette.action?.active,
          },
          '&$disabled': {
            backgroundColor: palette.action?.disabled,
          },
        },
        label: {
          color: commonColors.white,
        },
        contained: {
          boxShadow: 'none',
          '&:hover, &:active': {
            boxShadow: 'none',
          },
          '&:hover': {
            backgroundColor: palette.action?.hover,
            '&$disabled': {
              backgroundColor: palette.action?.disabled,
            },
          },
          '&$disabled': {
            backgroundColor: palette.action?.disabled,
          },
        },
        outlined: {
          '& .MuiButton-label': {
            color: 'inherit',
          },
        },
        endIcon: {
          marginLeft: '0',
          position: 'absolute',
          right: '20px',
        },
      },
      MuiDrawer: {
        paperAnchorDockedLeft: {
          borderRight: 0,
        },
      },
      MuiMenuItem: {
        root: {
          fontSize: 16,
          lineHeight: '14px',
          '& .MuiTypography-body1': {
            fontSize: 16,
            lineHeight: '14px',
          },
        },
      },
      MuiList: {
        padding: {
          paddingTop: 14,
          paddingBottom: 14,
        },
      },
      MuiListItem: {
        root: {
          '&.Mui-selected .MuiTypography-body1': {
            fontWeight: fontWeight.bold,
          },
        },
        button: {
          '&:hover': {
            backgroundColor: commonColors.backgroundGray,
          },
        },
      },
      MuiBadge: {
        colorSecondary: {
          color: commonColors.white,
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 10,
        },
        elevation1: {
          boxShadow: 'unset',
        },
      },
      MuiTableCell: {
        root: {
          color: commonColors.mainBlack,
          padding: '21px 14px 22px 25px',
        },
        head: {
          fontSize: 14,
          color: commonColors.mainBlack,
          lineHeight: '17px',
          padding: '11px 14px 10px 25px',
          '& svg': {
            marginLeft: '6px',
            fontSize: '14px',
          },
          '& div': {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            '&:hover': {
              opacity: 0.5,
            },
          },
        },
        body: {
          position: 'relative',
          '& svg': {
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
          },
        },
      },
      MuiTableRow: {
        root: {
          transition: '.5s',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
      MuiTooltip: {
        tooltip: {
          maxWidth: 'auto',
          padding: '8px 16px',
          fontWeight: fontWeight.bold,
          fontSize: 14,
          backgroundColor: commonColors.mainBlack,
          borderRadius: 6,
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          [breakpoints.up('sm')]: {
            textTransform: 'none',
            minWidth: 'auto',
            color: commonColors.mainBlack,
          },
          '&:first-child': {
            paddingLeft: 0,
            [breakpoints.up('sm')]: {
              paddingLeft: 0,
            },
          },
        },
        wrapper: {
          fontSize: 20,
          fontWeight: fontWeight.regular,
        },
        textColorInherit: {
          color: commonColors.gray,
          '&.Mui-selected': {
            color: commonColors.mainBlack,
          },
        },
      },
      MuiTabs: {
        root: {
          position: 'relative',
          borderBottom: `1px solid ${commonColors.grayLines}`,
        },
      },
      MuiBreadcrumbs: {
        ol: {
          color: commonColors.blackButton,
          fontSize: 14,
          marginBottom: 16,
        },
        li: {
          fontSize: 14,
          '& > .breadcrumb-link': {
            fontSize: 14,
            color: commonColors.blackButton,
            fontWeight: fontWeight.semiBold,
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
      MuiExpansionPanel: {
        root: {
          '&:before': {
            display: 'none',
          },
        },
      },
      MuiExpansionPanelSummary: {
        root: {
          padding: 0,
          minHeight: 'unset',
          '&.Mui-expanded': {
            minHeight: 'unset',
          },
        },
        content: {
          margin: 0,
          alignItems: 'center',
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
      MuiExpansionPanelDetails: {
        root: {
          padding: 0,
        },
      },
      MuiSnackbarContent: {
        message: {
          display: 'flex',
          alignItems: 'flex-start',
          fontSize: 14,
          fontWeight: fontWeight.semiBold,
          lineHeight: '24px',
          color: commonColors.white,
          maxWidth: 600,
        },
      },
    },
    typography: {
      fontFamily: 'Montserrat, Times New Roman',
      caption: {
        fontSize: 12,
      },
      body1: {
        fontSize: 14,
        lineHeight: '17px',
      },
      body2: {
        fontSize: 12,
      },
      subtitle1: {
        fontSize: 16,
        lineHeight: '20px',
        fontWeight: fontWeight.semiBold,
        textTransform: 'uppercase',
        letterSpacing: '.1em',
      },
    },
  });
