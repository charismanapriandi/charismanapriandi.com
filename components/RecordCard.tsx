import { Paper, Text } from "@/components";
import { FC, memo } from "react";
import Divider from "./Divider";
import styled from "@emotion/styled";
import breakpoint from "styles/breakpoint";

const RecordCard: FC<Components.Card.Record> = ({experienceCount, projectCount}) => (
  <CustomPaper>
    <div>
      <Text size={54} weight={500} color='primary' textAlign='center'>{experienceCount}</Text>
      <Text textAlign='center'>Years Experiences</Text>
    </div>
    <CustomDivider />
    <div>
      <Text size={54} weight={500} color='primary' textAlign='center'>{projectCount}</Text>
      <Text textAlign='center'>Project Finished</Text>
    </div>
  </CustomPaper>
)

const CustomPaper = styled(Paper)(({theme}) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.secondary,
  justifyContent: 'center',
  padding: '20px',
  borderRadius: theme.borderRadius,
  flexDirection: 'column',
  gap: '20px',
  [`${breakpoint('sm')}`]: {
    flexDirection: 'row',
    gap: '40px',
  },
  [`${breakpoint('md')}`]: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    padding: 0,
  }
}))

const CustomDivider = styled.div(({theme}) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.color.border,
  [`${breakpoint('sm')}`]: {
    width: '1px',
    height: '100px'
  }
}))

export default memo(RecordCard);
