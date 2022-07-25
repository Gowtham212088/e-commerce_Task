import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const AddProduct = () => {
  //! State Management
  const [name, setName] = useState("");

  const [category, setCategories] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  const categories = [
    {
      value: "laptop",
      label: "laptop",
    },
    {
      value: "mobile",
      label: "mobile",
    },
    {
      value: "mobile accessories",
      label: "mobile accessories",
    },
    {
      value: "laptop accessories",
      label: "laptop accessories",
    },
    {
      value: "smart watches",
      label: "smart watches",
    },
  ];

  //! Change Handlers

  const handleCategory = (event) => {
    setCategories(event.target.value);
  };
  // console.log({ District: District, role: role });
  return (
    <div className="signUp">
      <div className="signUp-parent">
        <div className="col-sm-5 col-md-5 col-lg-5 d-flex flex-column addProduct-col">
          <h1 className="Add-user d-flex fs-1 justify-content-center mb-3">
            Add Product{" "}
          </h1>
          <TextField
            type="text"
            name="name"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="text"
            name="Description"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            type="text"
            name="price"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Price"
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
          />

          <TextField
            className="mt-4 me-4 ms-4"
            id="outlined-select-currency"
            select
            label="Role"
            value={category}
            onChange={handleCategory}
            helperText="Please select your Role"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="url"
            name="Image_Url"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Image_Url"
            variant="outlined"
            onChange={(e) => setImage(e.target.value)}
          />

          <Button
            type="submit"
            className="mt-5 pt-2 pb-2 me-5 ms-5"
            variant="contained"
            style={{ backgroundColor: "#4b00a2", padding: "0" }}
            onClick={() => {
              const values = {
                name: name,
                category: category,
                description: description,
                price: price,
                image: image,
                Approvel: false,
              };
              console.log(values);
            }}
          >
            {" "}
            Sign Up{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
