import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import {ServerUrl} from "../../server";
import {useState} from "react";

import { useUserStore } from '../../stores/UserStore';
import type { UserLoginApi } from "../../types/LoginApi";

const firebaseConfig = {
    apiKey: "AIzaSyBxwnfwnm7q9hpNHxAkNWpyQ0537U0waZc",
    authDomain: "authen-94726.firebaseapp.com",
    projectId: "authen-94726",
    storageBucket: "authen-94726.firebasestorage.app",
    messagingSenderId: "197895515363",
    appId: "1:197895515363:web:71968ca5961c15590769d6",
    measurementId: "G-VYMBYWRG2H",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


const LoginForm = () => {
    const navigate = useNavigate();
    const {setUser} =  useUserStore();
    
    const [messageApi, setMessageApi] = useState<string>('');
    const [isLogin , setIsLogin] = useState<boolean>(false);
    const handleLoginGoogle = async () => {
        try {
            // console.log("Login");
            setIsLogin(true);

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const idToken = await user.getIdToken();
            const res = await fetch(`${ServerUrl}/auth/login/google?token=${idToken}`);
            if (!res.ok) {
                const dataFail = await res.json();
                setMessageApi(dataFail.message);
                return;
            }
            const dataApi : UserLoginApi = await res.json();
            setUser(dataApi);
            return navigate('/');
            // console.log(await res.json());

        } catch (error: any) {
            if (error.code === "auth/popup-closed-by-user") {
                // console.log("Người dùng đã đóng popup đăng nhập.");
                setIsLogin(false);
            } else if (error.code === "auth/cancelled-popup-request") {
                // console.log("Popup bị hủy do có một yêu cầu khác.");
                setIsLogin(false);
            } else {
                // console.error("Lỗi khác:", error);
                setIsLogin(false);
            }
        } finally {
            setIsLogin(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center bg-white max-h-screen h-[100vh]">
            <div
                className="mx-auto flex w-full flex-col px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
                <Link
                    className="w-fit h-[8%] sm:ml-[30px] flex items-end text-zinc-950 dark:text-white"
                    to="/"
                >
                    <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 320 512"
                            className="mr-3 h-[13px] w-[8px] text-zinc-950 dark:text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                        </svg>
                        <p className="ml-0 text-sm hover:text-red-500 text-zinc-950 dark:text-white">
                            Back to the website
                        </p>
                    </div>
                </Link>
                <div
                    className="flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px]  lg:max-w-[450px]">
                    <p className="text-[32px] text-center  font-bold text-zinc-950 dark:text-white">
                        Đăng Nhập
                    </p>
                    {/*<p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">*/}
                    {/*    Enter your email and password to sign in!*/}
                    {/*</p>*/}
                    <div className="mt-8">
                        <div className="pb-2">
                            <input type="hidden" name="provider" value="google"/>
                            <button disabled={isLogin}
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white"
                                    onClick={handleLoginGoogle}
                            >

                                <span className="mr-2">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 48 48"
                      enable-background="new 0 0 48 48"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>
                                <span className="font-semibold">Tiếp tục với Google</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative my-4">
                        <div className="relative flex items-center py-1">
                            <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                            <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                        </div>
                    </div>
                    <div>
                        <form className="mb-4">

                            <div className="grid gap-2">
                                <div className="grid gap-1">
                                    <label
                                        className="text-zinc-950 dark:text-white"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>

                                    <input
                                        className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        name="email"
                                    />
                                    <div style={{height: "40px", color: "red", paddingTop: "15px"}}>{messageApi}</div>

                                    {/*<label*/}
                                    {/*className="text-zinc-950 mt-2 dark:text-white"*/}
                                    {/*htmlFor="password">Password</label>*/}
                                    {/*<input*/}
                                    {/*id="password" placeholder="Password" type="password"*/}
                                    {/*autoComplete="current-password"*/}
                                    {/*className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"*/}
                                    {/*name="password"/>*/}
                                </div>
                                <button
                                    className="whitespace-nowrap bg-[#000000] text-white hover:bg-[rgb(127,127,127)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                                    type="submit"
                                >
                                    Đăng Nhập
                                </button>
                            </div>
                        </form>
                        {/*<p><a href="/dashboard/signin/forgot_password"*/}
                        {/*      className="font-medium text-zinc-950 dark:text-white text-sm">Forgot your*/}
                        {/*    password?</a></p>*/}
                        <p>
                            <Link
                                to="#"
                                className="font-medium text-zinc-950 dark:text-white text-sm"
                            >
                                Chưa có tài khoản? <span style={{borderBottom: "solid 1px black", color: "blue"}}>Đăng ký</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
