import Header from "../Header/Header";

function Layout(props) {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
    </>
  );
}
export default Layout;
