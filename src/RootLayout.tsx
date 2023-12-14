import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

export default function RootLayout() {
  return (
    <Box h="100vh" w="100%">
        <NavBar />
      <Outlet />
    </Box>
  );
}
