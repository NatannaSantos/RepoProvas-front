import styled from "styled-components";

const StyleHeader = styled.div`
width: 100%;
display: flex;
justify-content:${props=> props.isTests?"space-between" : "center"};
align-items: center;
padding-right:10px;
padding-left:10px;
padding-top: 10px;
padding-bottom:100px;
top:0;
`
const Image = styled.img`
width:292px;
height:63px;
`
export{
    StyleHeader,
    Image
}