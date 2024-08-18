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
<div className="p-10 text-center">
    <h1 className="text-3xl mb-5">Modal with Next JS and TailwindCSS.</h1>
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
  <Modal isVisible={showModal} onClose={() => setShowModal2(false)}>
</Modal>
<Modal isVisible={showModal} onClose={() => setShowModal3(false)}>
</Modal>
</>
  );
}
