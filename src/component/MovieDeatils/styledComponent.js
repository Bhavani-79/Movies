import styled from "styled-components";
import {Link} from 'react-router-dom'

export const ListContainer = styled.li`
list-style-type:none;
display:flex;
flex-direction:column;
margin:10px;
width:300px;

`

export const Button = styled.button`
background-color:transparent;
cursor:pointer;
outline:none;
border:none;

`

export const Image = styled.img`
 height:400px;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size:25px;
  text-align:start;
  width:300px;
  padding-left:10px;
`

export const Rating = styled.p`
color: #f2f2f2;
font-size:20px;
  text-align:start;
 padding-left:10px;
  width:300px;
`
export const LinkItem =styled(Link)`
  text-decoration:none;
`