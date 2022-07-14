import { Outlet, Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="form-1">Form 1</Link>
        </li>
        <li>
          <Link to="form-2">Form 2</Link>
        </li>
        <li>
          <Link to="form-3">Form 3</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
