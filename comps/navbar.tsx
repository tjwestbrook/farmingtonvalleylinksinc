import Link from 'next/link'
import { Logo }  from './logo'
import {  useRouter } from 'next/router'

const NavMenu = ["home","about","programs","news","contact","members only"];
const AboutMenu = ["presidents message","chapter history","chapter members"]
const ProgramMenu = ["the arts","service to youth","national trends & services","international trends & services","health & human services"]
// const NewsMenu = [api call]

function ActiveLink(path: String) {
  return useRouter().asPath === "/"+(path !== "home" ? path : "") ? "var(--links-color)" : ""
}

export const Navbar = () => {
  return (
    <nav>
      <Logo />
      {NavMenu.map((m,i,a) =>
        <div key={i} className="nav-menu" style={{ color: ActiveLink(m) }}>
          <Link key={i} href={"/"+(i==0||i==a.length-1?"":m)}>
            {m.toUpperCase()}
          </Link>
          <div className="sub-menu">
            {m=="about"?AboutMenu.map((mm,ii) =>
              <Link key={ii} href={m+"#"+mm.replaceAll(" ","")}>{mm.toUpperCase()}</Link>
            ):m=="programs"?ProgramMenu.map((mm,ii) =>
              <Link key={ii} href={m+"#"+mm.replaceAll(" ","")}>{mm.toUpperCase()}</Link>
            // ):m=="news"?NewsMenu.map((mm,ii) =>
            //   <Link key={ii} href={"/"+mm.trim()}>{mm.toUpperCase()}</Link>
            ):""}
          </div>
        </div>
      )}
    </nav>
    );
}