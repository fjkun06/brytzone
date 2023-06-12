import { ContactData } from "@/app/[locale]/contact/page";

export const sendContactForm = async (data: ContactData) => {
 return fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    // if(res.ok) console.log(res.status);
    
    return res.status;
  });
};
