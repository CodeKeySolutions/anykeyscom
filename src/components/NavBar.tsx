

function NavBar() {
  return (
    <div className="navbar bg-primary-500 shadow-xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">AnyKeys</a>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Theme</summary>
              <ul className="p-2 bg-base-200">
                <li><a onClick={() => setTheme('light')}>Light</a></li>
                <li><a onClick={() => setTheme('dark')}>Dark</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
export default NavBar;