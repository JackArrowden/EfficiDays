const l_todo = {
    checkBox(color, radius) {
        return {
            width: 25,
            height: 25,
            borderRadius: radius,
            borderWidth: 2,
            borderColor: color,
        }
    },

    bg_darkgreen: {
      "backgroundColor": "#BFF6C3" 
    },

    card: {
        "flexDirection": "row",
        "alignSelf": "center",
        "width": "90%",
    },

    cardContent: {
        "flexDirection": "column",
        "paddingLeft": 10,
    },

    cardTitle: {
        "fontSize": 20,
        "fontWeight": "bold",
    },

    cardDescription: {
        "fontSize": 15,
    },
};

export default l_todo;