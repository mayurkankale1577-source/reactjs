import WithData from "./WithData";
import Postlist from "./Postlist";

 const PoslistWithData = WithData(Postlist,"https://jsonplaceholder.typicode.com/posts")
 export default PoslistWithData