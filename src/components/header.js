// import logo from "../images/logo512.png"
import './header.css';
 import logo from"../images/airbnb-logo_brandlogos.net_vb6uh.png"
export default function Header(){
    return (
          <header className="app--header">
                    <img
                         src={logo}
                         alt="app logo"
                         className="app--logo"
                    />
                    <h1 className="app--name">Meme generator</h1>
                    <h2 className="app--title"><a href="/blogs/">blogs</a></h2>
                    <h2 className="app--title"><a href="./ccomplexStateArrays.js">sites</a></h2>
                    <h2 className="app--title"><a href="/about us/">obout us</a></h2>
               
                    <h4 className="project--info">project-003</h4>
          </header>
     )
}

