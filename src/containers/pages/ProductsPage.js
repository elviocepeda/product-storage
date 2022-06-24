import React, { useState } from "react";
import Form from "../../components/molecules/Form";
import HeaderContainer from "../../components/organisms/Header/HeaderContainer";
import { helpHttp } from "../../helpers/helpHttp";
import Trash from "../../icons/Trash";
import Upload from "../../icons/Upload";
import UploadArrow from "../../icons/UploadArrow";

const ProductsPage = () => {
  const [blob, setBlob] = useState("");
  const [file, setFile] = useState("");
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  let urlStore = "http://localhost:3004/store";

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setBlob(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickTrash = () => {
    setFile("");
    setBlob("");
  };

  const handleClickSave = () => {
    setShowForm(true);
  };

  const addData = (data) => {
    data.id = Date.now();
    data.given = false;
    data.uploaded = new Date();
    console.log("data", data);

    let options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    };

    fetch(urlStore, options)
      .then((response) => response.json())
      .then((data) => setDb(data));

    /* helpHttp.post(urlStore, options).then((res) => {
      console.log('res', res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    }); */
  };

  return (
    <div style={{width: "100%"}}>
      <HeaderContainer />
      <h4>Administrar productos</h4>

      <div className="productspage-image_upload">
        <div className="productspage-image_flex">
          {/* INPUT_FILE */}
          <div className="productspage-image_input">
            <input type="file" onChange={handleFile}/>
            <Upload color="#4c7a94" />
          </div>
          {/* PREVIEW */}
          <div
            style={{
              backgroundImage: `url(${blob})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="productspage-image_preview"
          ></div>
        </div>
        {/* IMAGE INFO | DELETE & ADD ICONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          {/* IMAGE INFO */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "70%",
              margin: "1em 0",
            }}
          >
            {file && (
              <p style={{ fontSize: ".7em" }}>
                Date: <span>{file.lastModifiedDate.toString()}</span>
              </p>
            )}
          </div>
          {/* DELETE & ADD FUNC */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "30%",
              margin: "1em 0",
            }}
          >
            <div onClick={handleClickTrash} style={{ marginRight: "1em" }}>
              <Trash color="#000" />
            </div>
            <div onClick={handleClickSave}>
              <UploadArrow color="#000" />
            </div>
          </div>
        </div>
        {/* ADD FORM */}
        <Form
          addData={addData}
          showForm={showForm}
          setShowForm={setShowForm}
          blob={blob}
        />
      </div>
      <div className="productspage-card_container">
          <div className="productspage-card_image"
            style={{
              backgroundImage: `url(${blob})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="productspage-card_info">
            <h4>Campera niño</h4>
            <h5>Talle: 10</h5>
            <h6>Precio: $2000</h6>
          </div>
        </div>
    </div>
  );
};

export default ProductsPage;
