import CustomButton from "@components/adaptors/CustomButton";
import classes from "@styles/Home.module.scss";
import { variants } from "@variants";
import { Col } from "antd";
import Title from "antd/lib/typography/Title";

export default function Home() {
  return (
    <Col className={classes.container}>
      <Title className={classes.buttonContainerHeader}>Buttons -</Title>
      <CustomButton variant={variants.ctaButton} title="ctaButton"/>
    </Col>
  );
}
