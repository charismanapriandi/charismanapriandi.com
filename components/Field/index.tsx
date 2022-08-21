import Input from "./Input";
import Textarea from "./Textarea";
import Radio from "./Radio";
import Message from "./Message";
import Label from "./Label";
import styled from "@emotion/styled";
import SelectC from "./SelectC";
import UploadFile from "./UploadFile";

const Field = styled.div``

export default Object.assign(Field, {
  UploadFile,
  SelectC,
  Label,
  Input,
  Textarea,
  Message,
  Radio,
})