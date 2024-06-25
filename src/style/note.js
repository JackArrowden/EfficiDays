const l_note = {
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

    searchBar : {
        paddingLeft: 15,
        borderRadius: 20,
        backgroundColor: '#BFF6C3'
    },

    line : {
        width: 1,
        height: '70%',
        backgroundColor: '#bbb',
    },

    img : {
        tintColor: '#888'
    },

    img2 : {
        marginLeft: 8,
        tintColor: '#5B5B5B'
    },

    wh_20 : {
        width: 20, 
        height: 20
    },

    wh_24 : {
        width: 24, 
        height: 24
    },

    wh_28 : {
        width: 28, 
        height: 28
    },

    noteHeader : {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#B0EBB4'
    },

    notePreview : {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#FFF'
    },

    noteText1 : {
        paddingTop: 6,
        paddingLeft: 15,
        color: '#555',
        fontSize: 12,
        letterSpacing: 1.4
    },

    noteText2 : {
        paddingTop: 5,
        paddingLeft: 15,
        color: '#888',
        fontSize: 12,
        letterSpacing: 1.4
    },

    circle : {
        borderRadius: 9999,
        backgroundColor: '#B0EBB4',
        position: 'relative'
    },

    noteAbs : {
        position: 'absolute',
        top: -5,
        right: -5
    },

    setW(width) {
        return {
            width: width
        };
    },

    hWAuto : {
        height: '100%',
        width: '100%'
    }
};
  
export default l_note;