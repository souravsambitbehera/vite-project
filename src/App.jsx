import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Product_datas } from "../Product_datas";
import {
  Styled_Box_Div,
  Styled_Card,
  Styled_FliterImg_Section,
  Styled_Products_li,
  Styled_Products_ul,
} from "./AppStyled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height:600,
  // minHeight: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [open, setOpen] = useState(false);
  const [filterProducts, setFilterProducts] = useState(Product_datas);
  const [filterImages, setfilterImages] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleProductDataClick = (product) => {
    // const data =
    const data = filterProducts.filter((item) => item.id !== product.id);
    setFilterProducts(data);
    // console.log(data)
    setfilterImages([product , ...filterImages]);
  };
  // console.log(filterImages);
  const handleDeleteClick =(product)=>{
    const data = filterImages.filter((item) => item.id !== product.id);

    setFilterProducts([
      product,...filterProducts
    ])
    setfilterImages(data)
  }
  return (
    <div>
      <Button onClick={handleOpen}
       data-testid="open-modal-button"
      >Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
       
      >
        <Box sx={style} data-testid="modal-button"
>
          <Styled_Box_Div>
            <Styled_Products_ul>
              {filterProducts.map((product) =>
              // console.log(typeof product)
              (
                <Styled_Products_li
                  key={product.id}
                  onClick={() => handleProductDataClick(product)}
                >
                  {product.title.slice(0, 8)}...
                </Styled_Products_li>
              ))}
            </Styled_Products_ul>


            <Styled_FliterImg_Section>
              {filterImages.map((product) =>
                // console.log(product)
              
              (
                <Styled_Card sx={{ width: 170, height:150 }} key={product.id}>
                {/* <CardMedia
                  sx={{ height: 110, 
                  width:110
                  }}
                  image={product.image}
                  title={product.title}
                /> */}
                <img src={product.image} alt={product.title} width="100px" height="100px"/>
                
                <CardActions>
                  <Button size="small" onClick={()=>handleDeleteClick(product)}>Delete</Button>
                  <Button size="small">See More</Button>
                </CardActions>
              </Styled_Card>
              ))}
            </Styled_FliterImg_Section>
          </Styled_Box_Div>
        </Box>
      </Modal>
    </div>
  );
};

export default App;
