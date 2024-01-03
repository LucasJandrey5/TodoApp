import React, { useContext, useEffect, useState } from "react";
import { CategoryContextType, category } from "../types/category";
import { testTaskCategories } from "../data/testData";
import { UserContext } from "./UserContext";
import { GetServerCategories } from "../services/category";

export const CategoryContext = React.createContext<CategoryContextType | null>(
  null
);

const CategoryProvider = ({ children }: { children: React.JSX.Element }) => {
  const [categories, setCategories] = useState<category[]>([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState<boolean>(false);
  const user = useContext(UserContext);

  useEffect(() => {
    if (!categoriesLoaded && user?.user) GetCategories();
  }, [JSON.stringify(user?.user)]);

  const CreateCategory = (cat: category) => {};

  const GetCategories = async () => {
    console.log("Getting Categories: ");
    const res = await GetServerCategories();

    setCategories(res.categories);
    setCategoriesLoaded(true);
  };

  return (
    <CategoryContext.Provider value={{ categories, CreateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
