"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Updated fetch function using native fetch API
 const fetchContacts = async () => {
  try {
    const response = await fetch("/api/contact");
    const data = await response.json();

    if (data.success) {
      setContacts(data.contacts || []);
    } else {
      toast.error(data.message || "Failed to load contacts");
    }
  } catch (error) {
    toast.error("Error fetching contacts");
  }
};


  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container py-5">
      {" "}
     
        <>
          {" "}
          <h2 className="mb-4">📨 All Messages</h2>{" "}
          <div className="table-responsive">
            {" "}
            <table className="table table-striped table-bordered alignmiddle">
              {" "}
              <thead className="table-dark">
                {" "}
                <tr>
                  {" "}
                  <th scope="col">Name</th> <th scope="col">Email</th>{" "}
                  <th scope="col">Phone</th> <th scope="col">Message</th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                {contacts?.map((contact, index) => (
                  <tr key={index}>
                    {" "}
                    <td>{contact?.name}</td> <td>{contact?.email}</td>{" "}
                    <td>{contact?.phone}</td> <td>{contact?.message}</td>{" "}
                  </tr>
                ))}{" "}
              </tbody>{" "}
            </table>{" "}
          </div>{" "}
        </>
      
    </div>
  );
};

export default ContactList;
