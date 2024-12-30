import { TableDemo } from "../calllog";
import AppNav from "../nav";
import AppSidebar from "../sidebar"
export default function Calls() {
  return (
    <div>
       <AppSidebar></AppSidebar>
        <AppNav></AppNav>
        <TableDemo></TableDemo>
    </div>
  );
}