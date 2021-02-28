module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                112: "28rem",
            },
            width: {
                160: "40rem",
            },
            borderRadius: {
                large: "1.4rem",
            },
            boxShadow: {
                outside: "5px 5px 0px 0px #ffd338",
            },
        },
    },
    variants: {
        extend:{
            zIndex: ["hover"],
        }
    },
    plugins: [],
};
