import a1 from "../../images/f52.jpeg";
import { useEffect, useState } from "react";
import BlogData from "./BlogData";
import  BackendLink  from "../../utils/BackendLink";
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
      </div>
      <div className="h1 ab-blog">
        <div className="blog-head">
          <h2 className="sec-header blog-h2"> Every Line Matters.</h2>
          <p className=" blog-p blog-h2">
            Read about the inspiration behind each of our related designs.
          </p>
        </div>
      </div>

      <>
        <h2 className="blog-header">Designs</h2>
        <div className="grid-2">
          {blogData &&
            blogData.map((blogs) => <BlogData blogs={blogs} key={blogs._id} />)}
        </div>
      </>
    </>
  );
}

export default BlogPage;
