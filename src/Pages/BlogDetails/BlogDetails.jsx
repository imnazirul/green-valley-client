import { useLoaderData, useParams } from "react-router-dom";
import { TiSocialYoutube } from "react-icons/ti";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";

const BlogDetails = () => {
  const blogData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const blog = blogData.find((data) => data.id === idInt);

  const { author, category, content, date, description, image, title } = blog;

  console.log(blog);

  return (
    <div>
      <h1 className="text-4xl font-jost underline text-darkBlue-1 text-center my-3">
        {title}
      </h1>
      <div className="h-[500px]">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="social font-jost text-2xl flex justify-center gap-5 my-2">
        <a className="flex gap-1 items-center cursor-pointer">
          {" "}
          <IconContext.Provider value={{ color: "red" }}>
            <TiSocialYoutube></TiSocialYoutube>
          </IconContext.Provider>{" "}
          <p className="text-xl">Youtube</p>
        </a>
        <a className="flex gap-1 items-center cursor-pointer">
          {" "}
          <IconContext.Provider value={{ color: "blue" }}>
            <FaFacebookSquare></FaFacebookSquare>
          </IconContext.Provider>{" "}
          <p className="text-xl">Facebook</p>
        </a>
        <a className="flex gap-1 items-center cursor-pointer">
          <FaSquareXTwitter></FaSquareXTwitter>
          <p className="text-xl">Twitter/X</p>
        </a>
        <a className="flex gap-1 items-center cursor-pointer">
          {" "}
          <IconContext.Provider value={{ color: "red" }}>
            <FaSquarePinterest></FaSquarePinterest>
          </IconContext.Provider>{" "}
          <p className="text-xl">Pinterest</p>
        </a>
      </div>

      <div>
        <p className="font-jost text-lg font-semibold">
          <span className="text-xl text-btn-1 font-bold ">Author: </span>
          {author}
        </p>
        <p className="font-jost text-lg font-semibold">
          <span className="text-xl text-btn-1 font-bold ">Publish Date: </span>
          {date}
        </p>
        <p className="font-jost text-lg font-semibold">
          <span className="text-xl text-btn-1 font-bold ">Category: </span>
          {category}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <p className="text-xl">{description}</p>

        <hr className="my-4" />
        <h1 className="text-2xl text-btn-1 font-bold my-2">{title}:</h1>

        <p className="text-lg mb-5">{content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;