import { ArrowBackOutlined } from "@mui/icons-material";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://imdb-video.media-imdb.com/vi2060109337/1434659607842-pgv4ql-1717424362605.mp4?Expires=1718539001&Signature=pYwoUeHhVezC87HP4hvhfSJYJyyPXkpO5fVWU0yE7I58K4hoaRSlWiMRzpUP005v0dB7PkzAverLoa0delanvJAgnnOyI1McnOB4lmXVa-3A-OlWHshGIwgvqs4CNWrB~5ebQcz-YLn28trUabpsvenE~oT9aprbofUA7Mm4y7ui95dkQ0tmmilOEq5DITzK0COYEXfieDuVSenXNv2J7i9OOEy8ujYREOso6c8DyTzJ6knjUdk2fsvNVMJ6bszlDxTkaZ85zvlCvn4RXZtOkfd8UTKhC9OPvWGoguDvFKLrQHe7vSeDr-hm9Tgp8UcpjhTYyFrZNdBGp92DVMqZHA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        className="video"
        autoPlay
        progress={"true"}
        controls
      ></video>
    </div>
  );
};

export default Watch;
