import React from "react";

const DescriptionBox = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-2 sm:mx-4 md:mx-8 lg:mx-20">
      <div className="flex flex-col sm:flex-row justify-center items-center border-red-50 rounded-md">
        <h1 className="border border-black p-2 rounded-md mb-2 sm:mb-0 sm:mr-2">Description</h1>
        <h1 className="border rounded-md border-black p-2">Reviews <span className=" text-red-600 font-bold"> (122)</span></h1>
      </div>
      <div className="font-serif p-1 border border-black rounded-md">
        <p className="p-3 font-medium">
          One of the aspects I appreciate most about SHOPPER is its user-friendly interface. The website is intuitively designed, allowing me to effortlessly navigate through a vast array of products across various categories. Whether I'm searching for electronics, fashion essentials, or household items, finding what I need is always just a few clicks away.

          It sets the standard for an exceptional online shopping experience. With its user-friendly interface, comprehensive product listings, seamless checkout process, and excellent customer service, it has earned my trust and loyalty as a satisfied customer.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
