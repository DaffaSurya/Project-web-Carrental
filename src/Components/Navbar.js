import "../Style/Navbar.css"
const Navbar = () => {
    return (
        <div className="div-navbar">
           <div className="container">
             <div className="content-navbar">
              <h3>Daffa surya</h3>
             </div>

             <div className="navbar-content">
               <ul className="navbar-list">
                <li className="li-navbar">Our services</li>
                <li className="li-navbar">Why us</li>
                <li className="li-navbar">Testimonial</li>
                <li className="li-navbar">FAQ</li>
               </ul>
              <button className="button-navbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
              </button>
             </div>
           </div>
        </div>
    );
}
 
export default Navbar;