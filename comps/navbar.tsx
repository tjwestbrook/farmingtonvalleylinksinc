import Link from 'next/link'
import { Logo }  from './logo'
import { useRouter } from 'next/router'

const NavMenu = ["home","about us","programs","news","contact","members only"];
const NewsMenu = ["event 1","scholarship 1"]

function Active(p: String) {
  const activePath = useRouter().asPath
  const subPath = activePath.indexOf('#')
  const path = subPath == -1 ? activePath : activePath.substring(0, subPath)
  return path == "/"+(p == "home" ? "" : p) ? "nav-menu-active" : "nav-menu"
}

export const Navbar = () => {
  return (
    <nav>
      <Logo />
      {NavMenu.map((m,i,a) =>
        <div key={i} className={Active(m.replace(/\s/g, ""))}>
          <Link key={i} href={"/"+(i==0?"":m.replace(/\s/g, ""))}>
            {m.toUpperCase()}
          </Link>
          <div className="sub-menu">{([
                [],["presidents message","chapter history","chapter members"],
                ["the arts","service to youth","national trends & services","international trends & services","health & human services"]
                ,NewsMenu,[],[]
              ][i]
              ).map((mm,ii) =>
              <Link key={ii} href={m.replace(/\s/g, "")+"#"+mm.replace(/\s/g, "")}>
                {mm.toUpperCase()}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
    );
}