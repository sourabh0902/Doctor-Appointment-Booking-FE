"use client";
import GlobalApis from "./GlobalApis";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

//Exports of all atom variables

export const atomList = atom(null);
export const atomData = atom(null);
export const atomBlogs = atom(null);

//User Information

const Atom = () => {
  //variables to store atom states
  const [doctorList, setDoctorList] = useAtom(atomData);

  const [categoryList, setcategoryList] = useAtom(atomList);

  const [blogsLists, setblogsLists] = useAtom(atomBlogs);

  //use effects
  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    getDoctorList();
  }, []);

  useEffect(() => {
    getBlogsList();
  }, []);

  //functions to store response in atom varibale
  const getCategoryList = () => {
    GlobalApis.getCategory().then((response) => {
      setcategoryList(response?.data);
    });
  };

  const getDoctorList = () => {
    GlobalApis.getDoctor().then((resp) => {
      setDoctorList(resp?.data);
    });
  };

  const getBlogsList = () => {
    GlobalApis.getBlogs().then((resp) => {
      setblogsLists(resp);
    });
  };
};

export default Atom;
