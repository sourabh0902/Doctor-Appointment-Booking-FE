import { useAtom } from "jotai";
import React from "react";
import { atomBlogs } from "../_utils/atom";
import Image from "next/image";
import { CloudFog } from "lucide-react";
import ViewMore from "./ViewMoreButton";

const BlogCard = () => {
  const allBlogs = useAtom(atomBlogs);
  // console.log(allBlogs[0]?.articles, "articles");
  const blogsList = allBlogs[0]?.articles;
  // console.log(blogsList, "blogs");

  return (
    <>
      <section className="mb-10">
        <div className=" flex flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 gap-12">
          <div>
            <h3 className="w-full h-auto flex justify-center items-center text-[#2AA7FF] text-base font-semibold leading-7">
              Blogs and News
            </h3>
            <h2 className="w-full h-auto flex justify-center items-center text-[#1B3C74] font-bold text-4xl">
              Read the Latest <span className="text-primary">&nbsp;News</span>
            </h2>
          </div>
          <div className="relative grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Image
              src={"/assets/images/arrow.svg"}
              alt={"arrow-image"}
              width={50}
              height={65}
              className="absolute top-[-45px] right-[-40px]"
            />
            {blogsList?.length > 0
              ? blogsList?.map(
                  (item, index) =>
                    index < 3 && (
                      <a href={item?.url} target="_blank" key={index}>
                        <div className="flex flex-col max-w-fit h-[500px] rounded-xl bg-[#E6F6FE] overflow-hidden cursor-pointer group">
                          <Image
                            src={
                              item?.urlToImage
                                ? item?.urlToImage
                                : "/assets/images/blog_placeholder.svg"
                            }
                            width={500}
                            height={230}
                            alt="Blog Image"
                            priority
                            className="max-w-full h-[250px] object-cover"
                          />
                          <div className="flex items-baseline flex-col max-w-full text-wrap gap-2 p-4">
                            <h3 className=" text-primary font-bold text-[12px] bg-blue-100 py-2 px-3 rounded-3xl ">
                              {!item?.source?.name
                                ? "Anonymous"
                                : item?.source?.name}
                            </h3>
                            <h3 className=" font-bold text-lg group-hover:text-primary transition-all line-clamp-3 ">
                              {item?.title
                                ? item?.title
                                : "Researchers Discover New Insights into Gut Microbiome and Immune System Interaction"}
                            </h3>
                            <p className="text-sm line-clamp-4 ">
                              {item?.description
                                ? item?.description
                                : "In a groundbreaking study, scientists have uncovered a previously unknown link between the gut microbiome and the immune system. The research, published in the Journal of Immunology, reveals that specific gut bacteria play a crucial role in regulating immune responses."}
                            </p>
                          </div>
                        </div>
                      </a>
                    )
                )
              : "Hello World"}
          </div>
          {blogsList?.length > 1 && <ViewMore destination="/allArticles" />}
        </div>
      </section>
    </>
  );
};

export default BlogCard;
