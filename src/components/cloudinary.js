import { useEffect, useState } from "react";
import './profile.css'

const SecureCloudinaryImage = ({id,publicId}) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    try{
    fetch("/.netlify/functions/get-signed-url", {
      method: "POST",
      body: JSON.stringify({ public_id: publicId }),
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
  {console.log("This is the url " + id)}
  <img className={id} src={imgUrl} alt="Profile not found" />
  </>);
};

export default SecureCloudinaryImage;