import { Card, CardMedia } from "@mui/material";
import styled from "styled-components";

export const Styled_Box_Div = styled.div`
    display: flex;
    justify-content: space-between;
  /* background-color: aqua; */
  color: #BF4F74;
  /* box-sizing: border-box; */
  padding: 4px 5px;
    margin: 5px 9px;
    gap: 10px;
  /* margin-bottom: 13px; */
  /* box-shadow: 0 0px 12px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);   */
  /* cursor: pointer; */
   /* Safari */
  /* transition-duration: 0.3s; */


`
export const Styled_Products_ul = styled.ul`
list-style-type:none;
overflow-y:auto;
max-height: 480px;
  max-width: 400px;
  /* background-color: gray; */
  /* padding:9px; */


`
export const Styled_Products_li = styled.li`
padding: 8px;
margin-right: 40px;
    color:black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    font-weight:400;
    text-transform: uppercase;
    cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.3s;
    &:hover,
  &:focus {
    /* color: #009bf2de; */
    background-color: #c6c6c6b0;
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);  
  }
`
export const Styled_FliterImg_Section = styled.section`
  /* min-width: 620px;  */
  max-height: 480px;
  max-width: 800px;
     padding: 8px 10px; 
     margin: 10px 18px; 
     display: flex;
     flex-wrap: wrap;
     overflow-y:auto;
     gap: 20px;
`
export const Styled_Card = styled(Card)({
    display:"flex",
    justifyContent: "center",
    flexWrap: "wrap",
    cursor:"pointer"


  
  })
export const Styled_CardMedia = styled(CardMedia)({
    display:"flex",

})