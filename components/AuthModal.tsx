import { useRouter } from "next/navigation";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {

    const router = useRouter();
    const { onClose, isOpen } = useAuthModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    return ( 
        <Modal
            title="Welcome back" 
            description="Login to your account." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            Auth modal children....
        </Modal>
     );
}
 
export default AuthModal;