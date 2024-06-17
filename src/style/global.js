const global = {
  f : {
    display: 'flex'
  },

  self : { 
    backgroundColor: '#E0FBE2' 
  },

  container : {
    justifyContent: 'center'
  },

  f_row : {
    flexDirection: 'row'
  },

  f_col : {
    flexDirection: 'column'
  },

  font : {},

  text : { 
    fontSize: 16,
    textAlign: 'center',
    color: 'green',
    margin: 10,
  },

  img : {},

  mt_16 : {
    marginTop: 16
  },

  mt_32 : {
    marginTop: 32
  },

  mt_48 : {
    marginTop: 48
  },

  mt_96 : {
    marginTop: 96
  },

  setHW(height, width) {
    return {
      height: height,
      width: width
    };
  },
};

export default global;