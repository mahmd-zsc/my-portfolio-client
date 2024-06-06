import Image from "next/image";
import pattern from "@/images/black-plain-concrete-textured.jpg";

function Footer({ setHiddenMouse }) {
  return (
    <footer className="bg-black relative py-10">
      <div className="relative z-30 flex gap-8 flex-col md:flex-row justify-between items-center text-textColor container lg:px-20">
        <p className="text-sm order-2 md:order-1 ">© 2024 - Mohamed Mahmoud</p>
        <ul className="flex gap-4 space-x-4 order-1 md:order-2  ">
          <li
            className=" hover:scale-105 duration-200"
            onMouseEnter={() => setHiddenMouse(true)}
            onMouseLeave={() => setHiddenMouse(false)}
          >
            <a
              className="cursor-none hover:text-orange-300    duration-300"
              href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li
            className="hover:scale-105 duration-200"
            onMouseEnter={() => setHiddenMouse(true)}
            onMouseLeave={() => setHiddenMouse(false)}
          >
            <a
              className="cursor-none hover:text-orange-300    duration-300"
              href="https://github.com/mahmd-zsc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </li>
          <li
            className="hover:scale-105 duration-200"
            onMouseEnter={() => setHiddenMouse(true)}
            onMouseLeave={() => setHiddenMouse(false)}
          >
            <a
              className="cursor-none hover:text-orange-300    duration-300"
              href="mailto:moma8607914@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              Email
            </a>
          </li>
          <li
            className="hover:scale-105 duration-200"
            onMouseEnter={() => setHiddenMouse(true)}
            onMouseLeave={() => setHiddenMouse(false)}
          >
            <a
              className="cursor-none hover:text-orange-300    duration-300"
              href="https://drive.google.com/file/d/1UQGNi7HEbFqKX-9lWbLDkuMMLOomz7y3/view"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 pointer-events-none"
        src={pattern}
        alt="Concrete textured background"
      />
      <div className="absolute w-full h-full left-0 top-0 bg-black opacity-20"></div>
    </footer>
  );
}

export default Footer;
