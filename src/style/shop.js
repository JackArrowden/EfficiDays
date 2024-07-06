const shopStyle = {
    tokenFrameStyle: (height, width, color = '#FFFFFF', radius = 17) => {
        return {             
            height: height,
            width: width,
            flexDirection: 'row',
            backgroundColor: color,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: radius,
            paddingHorizontal: 10,
            margin: 6
        };
    },
    itemShopStyle: (height, width, color = '#FFFFFF', radius = 17) => {
        return {
            height: height,
            width: width,
            backgroundColor: color,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: radius,
        }
    },
    imageStyle: (height, width, radius) => {
        return {
            borderRadius: radius,
            height: height,
            width: width,
        };
    },
    itemNameStyle : (size) => {
        return {
            fontSize: size,
            marginBottom: 10
        };
    },
    tokenStyle : {
        borderRadius: 20
    },
    currencyStyle : (size) => {
        return {
            fontSize: size,
            fontWeight: 'bold'
        };
    },
    Header: {
        flex: 0.15,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shop: {
        backgroundColor: '#BFF6C3',
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        margin: 10
    },
    nameTab: {
        fontSize: 50,
        fontStyle: 'normal'
    }
};

export default shopStyle;