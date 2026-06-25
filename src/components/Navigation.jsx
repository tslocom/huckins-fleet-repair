import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`${isActive(to) ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-background'} p-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors`}
    >
      {children}
    </Link>
  );

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b-2 border-outline-variant h-20">
        <div className="flex justify-between items-center w-full px-margin-desktop h-full max-w-container-max mx-auto">
          <Link to="/" className="flex items-center gap-4">
            <img
              alt="Logo"
              className="h-10 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNEnJzWJErOWVX0Y6phIM8RGa1mfoMEnqDKBvNn01zirrDMXYUdhkDi3oFGAE75LrkDxJunKQ8Bf8XhRRr3Gig1Zea_u2Fl1IH1YOlC4YTsd2ueT4AvIA7kCW7SCbDwvphKatJEfdM4anl6rJ57Lxjv0GeNa_8u1ENkJ6Ujav35ZeKGyY7WKpnp_TxuFJ-RypZ3CEt4n1hfJfMUTUV-BoxtDD1-m8hcel2B3LY4zD4tBsYHEna32AMN5eTsqbGr5uZIXv6ryp6ktY"
            />
            <span className="hidden lg:block text-xl font-black uppercase text-primary leading-none tracking-tighter">
              HUCKINS FLEET REPAIR
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/rates">Rates</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a
              href="tel:5555551234"
              className="ml-4 bg-primary-container text-on-primary-container px-6 py-2 font-bold uppercase flex items-center gap-2 active:scale-95 transition-transform hard-shadow"
            >
              <span className="material-symbols-outlined">phone</span>
              Call Now
            </a>
          </nav>

          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
            <span className="material-symbols-outlined text-4xl">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} fixed inset-0 z-[100] bg-background flex-col items-center justify-center space-y-8 p-10`}>
        <button className="absolute top-6 right-6 text-primary" onClick={() => setMobileMenuOpen(false)}>
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black uppercase">Services</Link>
        <Link to="/rates" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black uppercase">Rates</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black uppercase">Contact</Link>
        <a href="tel:5555551234" className="bg-primary-container text-on-primary-container px-10 py-4 text-xl font-black uppercase hard-shadow">
          Call Now
        </a>
      </div>
    </>
  );
};

export default Navigation;
