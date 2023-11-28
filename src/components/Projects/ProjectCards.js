import React from "react"; // ����react�Ŀ⣬ʹ�ó������ʹ��React������͹���
import Card from "react-bootstrap/Card"; //���������ֱ�����Bootstrap��Card��Button����
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs"; //����Githubͼ������

// ������һ����ΪProjectCards�ĺ��������������Ϊprops�Ĳ���
function ProjectCards(props) {
  return (
      <Card className="project-card-view"> {/* ��Ⱦһ��Card�������Ϊ�����һ��project-card-view����*/}
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
