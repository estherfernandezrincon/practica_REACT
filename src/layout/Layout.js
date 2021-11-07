import Header from "./layout";

function Layout({ title, children }) {
  return (
    <div className="layout">
      <Header className="layout-header" />
    </div>
  );
}

export default Layout;
