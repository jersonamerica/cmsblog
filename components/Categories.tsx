import React, { FC, useState, useEffect } from "react";
import { Category } from "./types";

import { getCategories } from "../services";
import Link from "next/Link";

const Categories: FC = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
