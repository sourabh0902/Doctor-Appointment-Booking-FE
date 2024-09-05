import CategoryList from "@/app/_components/(searchPage)/CategoryList";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="relative grid grid-cols-4 md:px-20 md:py-16 gap-7 mb-5">
      <div>
        <CategoryList />
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default layout;
