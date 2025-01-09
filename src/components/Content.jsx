import {
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  MoreHorizontal,
} from "lucide-react";
function Content({ post }) {
  return (
    <div className="flex gap-4 bg-white justify-between rounded-lg border border-gray-200">
      <div
        className="p-4 flex gap-4 "
        onClick={() => window.open(post.pageUrl, "_blank")}
      >
        <div>
          <img
            src={post.thumbnail}
            alt=""
            className="rounded-md h-full aspect-square min-w-[120px] object-fill"
          />
        </div>

        <div className="flex gap-x-[200px] ">
          <div className="flex flex-col justify-between w-[400px]">
            <h2 className="font-bold text-[18px] leading-6 mb-2 line-clamp-2">
              {post.title}
            </h2>
            <div className="flex justify-between items-center gap-1 text-xs text-gray-500">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>Posted by</span>
                <img
                  src={post.authorimg}
                  alt=""
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{post.author}</span>
              </div>
              {/* <div>
                <span>{post.date}</span>
              </div> */}
            </div>
          </div>
          <div className="flex  flex-col justify-around w-[110px] gap-2 mt-4 text-[14px]  text-gray-500">
            <button className="flex items-center gap-1 w-full">
              <div className="flex gap-[8px]">
                <MessageCircle className="w-[17px] h-[17px]" />
                <p>
                  {post.numComments >= 1000
                    ? (post.numComments / 1000).toFixed(0) + "K"
                    : post.numComments}
                </p>
                <p>Comments</p>
              </div>
            </button>
            <button className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              <p>
                {post.shares >= 1000
                  ? (post.shares / 1000).toFixed(0) + "K"
                  : post.shares}
              </p>
              <p>Share</p>
            </button>
            <button className="flex items-center gap-2">
              <MoreHorizontal className="w-4 h-4" />
              <p>More</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-4 px-3 border-s justify-center items-center rounded-e-lg ">
        <ChevronUp className="w-[70px] h-[30px] px-3 bg-orange-100 rounded-md text-orange-600 cursor-pointer" />
        <span className="text-sm font-bold">
          {post.upvotes >= 1000
            ? (post.upvotes / 1000).toFixed(0) + "K"
            : post.upvotes}
        </span>
        <ChevronDown className="w-[70px] px-3 bg-orange-100 h-[30px] rounded-md text-orange-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default Content;
