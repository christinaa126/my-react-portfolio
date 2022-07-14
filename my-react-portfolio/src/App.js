import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// import { ThemeProvider } from "@material-ui/core/styles";
// import { createTheme } from "@material-ui/core/styles";
// import { Typography } from "@mui/material";

function App() {
  return <PortfolioContainer />;
}

export default App;

// function App() {
//   const font = "'Zilla slab' , serif";
//   const theme = createTheme({
//     typography: {
//       fontFamily: font,
//     },
//   });
//   return (
//     <ThemeProvider theme={theme}>
//       <Typography>Christina Christiansen</Typography>
//       <PortfolioContainer />
//     </ThemeProvider>
//   );
// }

// export default App;
