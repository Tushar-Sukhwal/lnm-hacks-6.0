"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import toast from "react-hot-toast";

const Topic6 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (name === "" || email === "" || message === "") {
        toast.error("Please fill all the fields!");
        return;
      }
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      setName("");
      setEmail("");
      setMessage("");
      console.log("Data successfully sent to Firebase!");
      toast.success("Your Query has been submitted successfully!");
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
    }
  };

  return (
    <section
      id="faq"
      className=" bg-section-6 w-screen md:h-[130vh]  md:flex-row flex-col  flex bg-cover repeat-0 bg-[#D1FFEE] "
    >
      <form
        className=" relative md:w-[40%] w-[80%] mt-28 border-4 border-black m-auto bg-white md:p-10 p-5 text-center shadow-[-17px_29px_0px_10px_#1a202c]"
        onSubmit={handleSubmit}
      >
        <div className=" absolute -top-20 left-0 flex text-xl font-semibold ">
          <p className="bg-white  border-2 border-black border-r-0 p-2 font-meslo font-bold ">
            Topic#6
          </p>
          <p className="bg-[#88FFD1]  border-2 border-black p-2 font-meslo font-bold ">FAQs</p>
        </div>
        <p className="text-[40px] text-center font-extrabold mb-10 font-futura">
          Ask Your Queries
        </p>
        <div className="flex flex-col align-left w-[80%] m-auto mb-7">
          <p className="text-left font-semibold font-publicSans">Name</p>
          <input
            type="name"
            className="border-2 border-black rounded-md h-14"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex flex-col align-left w-[80%] m-auto mb-7">
          <p className="text-left font-semibold font-publicSans">Email</p>
          <input
            type="email"
            className="border-2 border-black rounded-md h-14"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col align-left w-[80%] m-auto mb-7">
          <p className="text-left font-semibold font-publicSans">Question/Query</p>
          <input
            type="message"
            className="border-2 border-black rounded-md h-28"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          className="bg-black text-white text-center m-auto py-3 px-14 rounded-xl mt-7 font-extrabold text-[22px] font-futura "
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="md:w-[35%] mt-20 font-bold m-auto text-xl p-7 md:p-0 mb-10">
        {" "}
        <p className=" font-bold text-4xl m-auto text-center w-[90%] mb-10 font-futura">
          Frequently Asked Questions
        </p>
        <Accordion type="single" collapsible className="w-full text-left">
          <AccordionItem value="item-1 text-left">
            <AccordionTrigger className="text-xl font-publicSans">
              1. Can I participate remotely ?
            </AccordionTrigger>
            <AccordionContent>
              LNM Hacks is an in person hackathon. So remote participation is
              not applicable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2 text-left">
            <AccordionTrigger className="text-left">
              2. I&apos;m a beginner, can I participate?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely, along with several workshops targeted for beginners we
              have mentors and resources. Come learn and experience your first
              hackathon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              3. Will you support or reimburse our travel expense?
            </AccordionTrigger>
            <AccordionContent>
              LNM hacks is a community hackathon, so unfortunately we would not
              be able to support you with travel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              4. How much does it cost to participate?
            </AccordionTrigger>
            <AccordionContent>
              Nothing, participation in LNM hacks is absolutely FREE!!🎉
              We&apos;ll have meals, snacks, and beverages onsite at the
              hackathon, in addition to swags, prizes, fun mini-events and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              5. What is the maximum team size? Can I participate as a solo
              hacker?
            </AccordionTrigger>
            <AccordionContent>
              We encourage you to make a team of minimum 2 and maximum 4
              members. If you are a Solo Hacker and do not have a team, you can
              still register and we will help you find a team during the
              hackathon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              6. What are sleeping arrangements?
            </AccordionTrigger>
            <AccordionContent>
              We will have a supervised sleeping space for you to rest and sleep
              at the venue. We recommend bringing your own blanket if you need
              one.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">
              7. My parents guardians will come along with me, can they stay at
              venue?
            </AccordionTrigger>
            <AccordionContent>
              The answer is No. Arrangements like sleeping area, food, etc., are
              only for the attendees. We recommend you to find a stay option for
              them near the venue. They can drop you at the hackathon venue on
              19th Jan and can pick you on 21st Jan but can not stay at venue
              during the hackathon as we do not have any provision for them.
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-8">
            <AccordionTrigger>
              Will you support or reimburse our travel expenses ?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </div>
    </section>
  );
};
export default Topic6;
