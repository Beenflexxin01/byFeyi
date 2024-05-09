import { useNavigate } from "react-router-dom";
function BlogData({ blogs }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container blogs">
        <div className="grid-3-cols">
          <div onClick={() => navigate(`/blogs/journals/${blogs._id}`)}>
            <img src={blogs.image} alt={blogs.title} className="grid-3-img" />
            <div className="pub">
              <p className="blog-txt ">{blogs.publishedDate}</p>
              <h4 className="nur-header">
                {blogs.title}
                <br /> {blogs.titleBreak}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogData;
