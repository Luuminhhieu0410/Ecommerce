import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmaiPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [emailAuthInput, setEmailAuthInput] = useState<string | null>(null);
  const initTimeDown = localStorage.getItem("time_down") || 0;
  const [timeDown, setTimeDown] = useState<number>(3);
  console.log(emailAuthInput);
  useEffect(() => {
    setEmailAuthInput(searchParams.get("emailAuthInput"));
  }, [searchParams]);

  useEffect(() => {
  const timer = setInterval(() => {
    setTimeDown(prev => {
      if (prev >= 1 ) return prev - 1;
      clearInterval(timer); // dừng lại khi <= 1
      return 0;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <div id="root">
      <div data-overlay-container="true">
        <div className="auth-container bg-[#f5f5f5] flex fixed inset-0 overflow-auto min-h-screen">
          <div className="w-full block pb-0">
            <div className="w-full max-w-[480px] mx-auto flex items-center justify-center min-h-full">
              <div className="w-full bg-[#ffffff] rounded-3xl">
                <div className="bg-container shadow-container p-4 md:p-6 ">
                  <div className="flex flex-col justify-center items-center sm:h-auto sm:min-h-[418px]">
                    <form
                      className="w-full max-w-[400px]"
                      data-gtm-form-interact-id={0}
                    >
                      <div className="flex flex-col justify-center items-center gap-3">
                        <div className="flex flex-col items-center">
                          <p className="text-headxl !text-[24px] font-bold mb-3">
                            Nhập mã xác thực
                          </p>
                          <p className="text-[#171717]">
                            Vui lòng nhập mã xác thực đã được gửi qua email
                          </p>
                          <p className="text-bodym_bold">{emailAuthInput}</p>
                        </div>
                        <div
                          className="group flex-col w-full hidden is-filled"
                          data-slot="base"
                          data-filled="true"
                          data-filled-within="true"
                          data-has-elements="true"
                          data-has-label="true"
                        >
                          <div
                            data-slot="input-wrapper"
                            className="relative w-full inline-flex tap-highlight-transparent shadow-sm border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-foreground flex-col items-start justify-center gap-0 transition-background !duration-150 transition-colors motion-reduce:transition-none h-14 min-h-12 max-h-12 p-0 !bg-input rounded ring-[1px] ring-border_default group-data-[focus=true]:ring-[2px] group-data-[focus=true]:ring-accent !border-0 is-filled"
                            style={{ cursor: "text" }}
                          >
                            <label
                              data-slot="label"
                              className="absolute z-10 pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] input-label !translate-y-[-4px] leading-[unset]"
                              id="react-aria1396373647-:r1s:"
                              htmlFor="auth-input"
                            >
                              Auth input
                            </label>
                            <div
                              data-slot="inner-wrapper"
                              className="inline-flex w-full box-border items-end h-full"
                            >
                              <input
                                data-slot="input"
                                data-filled="true"
                                data-filled-within="true"
                                data-has-end-content="true"
                                className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small !pt-4 h-full relative input-field !px-3 is-filled"
                                id="auth-input"
                                aria-label="Auth input"
                                type="text"
                                autoComplete="off"
                                name="authInput"
                                placeholder="Đăng nhập"
                                tabIndex={0}
                                aria-labelledby="auth-input react-aria1396373647-:r1s:"
                                defaultValue="auf18877@toaik.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-full">
                          <div className="flex items-center justify-center w-full">
                            <input
                              id="input-otp"
                              type="tel"
                              inputMode="numeric"
                              autoComplete="one-time-code"
                              className="w-full h-[48px] px-3 text-bodyl border-[1px] rounded-[8px] focus:outline-none transition-all duration-200 placeholder:text-[14px] border-gray-300 focus:border-blue-500"
                              maxLength={6}
                              placeholder="Nhập mã xác thực"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-bodym flex items-center gap-1 mt-3">
                            Chưa nhận được mã xác thực?
                            {timeDown == 0 ? (
                              <button
                                type="submit"
                                className="cursor-pointer text-[#0284C5]"
                              >
                                Gửi lại
                              </button>
                            ) : (
                              <span className="font-bold">
                                Gửi lại sau 0:
                                {timeDown.toString().padStart(2, "0")}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center mt-6">
                        <Link
                          to={"/login"}
                          className="cursor-pointer input-content--subdued underline hover:text-gray-800 text-[#17171787]"
                        >
                          Quay lại
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-rht-toaster=""
          style={{
            position: "fixed",
            zIndex: 9999,
            inset: "0px 16px 16px",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

export default VerifyEmaiPage;
