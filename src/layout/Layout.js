import Header from "./Header";

function Layout({ title, children, ...props }) {
  return (
    <div className="layout">
      <Header className="layout-header" {...props} />
      <h1>{title}</h1>
    </div>
  );
}

export default Layout;
