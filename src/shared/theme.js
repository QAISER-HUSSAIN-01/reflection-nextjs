import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography:{
      h6:{
        '@media(max-width: 600px)':{
            fontSize:'16px'
        }
      }
    },
    components:{
        MuiListItemIcon:{
            styleOverrides:{
                root:{
                    fontSize:'18px',
                    justifyContent:'center',
                }
            }
        },
        MuiListItemText:{
            styleOverrides:{
                primary:{
                    fontSize:'14px',
                    flex:1
                }
            }
        },
        MuiAvatar:{
            styleOverrides:{
                root:{
                    height:'30px',
                    width:'30px',
                    '@media(max-width: 600px)':{
                        height:'25px',
                        width:'25px',
                    }
                }
            }
        }
    }
})