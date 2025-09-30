import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:6030/getid/${id}`)
      .then((res) => res.json())
      .then((data) => setProductItem(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedItem = {
      title: form.title.value,
      des: form.des.value,
      plant: form.plant.value,
      price: form.price.value,
      img: form.img.value,
    };

    fetch(`http://localhost:6030/edit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Updated successfully!");
        navigate("/update"); // ✅ redirect to Update page
      })
      .catch((err) => {
        console.error("Update error:", err);
        toast.error("Failed to update");
      });
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleUpdate}>
        <h2>Edit Item</h2>

        <label>Title</label>
        <input type="text" name="title" defaultValue={productItem?.title} />

        <label>Image</label>
        <input type="text" name="img" defaultValue={productItem?.img} />

        <label>Plant</label>
        <input type="text" name="plant" defaultValue={productItem?.plant} />

        <label>Description</label>
        <input type="text" name="des" defaultValue={productItem?.des} />

        <label>Price</label>
        <input type="number" name="price" defaultValue={productItem?.price} />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;









// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";

// const Edit = () => {
//   const { id } = useParams();

//   const [productsItems, setproductsItems] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:6030/getid/${id}`)
//       .then((res) => res.json())
//       .then((data) => setproductsItems(data));
//   },[]);

//   const handleUpdate = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const title = form.title.value;
//     const des = form.des.value;
//     const food = form.food.value;
//     const price = form.price.value;
//     const img = form.img.value;
//     const update = { title, des, food, price, img };
//     console.log(update);

//     fetch(`http://localhost:6030/edit/${id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(update),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         toast.warn("successfully updated");
//         window.location.href = "/update";
//       });
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <div class="card update6">
//         <div class="card-body update5">
//           <form onSubmit={handleUpdate}>
//             <h2>EDIT</h2>
//             <div class="update0">
//               <label value="title">
//                 <b>TITLE</b>
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 defaultValue={productsItems?.title}
//                 className="ms-3"
//               />
//             </div>
//             <div class="update1">
//               <label value="img">
//                 <b>IMAGE</b>
//               </label>
//               <input
//                 type="img"
//                 name="img"
//                 defaultValue={productsItems?.img}
//                 className="ms-3"
//               />
//             </div>
//             <div class="update2">
//               <label value="plant">
//                 <b>PLANT</b>
//               </label>
//               <input
//                 type="text"
//                 name="plant"
//                 defaultValue={productsItems?.plant}
//                 className="ms-3"
//               />
//             </div>
//             <div class="update3">
//               <label value="des">
//                 <b>DES</b>
//               </label>
//               <input
//                 type="text"
//                 name="des"
//                 defaultValue={productsItems?.des}
//                 className="ms-3"
//               />
//             </div>
//             <div class="update4">
//               <label value="price">
//                 <b>PRICE</b>
//               </label>
//               <input
//                 type="numbers"
//                 name="price"
//                 defaultValue={productsItems?.price}
//                 className="ms-3"
//               />
//             </div>
//             <section className="update9">
//               <div class="update7 ms-3">
//                 <button type="submit" class="btn btn-primary">
//                   UPDATE
//                 </button>
//               </div>
//             </section>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Edit;
