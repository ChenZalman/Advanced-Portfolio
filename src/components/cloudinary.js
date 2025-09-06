import { useEffect, useState } from "react";

const SecureCloudinaryImage = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    try{
    fetch("/.netlify/functions/get-signed-url", {
      method: "POST",
      body: JSON.stringify({ public_id: "my_picture_vrb9vt.jpg" }),
    })
      .then((res) => res.json())
      .then((data) => setImgUrl(data.url));
  }
  catch(err){
    console.log(err.message)
  }
  }, []);

  if (!imgUrl) return <p>Loading...</p>;

  return (
  <>
  {console.log("This is the url " + imgUrl)}
  <img src={imgUrl} alt="Profile not found" />
  </>);
};

export default SecureCloudinaryImage;