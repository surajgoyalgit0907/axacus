import React from "react";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        // primary: {
        //     main: '#000fff',
        //     light: '#fff',
        //     dark: '#fff000'
        // },
        // secondary: {
        //     main: '#000',
        //     light: '#fff',
        //     dark: '#ff0000'
        // }

        primaryColor: '#2883c0',
        secondaryColor: '#1b60a5',
        textColor1: '#666666',
        textColor2: '#222222',
        whiteColor: '#ffffff',
        blackColor: '#000000',
        gradientColor: 'linear-gradient(128deg, #2983c0 26.39%, #2a84c0 37.52%, #1b60a5 100%)',
        gradientRevertColor: 'linear-gradient(269deg, #2983c0 26.39%, #2a84c0 37.52%, #1b60a5 100%)'
    },

    typography: {

        fontFamily: `"Nunito", sans-serif`,

        h1: {
            fontFamily: `"Amiri", serif;`
        },
        h2: {
            fontFamily: `"Amiri", serif;`
        },
        h3: {
            fontFamily: `"Amiri", serif;`
        },
        h4: {
            fontFamily: `"Amiri", serif;`
        },
        h5: {
            fontFamily: `"Amiri", serif;`
        },
        h6: {
            fontFamily: `"Amiri", serif;`
        }
        // h6: {
        //     fontFamily: `font-family: "Amiri", serif;`
        // }
    },

    breakpoints: {
        values: {

            // Material Breakpoint used by min width container        

            // min with using 
            // xs: 0,
            // sm: 600,
            // md: 900,
            // lg: 1200,
            // xl: 1536,
            // "2xl": 1920, // custom breakpoint



            // custom breakpoint with using  ThemeProvider ka use karna padega main.js file mai add karna padega 

            // xs: 0,
            // sm: 605,
            // md: 921,
            // lg: 1200,
            // xl: 1536,
            // "2xl": 1920, // custom breakpoint



            // Bootstrap Breakpoint used by max width container    

            // xs: 0,
            // sm: 540,
            // md: 720,
            // lg: 960,
            // xl: 1140,
            // xxl: 1320
            // "2xl":1320


            // Bootstrap Breakpoint used by min width    

            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
            // "2xl": 1400


            // Bootstrap Breakpoint used by max width    

            // xs: 0,
            // sm: 575.98,
            // md: 767.98,
            // lg: 991.98,
            // xl: 1199.98,
            // xxl: 1399.98
            // "2xl":1399.98
        }
    }
});