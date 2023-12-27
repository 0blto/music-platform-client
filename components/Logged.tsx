import { VscAccount } from "react-icons/vsc";

interface LoggedProps {
    username: string;
}

const Logged: React.FC<LoggedProps> = ({username}) => {
    return ( 
        <button className="
            flex 
            items-center
            justify-around
            rounded-md 
            overflow-hidden 
            cursor-pointer 
            w-[120px]
            bg-neutral-100/10
            hover:bg-neutral-100/20 
            hover:scale-105 
            transition
            px-2
            py-4
        ">
            <VscAccount/>
            <p>{username}</p>
        </button>
     );
}
 
export default Logged;
