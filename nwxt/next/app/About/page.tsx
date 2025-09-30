import Link from "next/link"
import Navbar from "../navbar/page";
import style from "../../styles/home.module.css"
export default function Aboutlayout() {
  return (
    <div className="">
        <Navbar/>
     <h1>hi i am in home About</h1>
     <img src="file.svg"></img>
     {/* <Link href="/Home">
          <p className={style.test}>Move to Home Page</p>
     </Link> */}
    </div>
  );
}
