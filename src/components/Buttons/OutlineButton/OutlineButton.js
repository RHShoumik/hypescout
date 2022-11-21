
import { Button } from "semantic-ui-react";

import "./OutlineButton.scss";

const OutlineButton = (props) => {

    const { link = "https://hypescout.co/", text="Click Here" } = props;

    return (
        <Button basic className="OutlineButton" as='a' href={link} > {text}</Button>
    )
}

export default OutlineButton;