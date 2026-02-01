import SidebarLayout from "./SidebarLayout";

function AdminLayout({ children }) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  );
}

export default AdminLayout;
