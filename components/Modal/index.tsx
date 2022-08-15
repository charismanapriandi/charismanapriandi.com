import styled from "@emotion/styled";
import Card from "./Card";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Modal = styled.div<Components.Modal.Wraper>(({isOpen, theme}) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: `rgba(0,0,0,.5)`,
  display: isOpen ? 'flex' : 'none',
  justifyContent: 'center',
  alignItems: 'center',
}))

export default Object.assign(Modal, {
  Card,
  Header,
  Body,
  Footer
})