import { Outlet } from "react-router";

const MainRootLayout = () => {
  return (
    <main>
      <h1>Main Root layout.</h1>
      <Outlet />
    </main>
  );
};

export default MainRootLayout;
