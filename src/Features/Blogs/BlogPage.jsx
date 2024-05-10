import a1 from "../../images/f53.jpeg";
import { useEffect, useState } from "react";
import BlogData from "./BlogData";
import BackendLink from "../../utils/BackendLink";
function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  // const blogApi = "https://byfeyi-server.vercel.app";

  useEffect(function () {
    async function getBlogData() {
      try {
        const res = await fetch(`${BackendLink}/api/blogs`);
        if (!res.ok) {
          throw new Error(
            "Something went wrong while trying to load blog datas ❌❌"
          );
        }
        const data = await res.json();
        if (data.response === "False") throw new Error(`Couldn't load data!`);

        setBlogData(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getBlogData();
  }, []);
  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
        <div className="h1 arc-h1 bgg">
          <h1 className="primary-header">
            A <br /> <span className="arc blg">CASE STUDY*</span>
          </h1>
        </div>
      </div>

      <>
        <div className="grid-3">
          {blogData &&
            blogData.map((blogs) => <BlogData blogs={blogs} key={blogs._id} />)}
        </div>
      </>
    </>
  );
}

export default BlogPage;
