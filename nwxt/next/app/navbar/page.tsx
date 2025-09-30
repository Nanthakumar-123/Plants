import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <img 
        src="/instagram_logo.svg.png" 
        alt="Logo" 
        className="insta"
      />

      <nav>
        <ul className="lin">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}








// export default function Navbar() {
//   return (
//     <div className="">
//      {/* <h1>hi i am in home</h1> */}
//      <img src="instagram_logo.svg.png"></img>
//         <nav>
//           <ul>
//             <li>
//             <Link href="/">Home</Link>
//             </li>
//           </ul>
//         </nav>
//     </div>
//   );
// }
