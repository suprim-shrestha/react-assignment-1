import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <>
      <img
        src={logo}
        className="animate-speed h-60 motion-safe:animate-spin"
        alt="logo"
      />
      <style>
        {
          "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
        }
      </style>
      <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
        Vite + React + Typescript + Tailwindcss
      </p>
    </>
  );
}

export default Header;
