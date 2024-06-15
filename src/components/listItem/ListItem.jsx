import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useState } from "react";

const ListItem = ({index}) => {

  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://imdb-video.media-imdb.com/vi2060109337/1434659607842-pgv4ql-1717424362605.mp4?Expires=1718539001&Signature=pYwoUeHhVezC87HP4hvhfSJYJyyPXkpO5fVWU0yE7I58K4hoaRSlWiMRzpUP005v0dB7PkzAverLoa0delanvJAgnnOyI1McnOB4lmXVa-3A-OlWHshGIwgvqs4CNWrB~5ebQcz-YLn28trUabpsvenE~oT9aprbofUA7Mm4y7ui95dkQ0tmmilOEq5DITzK0COYEXfieDuVSenXNv2J7i9OOEy8ujYREOso6c8DyTzJ6knjUdk2fsvNVMJ6bszlDxTkaZ85zvlCvn4RXZtOkfd8UTKhC9OPvWGoguDvFKLrQHe7vSeDr-hm9Tgp8UcpjhTYyFrZNdBGp92DVMqZHA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";

  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
              odio dolor vitae consequuntur 
            </div>
            <div className="genre">Action</div>
          </div>
        </>

      )}
    </div>
  );
};

export default ListItem;
