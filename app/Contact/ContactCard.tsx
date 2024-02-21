import React, { FC, JSX } from "react";

type ContactCardProps = {
  image?: React.ReactNode;
  contact?: string;
  text?: string;
  buttonText?: string;
};

const ContactCard: FC<ContactCardProps> = ({
  image,
  contact,
  text,
  buttonText,
}): JSX.Element => {
  return (
    <div className="p-16 border-gray-400 border rounded w-1/3">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="mb-4">{image}</div>
        <div>{contact}</div>
        <div>{text}</div>
        <button className="bg-green-500 px-10 py-2 rounded">
          <a href="_blank">{buttonText}</a>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
