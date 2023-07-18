import * as React from "react";

//import fullpage from 'fullpage.js';
import ReactFullpage from "@fullpage/react-fullpage";
import { useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import SlideContents from "./SlideContents";
import { members } from "../const/member";

const pluginWrapper = () => {
  require("../statics/fullpage.scrollHorizontally.min");
};

export default function MainFullPage() {
  //useEffect(() => {setRendered(true)}, []);
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"C5L78-EAXO9-8I3O7-0M2EI-YBZMN"}
      anchors={[
        "main-entry-video",
        "main-org-slide",
        "main-references",
        "main-partners",
        "main-contact",
      ]}
      sectionsColor={["", "", "#65d4a2", "whitesmoke", "#000"]}
      menu="#main-menu"
      scrollingSpeed={1000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      scrollHorizontallyKey={"ABFADDBE-C1B24976-B193E3F2-E8FAF606"}
      controlArrows={false}
      navigation={true}
      pluginWrapper={pluginWrapper}
      render={(comp) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">section</div>
            <div className="section" data-anchor="main-org-slide">
              <div className="slide bg-cover bg-no-repeat bg-[url('/s1.jpg')] lg:bg-[url('/s1.jpg')]">
                <SlideContents contents={members[0]}></SlideContents>
              </div>
              <div className="slide bg-cover bg-no-repeat bg-[url('/s2_mob.jpg')] lg:bg-[url('/s2.jpg')]">
                <SlideContents contents={members[1]}></SlideContents>
              </div>
              <div className="slide bg-cover bg-no-repeat bg-[url('/s3_mob.jpg')] lg:bg-[url('/s3.jpg')]">
                <SlideContents contents={members[2]}></SlideContents>
              </div>
            </div>
            <div className="section">section2</div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
