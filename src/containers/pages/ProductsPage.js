import React, { useState } from "react";
import Form from "../../components/molecules/Form";
import HeaderContainer from "../../components/organisms/Header/HeaderContainer";
import { helpHttp } from "../../helpers/Helphttp";
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
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setBlob(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickTrash = () => {
    setFile("");
    setBlob("");
  };

  const handleClickSave = () => {
    setShowForm(true);
    console.log("Abrir menu para agregar");
  };

  const addData = (data) => {
    data.given = false;
    data.uploaded = new Date();
    console.log('data', data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    /* helpHttp.post(urlStore, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    }); */
  };

  const style = {
    width: "100%",
  };

  //console.log(typeof file.lastModified);

  return (
    <div style={style}>
      <HeaderContainer />
      <h4>Administrar productos</h4>

      {/* DIV FLOTANTE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          borderRadius: ".5em",
          boxShadow: "0 0 7px rgba(0, 0, 0, 0.3)",
          padding: "1em",
          marginBottom: "1em",
        }}
      >
        {/* BLOQUE FLEX INPUT_FILE|PREVIEW */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "8em",
          }}
        >
          {/* INPUT_FILE */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "48%",
              height: "100%",
              borderRadius: ".5em",
              border: ".5em dashed #ccc",
              backgroundColor: "#eee",
            }}
          >
            <input
              style={{
                position: "relative",
                zIndex: "10",
                width: "100%",
                height: "100%",
                filter: "opacity(0)",
              }}
              type="file"
              onChange={handleFile}
            />
            <Upload color="#4c7a94" />
          </div>
          {/* PREVIEW */}
          <div
            style={{
              backgroundImage: `url(${blob})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="ProductsPage__div-image_preview"
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
    </div>
  );
};

export default ProductsPage;
