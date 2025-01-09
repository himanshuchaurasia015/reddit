import { useEffect, useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Loader from "../components/Loader";

function Main() {
  // track posts
  const [posts, setPosts] = useState([]);
  // track no. of posts fetched
  const [after, setAfter] = useState(null);
  // track loading
  const [loading, setLoading] = useState(false);
  //tracking sections
  const [action, setAction] = useState("hot");
  // tracking search
  const [search, setSearch] = useState("");

  const limit = 10;

  //method to fetch posts
  const fetchPosts = async () => {
    if (loading) return;
    setLoading(true);
    try {
      //value of url depend on search query
      const url = search
        ? `https://www.reddit.com/search.json?q=${search}`
        : `https://www.reddit.com/r/popular/${action}.json?limit=${limit}${
            after ? `&after=${after}` : ""
          }`;
      //making req
      const response = await axios.get(url);
      //extracting required
      const newPosts = response.data.data.children.map((child) => {
        const postData = child.data;
        return {
          title: postData.title,
          author: postData.author,
          upvotes: postData.ups,
          authorimg: "/AdobeStock_964891898_Preview.png",
          shares: postData.num_crossposts,
          numComments: postData.num_comments,
          pageUrl: `https://www.reddit.com${postData.permalink}`,
          thumbnail: postData.thumbnail !== "self" ? postData.thumbnail : null,
        };
      });
      //managing new posts and seen posts
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      // Updating after for next call
      setAfter(response.data.data.after);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // tracking the user to reach end of the screen
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        fetchPosts();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, after, action]);

  //load data on first call
  useEffect(() => {
    fetchPosts();
  }, []);

  //track option buttons and take actions
  useEffect(() => {
    setPosts([]);
    setAfter(null);
    fetchPosts();
  }, [action]);

  // track the search query and fetch whenever it changes
  useEffect(() => {
    setPosts([]);
    setAfter(null);
    fetchPosts();
  }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const options = ["hot", "new", "controversial", "rising", "top"];
  return (
    <>
      <div className="">
        <Header search={search} handleChange={handleChange} />
        <div className="flex  gap-6 pt-4 bg-slate-200 border-x-[10px] border-white">
          <Sidebar />
          <main className="flex-1 bg-white rounded-lg p-4">
            <div className="mb-4 flex justify-between pt-2 ps-6 ">
              <h1 className="text-xl font-[700] ">Popular</h1>
              <div className="flex gap-4 text-sm">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`text-md px-3 py-1 rounded-lg ${
                      action === option
                        ? "bg-gray-300"
                        : "hover:bg-gray-100 text-gray-400"
                    }`}
                    disabled={loading}
                    onClick={() => setAction(option)}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4 relative">
              <div className="absolute top-[50]  left-[50%] right-0">
                {(loading || posts.length === 0) && <Loader />}
              </div>

              {posts.map((post, index) => (
                <Content key={index} post={post} />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
