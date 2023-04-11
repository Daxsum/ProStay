import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import NewProject from "@/components/NewProject";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal">
          <NewProject />
        </div>
      </body>
    </html>
  );
}
