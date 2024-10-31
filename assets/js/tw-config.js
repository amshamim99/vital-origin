
tailwind.config = {
    prefix: "vt-",
    theme: {
        screens: {
            xs: "450px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "1640px",
            "4xl": "1740px", 
            "5xl": "1840px", 
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                "2xl": "0px",
              },
        },
        fontFamily: {
            Grotesk:['RocGrotesk'],
            Geogrotesque:['Geogrotesque'],
        },
        fontSize:{
            xs:'13px',
            sm:'14px',
            base:'15px',
            lg:'17px',
            xl:'27px',
            '2xl':'32px',
            '3xl':'34px',
            '4xl':'40px',
            '5xl':'50px',
            '6xl':'55px',
        },
        extend: {
        colors: {
            orange:'#FF8C42',
            orange2:'#F7B663',
            green:'#A2D9A5',
            pinkLight:'#F9ECD8',
            bodyBg:'#FDF9F3',
            primary:'#3B2F2F',
            secondary:'#6E615C',
            secondary2:'#CDCCCC',
            secondary3:'#F9ECD8',
            border1:'#D9D9D9',
            border2:'#F5F5F5',
            border3:'#6F5138',
            border4:'rgba(216, 216, 216, 0.3)',
            border5:'rgba(255, 255, 255, 0.2)',
        }
        }
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen xs': {
                        maxWidth: '400px',
                    },
                    '@screen sm': {
                        maxWidth: '580px',
                    },
                    '@screen md': {
                        maxWidth: '700px',
                    },
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1280px',
                    },
                }
            })
        }
    ]
}