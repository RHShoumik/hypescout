
import { Button } from "semantic-ui-react";

import "./PrimaryButton.scss";

const PrimaryButton = (props) => {

  const { link = "https://hypescout.co/" , text="Click Here" } = props;

  return (
    <Button className="PrimaryButton" as='a' href={link} > {text} </Button>
  )
}

export default PrimaryButton