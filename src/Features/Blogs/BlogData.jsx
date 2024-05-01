import { useNavigate } from "react-router-dom";
function BlogData({ blogs }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container blogs">
        <div className="grid-3-cols">
          <div onClick={() => navigate(`/blogs/journals/${blogs._id}`)}>
            <img src={blogs.image} alt={blogs.title} className="grid-3-img" />
            <h4 className="nur-header">{blogs.title}</h4>
            <div className="grid-4-txt">
              <p className="blog-txt ">{blogs.publishedDate}</p>
              <li className="blog-txt blog-li">{blogs.author}</li>
            </div>
            <p className="blog-tt">{blogs.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogData;
