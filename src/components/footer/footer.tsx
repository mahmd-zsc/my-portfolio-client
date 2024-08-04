import Image from "next/image";
import pattern from "@/images/black-plain-concrete-textured.jpg";
import { useEffect } from "react";


interface FooterProps {
  setHiddenMouse: (hidden: boolean) => void;
}

function Footer({ setHiddenMouse }: FooterProps) {


  return (
    <footer className="bg-black relative py-10">
      <div className="relative z-30 flex flex-col md:flex-row gap-8 justify-between items-center text-textColor container lg:px-20">
        <p className="text-sm order-2 md:order-1" data-aos="fade-up">
          © 2024 - Mohamed Mahmoud
        </p>
        <ul className="flex gap-4 order-1 md:order-2">
          {[
            {
              href: "https://www.linkedin.com/in/mohamed-mahmound-b160b2270/",
              label: "LinkedIn",
              ariaLabel: "LinkedIn",
            },
            {
              href: "https://github.com/mahmd-zsc",
              label: "GitHub",
              ariaLabel: "GitHub",
            },
            {
              href: "mailto:moma8607914@gmail.com",
              label: "Email",
              ariaLabel: "Email",
            },
            {
              href: "https://drive.google.com/file/d/1UQGNi7HEbFqKX-9lWbLDkuMMLOomz7y3/view",
              label: "Resume",
              ariaLabel: "Resume",
            },
          ].map(({ href, label, ariaLabel }) => (
            <li
              key={href}
              className="hover:scale-105 duration-200"
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              data-aos="fade-up" // AOS animation on scroll
              data-aos-delay="100" // Delay for staggered effect
            >
              <a
                className="cursor-none hover:text-orange-300 duration-300"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                {label}
              </a>
            </li>
          ))}
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
