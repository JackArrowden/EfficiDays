const l_profile = {
    global : {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 24,
        marginRight: 24,
    },

    self : {
        alignSelf: 'center',
        textAlign: 'center'
    },

    line : {
        height: 1, // Chiều cao của đường kẻ
        backgroundColor: '#bbb', // Màu sắc của đường kẻ, có thể tùy chỉnh theo nhu cầu
        marginVertical: 16,
    },

    circle1 : {
        borderRadius: 9999,
        backgroundColor: '#867f7f'
    },

    circle2 : {
        borderRadius: 9999,
        backgroundColor: '#ffffff'
    },

    in4Frame : {
        paddingLeft: 20,
        margin: "auto",
        borderRadius: 11,
        backgroundColor: '#ffffff',
    },

    txtFrame : {
        marginTop: 3,
        marginBottom: 3,
    },

    in4Txt : {
        color: "#888",
        fontSize: 12,
        fontStyle: "normal",
        letterSpacing: 1.4
    },

    in4Txt2 : {
        color: "#444",
        fontSize: 13,
        fontStyle: "normal",
        letterSpacing: 1.4
    },

    btn1 : {
        backgroundColor: "#B0EBB4",
        borderRadius: 11
    },

    txt1 : {
        color: "#444",
        textAlign: "center",
        fontSize: 14,
        fontStyle: "normal",
        letterSpacing: 1.4
    },

    iconFrame : {
        height: 28,
        width: 28
    },

    setHW(height, width) {
        return {
            height: height,
            width: width
        };
    },

  };
  
  export default l_profile;