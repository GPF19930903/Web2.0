import React from "react"; // 导入react的库，使得程序可以使用React的组件和功能
import Card from "react-bootstrap/Card"; //下面两个分别导入了Bootstrap的Card和Button功能
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs"; //这是Github图标引用

// 定义了一个名为ProjectCards的函数组件，接受名为props的参数
function ProjectCards(props) {
  return (
      <Card className="project-card-view"> {/* 渲染一个Card组件，并为其添加一个project-card-view的类*/}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
              <Card.Title>
                  <div style={{ letterSpacing: "1px", lineHeight:"1.5" }}>
                      {props.title}
                  </div></Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                  <div style={{ paddingTop: "15px" }}>
                      {props.description}</div>
        </Card.Text>
              <Button variant="primary" href={props.ghLink} target="_blank"
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                  >
          {props.isBlog ? "Github" : "Demo Video"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px",marginTop:"10px"}}
                  >
                      <BsGithub /> &nbsp;
            {"Github"}
          </Button>
              )}

              {!props.isBlog && props.link &&(
                  <Button
                      variant="primary"
                      href={props.link}
                      target="_blank"
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                      {"Game"}
                  </Button>
              )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
