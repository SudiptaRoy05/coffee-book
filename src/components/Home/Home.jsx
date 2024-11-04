import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Heading from "../Heading/Heading";

export default function Home() {
    const categories = useLoaderData();
  return (
    <div>
        <Banner></Banner>
        <Heading title={'Browse coffees by category'} subtitle={'Lots of Coffee u can buy'}></Heading>

        <Categories categories={categories}></Categories>
        <Outlet></Outlet>
    </div>
  )
}
