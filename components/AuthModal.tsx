import { useRouter } from "next/navigation";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { loginWithLoginAndPassword } from "@/actions/loginRequest";
import { setSessionUser } from "@/actions/session";

const AuthModal = () => {
    const [error, setError] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [state, setState] = useState<boolean>(false);

    const router = useRouter();
    const { onClose, isOpen } = useAuthModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    const authorize = async () => {
        const msg = await loginWithLoginAndPassword({
          password: password,
          username: login
        })
        if (msg !== 0) setError(msg); 
        else {
          setState(true);
          onClose();
          setError('');
          setSessionUser(login);
          router.refresh();
        }
    }

    return ( 
        <Modal
            title="Welcome back" 
            description="Login to your account." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            <h3 className="mb-1">Login</h3>
            <Input
              className="mb-3"
              placeholder="email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <h3 className="mb-2">Password</h3>
            <Input
              className="mb-5"
              placeholder="pasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => {authorize()}}>Log In</Button>
            <div className="flex w-full py-4 justify-center items-center text-lg">
            <p className="text-red-800">{error}</p>
            </div>
        </Modal>
     );
}
 
export default AuthModal;