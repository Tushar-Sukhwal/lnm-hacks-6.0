
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Topic6 = () => {
  return (
    <div className=" bg-section-6 w-full h-[130vh]  flex bg-cover repeat-0 bg-[#D1FFEE]">
      <div className=" relative w-[40%] border-4 border-black m-auto bg-white p-10 text-center">
        <div className=" absolute -top-20 left-0 flex text-xl font-semibold ">
          <p className="bg-white  border-2 border-black border-r-0 p-2">Topic#6</p>
          <p className="bg-[#88FFD1]  border-2 border-black p-2">FAQs</p>
        </div>
        <p className="text-[40px] text-center font-extrabold mb-10">
          Ask Your Queries
        </p>
        <div className="flex flex-col align-left w-[80%] m-auto mb-7">
          <p className="text-left font-semibold">Name</p>
          <input
            type="name"
            className="border-2 border-black rounded-md h-14"
          />
        </div>
        <div className="flex flex-col align-left w-[80%] m-auto mb-7">
          <p className="text-left font-semibold">Email</p>
          <input
            type="email"
            className="border-2 border-black rounded-md h-14"
          />
        </div>
        <div className="flex flex-col align-left w-[80%] m-auto mb-7">
          <p className="text-left font-semibold">Question/Query</p>
          <input
            type="message"
            className="border-2 border-black rounded-md h-28"
          />
        </div>
        <button className="bg-black text-white text-center m-auto py-3 px-14 rounded-xl mt-7 font-extrabold text-[22px]">
          Submit
        </button>
      </div>
      <div className="w-[35%] font-bold m-auto text-xl">
        {" "}
        <p className=" font-bold text-4xl m-auto text-center w-[90%] mb-10">
          Frequently Asked Questions
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Can I participate remotely ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Will you support or reimburse our travel expenses ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I participate remotely ?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              I am a beginner, can I participate ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Will you support or reimburse our travel expenses ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Can I participate remotely ?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              I am a beginner, can I participate ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Will you support or reimburse our travel expenses ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
export default Topic6;

