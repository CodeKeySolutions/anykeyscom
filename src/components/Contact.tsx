import { send } from "process";

function Contact() {
    const handleSubmit = (event : any) => {
        event.preventDefault();
        // Handle form submission
        sendMessage();  
    };
    const sendMessage = () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLTextAreaElement).value;



        // Here you can implement the logic to send the message
        console.log("Sending message:", { name, email, message });
    };
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">Contact Us</h2>
        {/* <form className="bg-white rounded-lg shadow-md p-8"> */}
          {/* <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div> */}
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label> */}
            <a href="mailto:info@bloodbullets.com" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">
              Send mail
              {/* <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" /> */}
            </a>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <button type="submit" onSubmit={handleSubmit} className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">
            Send Message
          </button> */}
        {/* </form> */}
      </div>
    </section>
  );
}

export default Contact;
