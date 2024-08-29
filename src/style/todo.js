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

    todo_title: { 
        "color": "#666666",
        "fontSize": 20,
        "padding": 15,
        "marginTop": 0,
        "marginBottom": 10,
        
    },

    DateTime: {
        "color": "#666666",
        "fontSize": 20,
        "padding": 15,
        "textAlign": "left",
        "alignSelf": "flex-start",
        "marginTop": 20,
    },
    
    streak: {
        "color": "#666666",
        "fontSize": 40,
        "padding": 5,
        "backgroundColor": "#BFF6C3",
        "margin": "auto",
        "marginTop": 40,
        "borderRadius": 20,
    },

    StreakNum: {
        "color": "#666666",
        "fontSize": 40,
        "margin": "auto",
        "padding": 20,
        "paddingTop": 0,
        "paddingBottom": 0,
        "color": "#666666",
        "fontWeight": "semibold",
    },   

    card: {
        "borderRadius": 10,
        "flexDirection": "row",
        "alignSelf": "center",
        "width": "90%",
        "padding": 15,
        "marginTop": 0,
        "marginBottom": 10,
    },

    CardContainer: {
        "borderTopLeftRadius": 32,
        "borderTopRightRadius": 32,
        "marginTop": 200,
        "overflow": "scroll",
        "padding": 5,
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
        "fontSize": 16,
        "fontWeight": "semibold",
        "lineHeight": 20,
        "color": "#666666",
    },

    cardDescription: {
        "color": "#888888",
        "fontSize": 15,
    },
};

export default l_todo;