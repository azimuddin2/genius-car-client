import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGitHub, signInWithFacebook } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleSignInWithFacebook = () => {
        signInWithFacebook(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleSignInWithGitHub = () => {
        signInWithGitHub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div className='flex justify-center items-center gap-4 mt-3 mb-6'>
            <button onClick={handleSignInWithGoogle}>
                <FcGoogle className='text-3xl'></FcGoogle>
            </button>
            <button onClick={handleSignInWithFacebook}>
                <BsFacebook style={{ color: '#3b5998' }} className='text-3xl'></BsFacebook>
            </button>
            <button onClick={handleSignInWithGitHub}>
                <BsGithub className='text-3xl'></BsGithub>
            </button>
        </div>
    );
};

export default SocialLogin;