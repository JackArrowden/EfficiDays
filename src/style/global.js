const global = {
  f : {
    display: 'flex'
  },

  f0_3 : {
    display: 'flex',
    flex: 0.3
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

  f6 : {
    display: 'flex',
    flex: 6
  },

  self : { 
    backgroundColor: '#E0FBE2' 
  },

  center : {
    justifyContent: 'center',
    alignItems: 'center'
  },

  container : {
    justifyContent: 'center',
  },

  alignItems_center: {
    alignItems: 'center',
  },

  f_row : {
    display: 'flex',
    flexDirection: 'row'
  },

  f_col : {
    display: 'flex',
    flexDirection: 'column'
  },

  spaceBtw : {
    justifyContent: 'space-between'
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

  mt_80 : {
    marginTop: 80
  },

  mt_96 : {
    marginTop: 96
  },

  mb_16 : {
    marginBottom: 16
  },

  mb_32 : {
    marginBottom: 32
  },

  mb_48 : {
    marginBottom: 48
  },

  mb_96 : {
    marginBottom: 96
  },

  ml_2 : {
    marginLeft: 2
  },

  ml_24 : {
    marginLeft: 24
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

  p20: {
    padding: 20
  }, 

  bdRds : {
    borderRadius: 12
  },

  setHW(height, width) {
    return {
      height: height,
      width: width
    };
  },
};

export default global;