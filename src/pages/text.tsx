import { Textarea } from "@/components/ui/textarea";

export function TextareaDisabled() {
  return (
    <div>
    <Textarea
      placeholder="Hi Shambavi,
      you can manage your whole team from here."
      className="absolute left-[400px] top-[60px] bg-transparent text-gray-500 resize-none w-[280px] focus:ring-0 focus:outline-none border-none"
      style={{font:'bold', color:'gray', fontSize:'16px'}}
    />
    </div>
  );
}

