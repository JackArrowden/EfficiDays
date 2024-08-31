const l_note = {
    pRel : {
        position: 'relative'
    },

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

    verticalLine : {
        height: 1,
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
    wh_36 : {
        width: 36, 
        height: 36
    },

    noteList : {
        position: 'absolute',
        top: 80,
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

    backArrow : {
        position: 'absolute',
        top: 40,
        left: 30
    },

    doneBtn : {
        color: '#666',
        fontSize: 16,
    },

    txtNote : {
        marginLeft: 12,
        color: '#777',
        fontSize: 16
    },

    self : {
        backgroundColor: '#fff'
    },

    txtMain : {
        paddingLeft: 10,
        paddingRight: 10,
        color: '#666',
        fontSize: 18,
        lineHeight: -10
    },

    segmentTitle : {
        color: '#999'
    },

    segmentType1 : {
        backgroundColor: '#bbb'
    },

    segmentType2 : {
        color: '#aaa'
        // backgroundColor: '#ddd'
    },

    setW(width) {
        return {
            width: width
        };
    },

    setBottom(btm) {
        return {
            position: 'absolute',
            bottom: btm
        };
    },

    hWAuto : {
        height: '100%',
        width: '100%'
    }
};
  
export default l_note;