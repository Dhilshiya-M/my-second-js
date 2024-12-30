import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Tables() {
  return (
    <div
      className="absolute bg-[#EAEBEB] border justify-center left-70"
      style={{
        width: "80 px",
        height: "40px",
        top: "430px",
        left: "370px",
      }}
    >
      <Table className="table-auto border-white shadow-md rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] ">Clients</TableHead>
            <TableHead className="">Project Uplabs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-[48px] font-medium text-green-300">Mathew Encine</TableCell>
            <TableCell className=" text-gray-700">The Futur</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium  text-green-300">John Parker</TableCell>
            <TableCell className=" text-gray-700">uplabs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium  text-green-300">Salman Khan</TableCell>
            <TableCell className=" text-gray-700">SalmanWap</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium  text-green-300">Shivendra Pratap</TableCell>
            <TableCell className=" text-gray-700">spdclub</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
