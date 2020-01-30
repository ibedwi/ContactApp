import { 
  StyleSheet, 
  Dimensions, 
  StatusBar,
  PixelRatio
} from 'react-native'

let {height, width} = Dimensions.get('window');
let scaleFactorFont = PixelRatio.getFontScale();

let theme = {
    FONT: {
      SIZE: {
        SMALL: 12,
        MEDIUM: 14,
        LARGE: 16,

        H1: 96 * scaleFactorFont,
        H2: 60 * scaleFactorFont,
        H3: 48 * scaleFactorFont,
        H4: 34 * scaleFactorFont,
        H5: 24 * scaleFactorFont,
        H6: 20 * scaleFactorFont,
        SUBTITLE1: 16 * scaleFactorFont,
        SUBTITLE2: 14 * scaleFactorFont,
        BODY1: 16 * scaleFactorFont,
        BODY2: 14 * scaleFactorFont,
        BUTTON: 14 * scaleFactorFont,
        CAPTION: 12 * scaleFactorFont,
        OVERLINE: 10 * scaleFactorFont
      },
      WEIGHT: {
        LIGHT: 200,
        MEDIUM: 600,
        HEAVY: 800
      },
      CATEGORY: {
        H1: {
          SIZE: 96 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: -1.5 * scaleFactorFont,
          WEIGHT: 'LIGHT'
        },
        H2: {
          SIZE: 60 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: -0.5 * scaleFactorFont, 
          WEIGHT: 'LIGHT'
        },
        H3: {
          SIZE: 48 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0,
          WEIGHT: 'REGULAR'
        },
        H4: {
          SIZE: 34 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.25 * scaleFactorFont,
          WEIGHT: 'REGULAR'
        },
        H5: {
          SIZE: 24 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0 * scaleFactorFont,
          WEIGHT: 'REGULAR'
        },
        H6: {
          SIZE: 20 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.15 * scaleFactorFont,
          WEIGHT: 'SEMIBOLD'
        },
        SUBTITLE1: {
          SIZE: 16 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.15 * scaleFactorFont,
          WEIGHT: 'REGULAR'
        },
        SUBTITLE2: {
          SIZE: 14 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.1 * scaleFactorFont,
          WEIGHT: 'SEMIBOLD'
        },
        BODY1: {
          SIZE: 16 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.5,
          WEIGHT: 'REGULAR'
        },
        BODY2: {
          SIZE: 12 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.25 * scaleFactorFont,
          WEIGHT: 'REGULAR'
        },
        BUTTON: {
          SIZE: 14 * scaleFactorFont,
          CASE: 'uppercase' ,
          LETTERSPACING: 1.25 * scaleFactorFont,
          WEIGHT: 'SEMIBOLD'
        },
        CAPTION: {
          SIZE: 12 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 0.4 * scaleFactorFont,
          WEIGHT: 'REGULAR'
        },
        OVERLINE: {
          SIZE: 10 * scaleFactorFont,
          CASE: 'none' ,
          LETTERSPACING: 1.5 * scaleFactorFont,
          WEIGHT: 'REGULAR'
        },
      },
    },
    DEVICE: {
      HEIGHT: height - StatusBar.currentHeight,
      WIDTH: width
    },
    COLOR: {
      PRIMARY_GREEN: '#0BB343',
      PRIMARY_GREEN_ALT_1: '#4CB906',
      PRIMARY_GREEN_ALT_1_RGBA50: 'rgba(76, 185, 6, 0.2)',
      PRIMARY_BLUE: '#007EA5',
      PRIMARY_ORANGE: '#C67900',
      PRIMARY_ORANGE_ALT_1: '#F49600',
      PRIMARY_ORANGE_ALT_1_RGBA50: 'rgba(244, 150, 0, 0.2)',
      SECONDARY_BLUE: '#4DB6AC',
      GRAY: '#aaa',
      GRAY_LIGHT: '#dedede',
      GRAY_LIGHT2: '#F5F5F5',
      PURE_WHITE: '#fff',
      PURE_BLACK: '#000',
      CHART_ORANGE: 'rgba(198, 121, 0, 0.2)'
    },
}

export default theme;