
import { Component } from "../chart";
import AppNav from "../nav";
import AppSidebar from "../sidebar";


export default function Home() {
  return (
    <div>
        <AppSidebar></AppSidebar>
        <AppNav></AppNav>
        <Component></Component>
    </div>
  );
}