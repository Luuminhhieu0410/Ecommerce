import React from "react";
const PageLoading = () => {
  return (
    <div className="fixed top-0 right-0 w-screen h-screen flex justify-center items-center">
      <div
        className="flex justify-center  h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
export default PageLoading;
