tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit,minmax(200px,1fr))'
    
            },
            fontFamily:{
                roboto:["Roboto Condensed", "sans-serif"],
                playFair:["Playfair Display", "serif"]
            },
            animation:{
                spin_slow:'spin 6s linear infinite'
            },
            colors:{
                lightHover:'#c1d2c9',
                darkHover:'#011508',
                darkTheme: "#011508"
            },
            boxShadow:{
                'dark':'4px 4px 9px #0e1f11',
                'light':'4px 4px 9px #c1d2c9'
            }
        }
    },
    darkMode: "selector"
}