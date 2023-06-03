"use client";

import Header from "@/utils/Header";
import List, { StudentA } from "@/utils/List";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Dashboard",
  description: "This is the website's dashboard",
};

const Dashbaord = () => {
  const title = "Products List";
  const [products, setProducts] = React.useState([
    { id: 1, name: "", availability: true, quantity: 0 },
   
  ]);

  React.useEffect(() => {
    const getproducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };

    getproducts();
  }, []);

  // get data from virtual server
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchProduct = async (id: number) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();

    return data;
  };

  // Delete Task
  const deleteProduct = async (id: number) => {
    await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
    setProducts(products.filter((student) => student.id !== id));
  };

  // Add products
  const AddOneStudent = async (student: { name: string; present: boolean; matriculation: string }) => {
    const newStudent = { status: 1 / 10, ...student };
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    const data = await res.json();
    console.log(data);
    setProducts([...products, data]);

  };
  const togglePresence = (ID: number) => {}

  return (
    <div className="container">
      <Header title={title}/>
      {products.length > 0 ? <List products={products} onDelete={deleteProduct} onTogglePresence={togglePresence} /> : "No Student"}

    </div>
  );
};

export default Dashbaord;
