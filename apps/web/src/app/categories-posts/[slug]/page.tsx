"use client";

import axios from "axios";

export default function SlugCategories({params}){
  const cate = axios.get("http://localhost:8000/api/v1/events/categories")
  console.log(cate.data?.data)
  
  return <>
    <section className="flex flex-col gap-10 p-14 px-40">
      {/* {cate.data.data.name} */}
    </section>
  </>
}