const l_todo = {
    checkBox(color, radius) {
        return {
            width: 25,
            height: 25,
            borderRadius: radius,
            borderWidth: 2,
            borderColor: color,
            backgroundColor: color,
        }
    },

    bg_darkgreen: {
        backgroundColor: "#BFF6C3" 
    },

    card: {
        "borderRadius": 10,
        "flexDirection": "row",
        "alignSelf": "center",
        "width": "90%",
        "padding": 15,
        "marginTop": 10,
        "marginBottom": 10,
    },

    CardContainer: {
        "borderTopLeftRadius": 10,
        "borderTopRightRadius": 10,
        "marginTop": 200,
        "overflow": "scroll",
        "padding": 10,
    },

    bg_white: {
      "backgroundColor": "#FFFFFF"
    },

    cardContent: {
        "flexDirection": "column",
        "paddingLeft": 10,
        "gap": 10,
    },

    cardTitle: {
        "fontSize": 20,
        "fontWeight": "bold",
        "lineHeight": 20,
    },

    cardDescription: {
        "fontSize": 15,
    },
};

export default l_todo;