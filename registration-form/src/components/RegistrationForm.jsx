import { useState } from "react";
import FormBox from "./FormBox";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckBoxGroup";
import FileUpload from "./FileUpload";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [file, setFile] = useState(null);

  const [errorMsg, setErrorMsg] = useState("");

  const clearError = () => {
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !gender || hobbies.length === 0 || !country || !bio || !dob || !file) {
      setErrorMsg("⚠ Please fill out all fields before submitting!");
      return;
    }

    setErrorMsg("");

    const storedData = {
      name,
      email,
      gender,
      hobbies,
      country,
      bio,
      dob,
      fileName: file.name
    };

    localStorage.setItem("registrationFormData", JSON.stringify(storedData));

    alert("🎉 Form Submitted & Stored Successfully!");
  };

  return (
    <FormBox>
      <h2 className="heading">Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <InputField 
          label="Full Name" 
          type="text" 
          value={name} 
          onChange={(v) => { setName(v); clearError(); }} 
        />

        <InputField 
          label="Email" 
          type="email" 
          value={email} 
          onChange={(v) => { setEmail(v); clearError(); }} 
        />

        <RadioGroup
          label="Gender"
          options={["Male", "Female", "Other"]}
          value={gender}
          onChange={(v) => { setGender(v); clearError(); }}
        />

        <CheckboxGroup
          label="Hobbies"
          options={["Reading", "Sports", "Music", "Traveling"]}
          value={hobbies}
          onChange={(v) => { setHobbies(v); clearError(); }}
        />

        <SelectField
          label="Country"
          options={["India", "USA", "UK", "Canada", "Japan"]}
          value={country}
          onChange={(v) => { setCountry(v); clearError(); }}
        />

        <TextAreaField
          label="Bio"
          value={bio}
          onChange={(v) => { setBio(v); clearError(); }}
        />

        <InputField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(v) => { setDob(v); clearError(); }}
        />

        <FileUpload 
          label="Upload Photo" 
          onChange={(file) => { setFile(file); clearError(); }}
        />

        {errorMsg && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            {errorMsg}
          </p>
        )}

        <button className="submit-btn">Submit</button>
      </form>
    </FormBox>
  );
}
