import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box alignItems="center" justifyContent="center" sx={{ opacity: 0.95 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          href={`https://github.com/christinaa126`}
          sx={{ mt: 1 }}
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href={`https://www.linkedin.com/in/christina-christiansen-724475168/`}
          sx={{ mt: 1 }}
        />
      </BottomNavigation>
    </Box>
  );
}
