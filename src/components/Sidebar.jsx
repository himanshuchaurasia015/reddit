function Sidebar() {
  const sections = {
    favorites: [
      { name: "r/funymore", count: 156, src: "/1.jpg" },
      { name: "r/breakingnews", count: 12, src: "/2.jpg" },
      { name: "r/lovestory", count: null, src: "/3.jpg" },
      { name: "r/gamingfun", count: 68, src: "/4.jpg" },
    ],
    redditFeeds: [
      { name: "r/moview", count: "04", src: "/5.jpg" },
      { name: "r/gaming", count: null, src: "/6.jpg" },
      { name: "r/pics", count: 32, src: "/7.jpg" },
      { name: "r/gifs", count: null, src: "/8.jpg" },
    ],
    community: [
      { name: "r/funymore", count: null, src: "/9.jpg" },
      { name: "r/breakingnews", count: null, src: "/10.jpg" },
      { name: "r/gaming", count: 43, src: "/11.jpg" },
      { name: "r/lovestory", count: 12, src: "/12.jpg" },
    ],
  };
  const SidebarItem = ({ name, count, src }) => (
    <li className="flex items-center py-1.5 my-2  ">
      <img src={src} alt="" className="w-5 h-5 rounded-full mr-2" />
      <span className="text-[14px]">{name}</span>
      {count && <span className="ml-auto text-xs text-gray-500">{count}</span>}
    </li>
  );
  return (
    <>
      <aside className="w-56 sticky  ">
        <div className="mx-4">
          <div className="flex justify-center">
            <div className="p-3 w-full rounded-md bg-white text-sm">
              <select className="w-full outline-none ">
                <option>Filter by</option>
                <option>Ascending</option>
                <option>Decending</option>
              </select>
            </div>
          </div>

          {Object.entries(sections).map(([section, items]) => (
            <>
              <div key={section} className="my-6 mx-2 ">
                <h2 className="text-xs font-medium text-gray-500 mb-2 uppercase">
                  {section}
                  <span className="float-right text-xs">All</span>
                </h2>
                <ul>
                  {items.map((item, index) => (
                    <SidebarItem key={index} {...item} />
                  ))}
                </ul>
              </div>
              <hr className="h-[2px] bg-slate-300 my-2" />
            </>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
