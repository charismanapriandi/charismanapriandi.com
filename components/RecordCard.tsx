import Row from "components/Row";
import Text from "./Text";
import { FC, memo } from "react";
import Divider from "./Divider";

const RecordCard: FC<Components.Card.Record> = ({experienceCount, projectCount}) => (
  <Row alignItems="center" gap={40} justifyContent="flex-end">
    <div>
      <Text size={54} weight={500} color='primary' textAlign='center'>{experienceCount}</Text>
      <Text textAlign='center'>Years Experience</Text>
    </div>
    <Divider variant="vertical" />
    <div>
      <Text size={54} weight={500} color='primary' textAlign='center'>{projectCount}</Text>
      <Text textAlign='center'>Project Worked</Text>
    </div>
  </Row>
)

export default memo(RecordCard);
