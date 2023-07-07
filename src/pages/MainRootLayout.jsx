import { Outlet } from "react-router";

const MainRootLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainRootLayout;
