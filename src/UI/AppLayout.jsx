import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
