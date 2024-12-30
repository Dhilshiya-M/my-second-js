import { Component } from "./chart";
import AppNav from "./nav";
import Projects from "./project";
import { InputDemo } from "./search";
import AppSidebar from "./sidebar";
import { Tables } from "./table";
import TeamBox from "./teambox";
import { TextareaDisabled } from "./text";

export default function Home() {
  return (
    <div>
      <AppSidebar></AppSidebar>
      <AppNav></AppNav>
      <TextareaDisabled></TextareaDisabled>
      <Component></Component>
      <Tables></Tables>
      <InputDemo></InputDemo>
      <TeamBox></TeamBox>
      <Projects></Projects>
  
    </div>
  );
}
