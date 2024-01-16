import { useRouter } from "next/navigation";

import Modal from "./Modal";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import useRegisterModal from "@/hooks/useRegisterModal";
import { setSessionUser } from "@/actions/session";
import { registerWithLoginAndPassword } from "@/actions/registerRequest";
import { becomeArtist } from "@/actions/becomeArtist";

const RegisterModal = () => {
    const [error, setError] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async () => {
        const msg = await registerWithLoginAndPassword({
            password: password,
            username: login,
            email: email
          })
          if (msg !== 0) setError(msg); 
          else {
            setError('');
            setSessionUser(login);
            onClose();
            becomeArtist(login);
            router.refresh()
          }
          
    }

    const router = useRouter();
    const { onClose, isOpen } = useRegisterModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    return ( 
        <Modal
            title="Welcome" 
            description="Create your account." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            <h3 className="mb-1">Login</h3>
            <Input
              className="mb-3"
              placeholder="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <h3 className="mb-1">Email</h3>
            <Input
              className="mb-3"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="mb-2">Password</h3>
            <Input
              className="mb-5"
              placeholder="pasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => {register()}}>Sing In</Button>
            <div className="flex w-full py-4 justify-center items-center text-lg">
            <p className="text-red-800">{error}</p>
            </div>
        </Modal>
     );
}
 
export default RegisterModal;