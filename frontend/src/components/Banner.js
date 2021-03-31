import React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import "./Banner.css";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/eeba/1f02/8c5e4c09a4094a4989533c1adf1ffff9?Expires=1617580800&Signature=bBIjcKUoP6jOvxkGAk94Xyam2t5TTpGpntoZ~4vZ9s~jT~9n5gcVXoDjwKCWJP-u-ee0PuDhS8xGUG~NNQjq6zlo0a5MMauEH07Ag~kGwEcHoQrkCRMnHr2nNBC7ehgl7cV-sW6TXVbr6Xk7Oq5iN0ywU8podsRD01Sxx9ZL2Ne6jURyb1cJwz4dkQdYAVG30nyoETwi6Lo-QXsCxP7d8HqWGoQzeQYF99tTjKyrWiRj4wCI7Hw1SrzYU72UcQN5f~TeAGIkn0BMzty5DLy2qAn1EzD~Y-IIHDa3F~vPGyRrAiu11oMYSgWs9Muy1DADHSBESIqz~GYdDG8tb1q1Ww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
        backgroundPosition: " center",
      }}
    >
      <div className="banner__content">
        <FormControl
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            backgroundColor: "rgba(1,1,1,0.2)",
            borderRadius: "15px",
            width: "45%",
          }}
        >
          <InputLabel
            style={{ color: "white", fontSize: "1.2rem", textAlign: "center" }}
          >
            <IconButton>
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
            Search events,hackathons..
          </InputLabel>
          <Input
            style={{ color: "white", margin: "5%", textAlign: "center" }}
          />
        </FormControl>
      </div>
    </header>
  );
}

export default Banner;
