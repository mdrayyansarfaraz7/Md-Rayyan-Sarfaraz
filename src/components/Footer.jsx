
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Md Rayyan Sarfaraz
          </p>

          {/* Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/mdrayyansarfaraz7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-400 transition"
            >
              <FaGithub size={20}/>
            </a>

            <a
              href="https://www.linkedin.com/in/md-rayyan-sarfaraz-79087428b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-400 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:mdrayyansarfaraz7@gmail.com"
              className="text-white/60 hover:text-emerald-400 transition"
            >
              <SiGmail size={20}/>
            </a>

            <a
              href="https://wa.me/91073832503"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-400 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
