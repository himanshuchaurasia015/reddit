import {
  Search,
  Sun,
  MessageSquare,
  Mail,
  ChevronDown,
  House,
  ChartNoAxesColumnIncreasing,
  Tally3,
  BoldIcon,
} from "lucide-react";
function Header() {
  return (
    <>
      <header className="flex items-center justify-between gap-4 px-8 h-20">
        <div className="flex items-center gap-3">
          <Sun className="size-7" />
          <img src="/Reddit-Logo.wine.png" alt="Reddit" className="w-[140px]" />
        </div>
        <div className="flex items-center gap-10">
          <nav className="flex gap-2">
            <button className="px-4  flex items-center gap-2">
              <House size={27} />
              Home
            </button>
            <button className="px-4 flex items-center gap-2 ">
              <ChartNoAxesColumnIncreasing
                fontStyle={BoldIcon}
                size={27}
                className=""
              />
              Popular
            </button>
            <button className="px-4 flex items-center gap-1">
              <Tally3 size={27} />
              All
            </button>
          </nav>

          <div className="flex-1 ">
            <div className="relative gap-2">
              <Search
                className="absolute left-3 top-3  text-gray-400"
                size={28}
              />
              <input
                type="text"
                placeholder="Find community or post"
                className="w-[350px] pl-[50px] pr-4 py-[14px] bg-gray-50 rounded-lg"
              />
            </div>
          </div>

          <button className="px-10 py-[14px] bg-orange-500 text-white rounded-lg">
            Create Post
          </button>
        </div>
        <div className="flex items-center gap-7">
          <MessageSquare size={27} />
          <Mail size={27} />
          <div className="flex items-center gap-2">
            <img
              className=" rounded-full size-[45px]"
              src="1718262567326.jpg"
            />
            <ChevronDown />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
