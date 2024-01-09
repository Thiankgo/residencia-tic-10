import styles from "./styles.module.css"
import { BiWorld } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

function Header({ post }) {
    return (
        <div className="flex">
            <div className="w-51 mr-4">
                <img src={post.avatar} alt="" />
            </div>
            <div className="w-full text-left">
                <h2>{post.username}</h2>
                <span className="flex m-auto">
                    <p className="mr-1">12h</p>
                    <BiWorld className="my-auto"/>
                </span>
            </div>
        </div>
    )
}

function Footer({ post }) {
    return (
        <div className={styles.postFooter}>
            <div>
                <p>{post.totalLikes} Curtir</p>
                <AiOutlineLike />
            </div>
            <div>
                <p>Comentar</p>
                <MdOutlineComment />
            </div>
            <div>
                <p>Compartilhar</p>
                <IoShareSocialOutline />
            </div>
        </div>
    )
}
export default function Card({ post }) {
    console.log(post)
    return (
        <div className="w-[90%] m-auto my-5 p-0">
            <Header post={post}/>
            <div className={styles.postBody}>
                <img src={post.photo} alt="" />
            </div>
            <Footer post={post}/>
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
