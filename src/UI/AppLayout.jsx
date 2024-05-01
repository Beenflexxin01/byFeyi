import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
function AppLayout() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
        <SpeedInsights />

        <Analytics />
      </main>
    </>
  );
}

export default AppLayout;
