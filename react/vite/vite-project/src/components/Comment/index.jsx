import { BiWorld } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

function Header({ comment }) {
    return (
        <div className="flex">
            <div className="w-51 mr-2">
                <img src={comment.avatar} alt="" />
            </div>
            <div className="w-full text-left">
                <h2>{comment.username}</h2>
                <span className="flex m-auto">
                    <p className="mr-1">12h</p>
                    <BiWorld className="my-auto" />
                </span>
            </div>
        </div>
    )
}

function Footer({ comment }) {
    return (
        <div className="flex justify-around text-sm">
            <div className="flex">
                <p className="m-2">{comment.totalLikes} Curtir</p>
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
export default function Comment({ comment }) {
    console.log(comment)
    return (
        <div className="flex-row bg-white p-2 m-auto mt-2 border-t-[1px] border-grey">
            <div>
                <Header comment={comment} />
                <div className="text-left">
                    {comment.content}
                </div>
            </div>
            <Footer comment={comment} />
        </div>
    )
}