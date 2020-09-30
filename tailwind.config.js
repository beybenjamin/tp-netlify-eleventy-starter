module.exports = {

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Open Sans',
      },
      colors: {
        'projet-tonic':'#FFDD67',
      },
      screens:{
        'portrait': {'raw':'(orientation: portrait)'},
      },
    },
  },
  variants: {},
  plugins: [],
};


