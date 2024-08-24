'use client';
import Image from "next/image";
import Modal from "@/components/Modal"
import { useState } from "react";


export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  return (
<>
  <div className="p-10 flex flex-col items-center">
      <div className="text-center">
      <h1 className="text-3xl mb-5">Modal with Next JS and TailwindCSS.</h1>
      <div className="md:space-y-0 space-y-3">
      <button className="text-white hover:bg-amber-500 bg-amber-900 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5
      " onClick={() => setShowModal(true)}>
        Text Modal
      </button>

      <button className="text-white hover:bg-amber-500 bg-amber-900 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
      onClick={() => setShowModal2(true)}>
        Video Modal
      </button>

      <button className="text-white hover:bg-amber-500 bg-amber-900 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
      onClick={() => setShowModal3(true)}>
        Form Modal
      </button>
      </div>
</div>
      <div className="w-[70%] mx-auto py-6 space-y-3">
      <p>
          Recently, I developed a sample implementation of modals using Next.js and Tailwind CSS. 
          The project showcases three different types of modals: a text modal, a video modal, and a form modal. 
        </p>
        <p>
          <span className="font-semibold">Text Modal: </span>This modal displays a short paragraph of text, providing a simple way to convey information to the user in a focused interface.
          </p>
            
          <p><span className="font-semibold">Video Modal:</span>This modal embeds a YouTube video within an iframe, allowing users to watch the video directly without leaving the current page. The video is responsive and fits neatly within the modal.
          </p>
          <p>
          <span className="font-semibold">Form Modal:</span>This modal presents a basic sign-in form. It is designed to be a starting point for more complex forms, providing a clean and user-friendly interface.
          </p>

          <p className="py-5 text-slate-500">
          Each modal is triggered by a corresponding button, and the visibility of the modals is managed using React's `useState` hook. The `Modal` component handles the display logic, ensuring the modals are centered and styled appropriately with Tailwind CSS.

          This sample provides a versatile foundation for integrating modal functionality into a Next.js application, offering both visual engagement and interactive elements.

          This description explains the purpose and functionality of the code snippet provided.  
          </p>
      </div>
  </div>
  <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
    <div className="p-6">
    <h3 className="text-xl font-semibold mb-5">Short Note</h3>
    <p className="mb-5 ">
      Something here ...  Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Dignissimos magnam in et
      alias quam enim. Aperiam quae, repellat animi nobis est
        maiores aliquid modi pariatur vel. 
      Cupiditate tenetur ipsa veritatis!
    </p>

    <p className="mb-5 ">
      Something here...   Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Dignissimos magnam in et
      alias quam enim. Aperiam quae, repellat animi nobis est
        maiores aliquid modi pariatur vel. 
      Cupiditate tenetur ipsa veritatis!
    </p>
      </div>
  </Modal>

  <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/amp-NJyTjFs?si=0dPXbEbL-9NuPvzd" title="YouTube video player of the different bendings in the Avatar universe" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
   </iframe>
  </Modal>
  <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
    <div className="py-6 px-6 lg:px-8 text-left">
      <h3 className="mb-4 text-xl font-medium text-gray-900">Sign in </h3>
      <form className="space-y-6">
        <div>
          <label></label>
        </div>
      </form>
    </div>
  </Modal>
</>
  );
}
