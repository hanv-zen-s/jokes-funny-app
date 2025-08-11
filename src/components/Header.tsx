import LogoHL from "../assets/images/logo-hl.png";
import UserHL from "../assets/images/user-hl.png";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-4xl mx-auto ps-8 pe-2 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LogoHL} alt="logo-hl" className="w-18 h-16" />
        </div>
        <div className="flex items-center justify-between text-sm ">
          <div className="text-right text-gray-500">
            <div className="italic opacity-60">Handcrafted by</div>
            <div className="font-semibold">Ha ZenS</div>
          </div>
          <img src={UserHL} alt="" className="w-18 h-16 rounded-full" />
        </div>
      </div>
    </header>
  );
}
