import React from "react";
import img1 from "../imgs/imgs prg dashboard/img1.png";
import { useState,useEffect, useRef } from "react";
// demo code

export default function Projects({btnWork,SetBtnWork}) {
  let data = [
    {
      img: img1,
      title: "dashboard",
      date: "mar2,2024",
      discreption:
        "A website dashboard for managing projects and business provides anintuitive interface to oversee tasks, track progress, allocate resources, and streamline workflows, enhancing overall productivity and efficiency.",
    },
    {
      img: img1,
      title: "dashboard",
      date: "mar2,2024",
      discreption:
        "A website dashboard for managing projects and business provides anintuitive interface to oversee tasks, track progress, allocate resources, and streamline workflows, enhancing overall productivity and efficiency.",
    },
  ];

  let info = data.map((el) => ( 
    <>
        <div style={{ width: "",background:'rgb(35, 38, 53)', padding:'10px',borderRadius:'10px', }}>
          <img className="rounded-md" src={img1}></img>
          <a href="">
            <p className="text-center text-zinc-200 mt-2">{el.title}</p>
          </a>
          <p className="text-sm font-thin text-zinc-300">{el.date}</p>
          <p className="text-sm font-light text-zinc-400">{el.discreption}</p>
        </div>
    </>
  ));

  let testRef = useRef(null)
  useEffect(()=>{
    if(testRef.current){
      SetBtnWork( testRef.current.getBoundingClientRect())
    }

  },[])

  return (
    <div className="flex" ref={testRef}>
      <div id="prj" className=" duration-[0.5s] border rounded-md capitalize mt-12 mb-4 justify-center">
        <div
          id="title"
          className="duration-[0.5s] flex font-extrabold text-white  justify-center mt-5"
        >
          my projects
        </div>
        <div  style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "3%",
        }}
        className=" m-6">
          {info}
        </div>
      </div>
    </div>
  );
}
