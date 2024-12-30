import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div>
        <span>Hi Shambavi</span>
    <Input
      type="email"
      placeholder="Search"
      className="absolute left-[1090px] top-[100px] rounded-[24px] h-[35px] w-[380px] border-gray-700
       bg-background: [#F2F3F3] px-4 py-2 shadow-md focus:outline-gray focus:ring-2 focus:ring-gray-200"
    />
    </div>
  );
}
