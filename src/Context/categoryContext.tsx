import React, { useEffect, useState } from "react";
import { CategoryContextType, category } from "../types/category";
import { testTaskCategories } from "../data/testData";

export const CategoryContext = React.createContext<CategoryContextType | null>(
  null
);

const CategoryProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [categories, setCategories] = useState<category[]>(testTaskCategories);

  const CreateCategory = (cat: category) => {};

  return (
    <CategoryContext.Provider value={{ categories, CreateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
