import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { TINY_MCE_EDITOR_INIT } from "../utils/constants";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_Dynamic = () => {
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [link, setLink] = useState("");
  const MySwal = withReactContent(Swal);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data2 = {
      desc: details,
      name: name,
      section: section,
      link: link,
    };

    try {
      await axios.post("https://api.psh.com.bd/api/blogs", data2);
      MySwal.fire("Good job!", "successfully added", "success");
      formRef.current.reset();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="customize registration_div card">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row p-3 ">
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Name
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="name"
                  value={name}
                  placeholder="Dynamic Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Link
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="link"
                  value={link}
                  placeholder="Dynamic Link"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="col-md-12 form_sub_stream">
                <label htmlFor="inputState" className="profile_label3">
                  Section
                </label>
                <select
                  name="section"
                  id="section"
                  className="main_form w-100"
                  onChange={(e) => setSection(e.target.value)}
                  required
                >
                  <option value="footer1">Footer 1</option>
                  <option value="footer2">Footer 2</option>
                  <option value="footer3">Footer 3</option>
                </select>
              </div>

              <div className="col-md-12 form_sub_stream">
                <Editor
                  apiKey="9i9siri6weyxjml0qbccbm35m7o5r42axcf3lv0mbr0k3pkl"
                  init={TINY_MCE_EDITOR_INIT}
                  value={details}
                  onEditorChange={(newValue) => setDetails(newValue)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
              >
                Add Dynamic
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Dynamic;
