const l_login = {
    global : {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 24,
        marginRight: 24,
    },

    self : {
        alignSelf: 'center',
        textAlign: 'center'
    },
    
    input : {
        paddingLeft: 20,

        borderRadius: 11,
        backgroundColor: '#ffffff',
        flex: 1,
        color: "#444",
        fontSize: 16,
        fontStyle: "normal",
        letterSpacing: 1.4
    },

    btn1 : {
        backgroundColor: "#B0EBB4",
        borderRadius: 11
    },
  
    btn2 : {
        borderRadius: 11
    },

    txt : {
        color: "#444",
        textAlign: "center",
        fontSize: 9,
        fontStyle: "normal",
        letterSpacing: 0.9    
    },

    txt1 : {
        color: "#444",
        textAlign: "center",
        fontSize: 14,
        fontStyle: "normal",
        letterSpacing: 1.4
    },

    txt2 : {
        color: "#0e7315",
        textAlign: "center",
        fontSize: 9,
        fontStyle: "normal",
        letterSpacing: 0.9,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowRadius: 10
    },

    img : {},
  
    setHW(height, width) {
        return {
            height: height,
            width: width
        };
    },

  };
  
  export default l_login;