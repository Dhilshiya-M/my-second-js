import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Bold } from "lucide-react";

const data = [
  { name: "Kyle Jenner", type: "Incoming", duration: "16m 17s", date: "12/Oct/2020" },
  { name: "Eleanor Pena", type: "Outgoing", duration: "16m 17s", date: "12/Oct/2020" },
  { name: "Cameron Williamson", type: "Incoming", duration: "16m 17s", date: "12/Oct/2020" },
  { name: "Esther Howard", type: "Incoming", duration: "16m 17s", date: "11/Oct/2020" },
  { name: "Leslie Alexander", type: "Outgoing", duration: "16m 17s", date: "10/Oct/2020" },
  { name: "Jenny Wilson", type: "Incoming", duration: "16m 17s", date: "10/Oct/2020" },
  { name: "Darlene Robertson", type: "Incoming", duration: "16m 17s", date: "09/Oct/2020" },
];
export function TableDemo() {
  return (

       
      <div className="absolute top-[120px] left-[400px] justify-centre w-[1000px] h-[550px]  border-green-200 bg-white">

        <h1 style={{ fontWeight: 'bold', color: 'black', textAlign:"left" }}>Calls</h1>;
        <Table className="table-auto border border-green-200 w-[1000px] h-[500px] shadow-md rounded-md">
          <TableHeader>
            <TableRow className="hover:bg-gray-100">
              <TableHead className="px-4 py-2">Name</TableHead>
              <TableHead className="px-4 py-2">Type</TableHead>
              <TableHead className="px-4 py-2">Duration</TableHead>
              <TableHead className="px-4 py-2 text-center">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name} className="hover:bg-gray-100 text-green-400">
                <TableCell className="px-4 py-2 font-medium">{row.name}</TableCell>
                <TableCell className="px-4 py-2">{row.type}</TableCell>
                <TableCell className="px-4 py-2">{row.duration}</TableCell>
                <TableCell className="px-4 py-2 text-center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
}
