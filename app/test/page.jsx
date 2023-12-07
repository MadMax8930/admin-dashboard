import React from 'react'

const TestPage = () => {
   
   const handleForm = async (formData) => {
      "use server";
      const val = formData.get("stock")
      console.log("value", val);
   }

  return (
    <div>
      <form action={handleForm}>
         <input type="text" name="stock" />
         <button>Send</button>
      </form>
    </div>
  )
}

export default TestPage