function Footer() {
  return (
    <>
      <aside className="w-[260px] flex flex-col justify-between sticky top-0 h-[100vh]  ">
        <div className=" ">
          <div className="bg-white p-4 rounded-lg border border-gray-200 me-4">
            <div className="bg-gradient-to-b flex flex-col items-center from-pink-300 to-pink-100 rounded-t-lg p-4">
              <h2 className="text-[10px] font-bold">SUMMER BIG</h2>
              <h3 className="text-4xl font-bold mt-2">SALE</h3>
            </div>
            <div className=" p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="line-through">$300</span>
                <span className="text-red-500">$29.99/M</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center  mt-4 me-4 rounded-lg border p-4 bg-white">
            <img
              src="/Reddit-Logo.wine.png"
              alt="Reddit"
              className=" w-[110px] "
            />

            <div>
              <p className="ml-2">Advertise on Reddit</p>
            </div>
            <button className="w-full bg-white border text-orange-500 mt-3 border-orange-500 rounded-md py-2">
              GET STARTED
            </button>
          </div>
        </div>
        <footer className="text-xs self-end  text-gray-500  mt-8 py-7 me-[10px]  w-full">
          <hr className="h-[2px] bg-gray-300 mb-4" />
          <ul className="grid  grid-cols-3 gap-5 place-content-center p-2  list-disc text-[11px]">
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Advertise
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Reddit App
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Reddit Gold
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  line-clamp-1">
                Reddit Hits
              </a>
            </li>
          </ul>
          <hr className="h-[2px] bg-gray-300 mt-4" />

          <div className="flex gap-4 justify-between pe-2 mt-2">
            <span>© {new Date().getFullYear()}</span>
            <div className="flex gap-2">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </aside>
    </>
  );
}

export default Footer;
