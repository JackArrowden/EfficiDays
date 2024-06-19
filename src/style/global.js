const global = {
  f : {
    display: 'flex'
  },

  f0_6 : {
    display: 'flex',
    flex: 0.6
  },

  f0_75 : {
    display: 'flex',
    flex: 0.75
  },

  f1 : {
    display: 'flex',
    flex: 1
  },

  f4 : {
    display: 'flex',
    flex: 4
  },

  self : { 
    backgroundColor: '#E0FBE2' 
  },

  container : {
    justifyContent: 'center',
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

  imgFrame : {
    overflow: 'hidden'
  },

  img : {
    zIndex: 10
  },

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

  ml_2 : {
    marginLeft: 2
  },

  p2 : {
    padding: 2
  },

  p4 : {
    padding: 4
  },

  p8 : {
    padding: 8
  },

  p16: {
    padding: 16
  },

  setHW(height, width) {
    return {
      height: height,
      width: width
    };
  },
};

export default global;