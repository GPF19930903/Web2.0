import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import ImageCell from "../ImageSlice/ImageCell";
import ARSender from "../../Assets/Projects/ARSender.png";
import Interstellar from "../../Assets/Projects/Interstellar.png";
import DigitalTwins from "../../Assets/Projects/DigitalTwins.png";
import ImageControl from "../../Assets/Projects/ImageControl.png";
import TowerMiner from "../../Assets/Projects/TowerMiner.png";
import Website from "../../Assets/Projects/Website.png";

function Projects() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const text = "P r e v i o u s W o r k s";
        setWords(text.split(' '));
    }, []);

    const SliceInner = ({index, title, context, isBlog, link = undefined, ghLink = undefined, demoLink = undefined}) => {
        return <div className="innerContentWrapper">
        <div className="contentIndex">
          {index}
        </div>
        <div className="contentTitle">
          {title}
        </div>
        <div className="contentText" >
          {context}
        </div>
        <div style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px"}}>
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
          >
            {isBlog ? "Github" : "Demo Video"}
          </Button>
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
            >
              <BsGithub /> &nbsp;
              {"Github"}
            </Button>
          )}
          {!isBlog && link &&(
              <Button
                  variant="primary"
                  href={link}
                  target="_blank"
              >
                  {"Game"}
              </Button>
          )}
          </div>
      </div>
    }

  return (
    <div className="project-section">
        <div className="PortalTopContainer" >
          <div className="PortalTopTitle">Previous Work </div>
        </div>
        <Container>
            <div className="PortalSubTitle">Game & AR</div>
            <div className="imgContainer">
              <ImageCell
                isReversed={true}
                isDark={true}
                cardTitle={"01"}
                cardText={"Interstellar Cleanse Project - Game"}
                imageUrl={Interstellar}
                coverContent={
                  <SliceInner
                    index={"01"}
                    isBlog={false}
                    title={"Interstellar Cleanse Project - Game"}
                    context={"In October 2023, this game was created, featuring a Sci-Fi concept and embracing the G4G (Games for Good) principle. Players needs to lead a space cleaning fleet to the Kepler-62 star system to cleanse space debris, harvest clean energy, build purifiers, and restore interstellar ecosystems."}
                    demoLink="https://github.com/0FFMIND/Second-Game-Jam"
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/Ee2pbPdTqbVGmZz6saYF_OQBGvMYKsHRf6jtk1JqaB68Fw?e=8OJX4S"
                    link="https://www.gcores.com/games/112132"
                  />
              }/>
              <ImageCell
                isReversed={true}
                cardTitle={"02"}
                cardText={"Summer School's VR-based and Digital Twins Project"}
                imageUrl={DigitalTwins}
                coverContent={
                  <SliceInner
                    index={"02"}
                    isBlog={false}
                    title={"Summer School's VR-based and Digital Twins Project"}
                    context={"This VR-based project applying Quest2, VR headset, was implemented in Auguest 2023. It intended to bring Metaverse concept to ROS-based robotic arm and create its digital twin to help other testers figure out problem while using TCP commnunication. Full report and PPT can be found in Github."}
                    demoLink="https://github.com/0FFMIND/SummerController"
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EUClllN7GWVMucczObfO12IBp0eb-WoDlsWZKf7mXszepg?e=tQzG0G"
                  />
              }/>
              <ImageCell
                isReversed={true}
                isDark={true}
                cardTitle={"03"}
                cardText={"AR-based QR Code Recognization and Remote Sender"}
                imageUrl={ARSender} 
                coverContent={
                  <SliceInner
                    index={"03"}
                    isBlog={false}
                    title={"AR-based QR Code Recognization and Remote Sender"}
                    context={"This AR-based project used Hololens2 as AR headsets was implemented in January 2023. It used the UDP protocol with Unity's official network library to enable remote device communication. The project used Microsoft's extension package for QR code scanning and its manageable image recognition system.​"}
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EThvP89FGjlBrd13_zF9XcoBuDL2T2dlwEi47PzxN2ZzdQ?e=iAsIre"
                  />
                }
              />
              <ImageCell
                isReversed={true}
                cardTitle={"04"}
                cardText={"AR-based Image Recognization and Hand Control"}
                imageUrl={ImageControl}
                coverContent={
                  <SliceInner
                    index={"04"}
                    isBlog={false}
                    title={"AR-based Image Recognization and Hand Control"}
                    context={"This AR-based project applying Hololens2 as AR headsets was implemented in September 2022. It used offline image recognition with the external plugin Vuforia. For the control aspect, it used Microsoft's basic interface and applied line constraints for the main control functions."}
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EXtBBhSbFT9NjaYEyaCqQLcB8hG7U81LdbNiopCsd4984A?e=AVX6nD"
                  />
              }/>
              <ImageCell
                isReversed={true}
                isDark={true}
                cardTitle={"05"}
                cardText={"TowerMiner - CloudRendering Game"}
                imageUrl={TowerMiner}
                coverContent={
                  <SliceInner
                    index={"05"}
                    isBlog={false}
                    title={"TowerMiner - CloudRendering Game"}
                    context={"This game was uploaded to the Unity official online cloud renderer in October 2022, which executed the whole programme on a cloud server. It could detected whether the user's platform was moblie and PC, and responsed differently."}
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EXCsR8DZCINGnZL1er34lsAB30Ky4IkL7XtloisbQJZ1NQ?e=Ki9TGm"
                    demoLink="https://github.com/0FFMIND/First-Game-Jam"
                    link="https://cloudrendering.unity.cn/app/6352422c9818530021467c1d/preview"
                  />
              }/>
              <ImageCell
                isReversed={true}
                cardTitle={"06"}
                cardText={"Website - Formatting with bootstrap5"}
                imageUrl={Website}
                coverContent={
                  <SliceInner
                    index={"06"}
                    isBlog={true}
                    title={"Website - Formatting with bootstrap5"}
                    context={"This website was constructed in July 2022 and it can be accessed either on PC or moblie. Since the static webpages is written by languages including HTML, css and JavaScript, I uploaded the entire pages to a cloud server to make it dynamic."}
                    ghLink="https://github.com/0FFMIND/Web-Code"
                  />
              }/>
            </div>
          {/* <Col md={4} className="project-card">
             <ProjectCard
                imgPath={Interstellar}
                isBlog={false}
                title="Interstellar Cleanse Project - Game"
                description="In October 2023, this game was created, featuring a Sci-Fi concept and embracing the G4G (Games for Good) principle. Players needs to lead a space cleaning fleet to the Kepler-62 star system to cleanse space debris, harvest clean energy, build purifiers, and restore interstellar ecosystems."
                demoLink="https://github.com/0FFMIND/Second-Game-Jam"
                ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/Ee2pbPdTqbVGmZz6saYF_OQBGvMYKsHRf6jtk1JqaB68Fw?e=8OJX4S"
                link="https://www.gcores.com/games/112132"
            />
          </Col>

          <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={DigitalTwins}
              isBlog={false}
              title="Summer School's VR-based and Digital Twins Project"
              description="This VR-based project applying Quest2, VR headset, was implemented in Auguest 2023. It intended to bring Metaverse concept to ROS-based robotic arm and create its digital twin to help other testers figure out problem while using TCP commnunication. Full report and PPT can be found in Github"
                          demoLink="https://github.com/0FFMIND/SummerController"
                          ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EUClllN7GWVMucczObfO12IBp0eb-WoDlsWZKf7mXszepg?e=tQzG0G"
            />
          </Col>

          <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={ARSender}
              isBlog={false}
                          title="AR-based QR Code Recognization and Remote Sender "
                          description="This AR-based project used Hololens2 as AR headsets was implemented in January 2023. It used the UDP protocol with Unity's official network library to enable remote device communication. The project used Microsoft's extension package for QR code scanning and its manageable image recognition system."
                          ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EThvP89FGjlBrd13_zF9XcoBuDL2T2dlwEi47PzxN2ZzdQ?e=iAsIre"
            />
                  </Col>
          <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={ImageControl}
              isBlog={false}
                          title="AR-based Image Recognization and Hand Control "
                          description="This AR-based project applying Hololens2 as AR headsets was implemented in September 2022. It used offline image recognition with the external plugin Vuforia. For the control aspect, it used Microsoft's basic interface and applied line constraints for the main control functions."
                          ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EXtBBhSbFT9NjaYEyaCqQLcB8hG7U81LdbNiopCsd4984A?e=AVX6nD"
            />
                  </Col>
          <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={TowerMiner}
              isBlog={false}
                          title="TowerMiner - CloudRendering Game"
                          description="This game was uploaded to the Unity official online cloud renderer in October 2022, which executed the whole programme on a cloud server. It could detected whether the user's platform was moblie and PC, and responsed differently. "
                          ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EXCsR8DZCINGnZL1er34lsAB30Ky4IkL7XtloisbQJZ1NQ?e=Ki9TGm"
                          demoLink="https://github.com/0FFMIND/First-Game-Jam"
                          link="https://cloudrendering.unity.cn/app/6352422c9818530021467c1d/preview"
            />
                  </Col>
          <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={Website}
                          isBlog={true}
                          title="Website - Formatting with bootstrap5"
                          description=" This website was constructed in July 2022 and it can be accessed either on PC or moblie. Since the static webpages is written by languages including HTML, css and JavaScript, I uploaded the entire pages to a cloud server to make it dynamic."
                          ghLink="https://github.com/0FFMIND/Web-Code"
            />
                  </Col> */}
      </Container>
    </div>
  );
}

export default Projects;
