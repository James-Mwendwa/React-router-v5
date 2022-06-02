import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    console.log(useLocation());
    console.log('hello world');
  return (
    <div>
      <h2>id is {id}</h2>
    </div>
  );
}

export default Post;