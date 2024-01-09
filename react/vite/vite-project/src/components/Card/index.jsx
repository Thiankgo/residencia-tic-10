import styles from "./styles.module.css"
import { BiWorld } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Comment from "../../components/Comment"

function Header({ post }) {
    return (
        <div className="flex">
            <div className="w-51 mr-2">
                <img src={post.avatar} alt="" />
            </div>
            <div className="w-full text-left">
                <h2>{post.username}</h2>
                <span className="flex m-auto">
                    <p className="mr-1">12h</p>
                    <BiWorld className="my-auto" />
                </span>
            </div>
        </div>
    )
}

function Footer({ post }) {
    return (
        <div className="flex justify-around text-sm">
            <div className="flex">
                <p className="m-2">{post.totalLikes} Curtir</p>
                <AiOutlineLike className="my-auto" />
            </div>
            <div className="flex">
                <p className="m-2">Comentar</p>
                <MdOutlineComment className="my-auto" />
            </div>
            <div className="flex">
                <p className="m-2">Compartilhar</p>
                <IoShareSocialOutline className="my-auto" />
            </div>
        </div>
    )
}
export default function Card({ post }) {
    console.log(post)
    return (
        <div className=" bg-white w-[90%] p-2 m-auto my-5 p-0 drop-shadow-md">
            <Header post={post} />
            <div className={styles.postBody}>
                <img src={post.photo} alt="" />
            </div>
            <Footer post={post} />
            {
                post.comments?.length > 0 ? 
                post.comments.map(comment => (
                    <Comment comment={comment} key={comment.id} />
                )) : "Sem comentários"
            }
        </div>
    )
}
// export default function Card() {
//     return (
//         <div className={styles.card}>
//             <div className={styles.post}>
//                 <div className={styles.postHeader}>
//                     <div>
//                         <img src="./src/assets/Ellipse 1.png" alt="" />
//                     </div>
//                     <div>
//                         <h2>Instituto IREDE</h2>
//                         <span>
//                             <p>12h</p>
//                             <BiWorld />
//                         </span>
//                     </div>
//                 </div>
//                 <div className={styles.postBody}>
//                     <img src="./src/assets/Rectangle 1.png" alt="" />
//                 </div>
//                 <div className={styles.postFooter}>
//                     <div>
//                         <p>Curtir</p>
//                         <AiOutlineLike />
//                     </div>
//                     <div>
//                         <p>Comentar</p>
//                         <MdOutlineComment />
//                     </div>
//                     <div>
//                         <p>Compartilhar</p>
//                         <IoShareSocialOutline />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
