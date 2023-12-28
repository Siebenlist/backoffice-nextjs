import React from "react";

const page = () => {
  const handleForm = async () => {
    "use server";
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" />
      </form>
    </div>
  );
};

export default page;
