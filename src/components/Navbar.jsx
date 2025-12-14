export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 hidden md:flex items-center justify-between bg-transparent">
      
      {/* LEFT — LOGO */}
      <div className="flex items-center gap-3">
        <img
          src="/RS.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* RIGHT — MENU */}
      <div className="hidden md:flex items-center gap-10 text-white">
        
        <div 
          className="cursor-pointer"
          onClick={() => scrollToSection('experience')}
        >
          <p className="font-medium hover:opacity-80 transition">Experience →</p>
          <p className="text-sm font-extralight">My professional journey so far</p>
        </div>

        <div 
          className="cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          <p className="font-medium hover:opacity-80 transition">My Projects →</p>
          <p className="text-sm font-extralight">See all of my work</p>
        </div>

        <div 
          className="cursor-pointer"
          onClick={() => scrollToSection('contact')}
        >
          <p className="font-medium hover:opacity-80 transition">Contact Me →</p>
          <p className="text-sm font-extralight">mdrayyansarfaraz7@gmail.com</p>
        </div>

      </div>

    </nav>
  );
}