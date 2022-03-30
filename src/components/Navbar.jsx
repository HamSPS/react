import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { Search } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>
              <ItemLink>
                Ham.
              </ItemLink>
            </Logo>
          </Center>
          <Right>
            <MenuItem>
              <ItemLink>
                REGISTER
              </ItemLink>
            </MenuItem>
            <MenuItem>
              <ItemLink>
                SIGN IN
              </ItemLink>
            </MenuItem>
            <MenuItem>
              <ItemLink>
                <Badge badgeContent={4} color="success">
                  <ShoppingCartOutlined color="action" />
                </Badge>
              </ItemLink>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};
