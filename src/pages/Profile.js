import React, { useState } from 'react';
import '../assets/styles/pages/Profile.scss';

function Profile() {
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [image, setImage] = useState('');
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    email: true,
    password: true,
  });
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    submit: '',
  });

  function onChangeFile(e) {
    e.preventDefault();
    setImage(e.target.files[0]);
    setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
    setErrors((prevState) => ({
      ...prevState,
      submit: true,
    }));
  }

  const handleClick = (e) => {
    e.preventDefault();
    const buttonClass = e.target.className;
    if (buttonClass.match(/email/)) {
      setIsDisabled((prevState) => ({ ...prevState, email: !prevState.email }));
    } else if (buttonClass.match(/password/)) {
      setIsDisabled((prevState) => ({
        ...prevState,
        password: !prevState.password,
      }));
    } else if (buttonClass.match(/name/)) {
      setIsDisabled((prevState) => ({ ...prevState, name: !prevState.name }));
    }
  };

  function validateInputs(e) {
    const value = e.target.value;
    // console.log(value.length);
    const name = e.target.name;
    // console.log(name);
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (value.length <= 0) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Field is required',
        submit: false,
      }));
    } else if (name === 'email' && !emailRegex.test(String(value).toLowerCase())) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Type a valid email',
        submit: false,
      }));
    } else if (name === 'name' && !nameRegex.test(String(value).toLowerCase())) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Name must only contain letters',
        submit: false,
      }));
    } else if (name === 'password' && value.length < 7) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Password is to weak',
        submit: false,
      }));
    } else if (name === 'name' && value.length <= 2) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'This is to short to be a real name',
        submit: false,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        [name]: false,
        submit: true,
      }));
    }
  }

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.submit) {
      console.log(userData);
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      // updateTutorProfile(data, formData, token);
    } else {
      setErrors((prevState) => ({
        ...prevState,
        submit: 'Please change the field you want to update or upload a new picture',
      }));
    }
  };

  // const updateTutorProfile = async (data, formData, token) => {
  //   console.log(data);
  //   try {
  //     const { data: url } = await axios.patch('/uploadProfileImage', formData);
  //     const response = await axios.patch('/update', {
  //       data,
  //       url,
  //       token,
  //     });
  //     localStorage.setItem('token', response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="profile__body">
      <div className="profile__backgroud-shape-2"></div>
      <div className="profile__backgroud-shape-1"></div>
      <form className="profile__card-body" onSubmit={handleSubmit}>
        <h1>hello internet citizen this is your tech-prep id</h1>
        <div className="profile__card-body-container">
          <div className="profile__photo-container">
            <img src={previewPhoto} alt="" />
            <label htmlFor="upload-photo" className="profile__button-photo" id="upload-label">
              upload photo
            </label>
            <input
              type="file"
              id="upload-photo"
              onChange={onChangeFile}
              hidden
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="profile__text-container">
            <label className="input__label">Name</label>
            <div className="profile__input-container">
              <input
                type="text"
                disabled={isDisabled.name}
                name="name"
                onBlur={validateInputs}
                value={userData.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <button className="profile__button-edit-name" onClick={handleClick}>
                edit
              </button>
            </div>
            {errors.name && <p className="profile__error">{errors.name}</p>}
            <label className="input__label">Email</label>
            <div className="profile__input-container">
              <input
                type="email"
                disabled={isDisabled.email}
                name="email"
                placeholder="Email"
                onBlur={validateInputs}
                value={userData.email}
                onChange={handleChange}
              />
              <button className="profile__button-edit-email" onClick={handleClick}>
                edit
              </button>
            </div>
            {errors.email && <p className="profile__error">{errors.email}</p>}
            <label className="input__label">Password</label>
            <div className="profile__input-container">
              <input
                disabled={isDisabled.password}
                type="password"
                name="password"
                placeholder="Password"
                onBlur={validateInputs}
                onChange={handleChange}
                value={userData.password}
              />
              <button className="profile__button-edit-password" onClick={handleClick}>
                edit
              </button>
            </div>
            {errors.password && <p className="profile__error">{errors.password}</p>}
            {errors.submit.length > 0 && <p className="profile__error">{errors.submit}</p>}
            <button className="profile__button-submit">save changes</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Profile;
