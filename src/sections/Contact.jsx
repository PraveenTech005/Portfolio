import { useState } from "react";
import { MdDone, MdSend } from "react-icons/md";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const data = [
    {
      title: "Name",
      value: "Praveen. M",
    },
    {
      title: "Email",
      value: "PraveenTech005@gmail.com",
    },
    {
      title: "Phone",
      value: "+91-97900 77037",
    },
  ];
  const [mailStatus, setMailStatus] = useState("Send");
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMailSubmit = async () => {
    if (!mail.name || !mail.email || !mail.message)
      return toast.warning("Fill all the fields!");

    try {
      setMailStatus("Sending...");
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        mail,
        import.meta.env.VITE_EMAILJS_PUB_KEY
      );
      setMailStatus("Sent");
      toast.success("Mail Sent Successfully");
      setTimeout(() => {
        setMailStatus("Send");
        setMail({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col text-white p-5 lg:p-16 space-y-5 pt-24 static-noise"
      id="contact"
    >
      <h1 className="text-xl">Contact</h1>
      <p className="text-[#ccc]">
        Ready to bring your ideas to life? Let's discuss your next project.
      </p>
      <div className="flex-1 flex flex-col justify-evenly items-center lg:flex-row space-y-10 lg:space-y-0">
        <div className="w-10/12 lg:w-1/3 flex flex-col justify-evenly space-y-5">
          <h1 className="text-xl">Let’s talk how I can help you!</h1>
          <h3 className="px-5">
            If you like my work and want to avail my services then drop me a
            message using the contact form.
          </h3>
          <h3 className="px-5">
            Or get in touch using my email or my contact number.
          </h3>
          <h3 className="px-5">See you!</h3>
          <div className="w-full flex flex-col space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-row justify-evenly">
                <h1 className="w-3/12">{item.title}</h1> <h1>:</h1>
                <p className="w-8/12">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-10/12 lg:w-1/3 flex flex-col justify-evenly items-center">
          <form
            className="border w-full lg:w-10/12 space-y-5 p-5 rounded-2xl bg-[#121212]"
            onSubmit={(e) => {
              e.preventDefault();
              handleMailSubmit();
            }}
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                value={mail.name}
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
                type="text"
                id="name"
                className="border rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value={mail.email}
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
                type="email"
                id="email"
                className="border rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                value={mail.message}
                onChange={(e) => setMail({ ...mail, message: e.target.value })}
                name="message"
                id="message"
                rows={5}
                className="border rounded-lg p-2"
              ></textarea>
            </div>
            <button className="w-6/12 mx-auto flex flex-row justify-center items-center PoppinsB b2 space-x-2">
              <p>{mailStatus}</p>{" "}
              {mailStatus === "Send" ? (
                <MdSend />
              ) : mailStatus === "Sent" ? (
                <MdDone />
              ) : (
                ""
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// ✅ Sent
