import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/pages/Profile.scss';

function Profile() {
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [image, setImage] = useState('');
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    email: true,
    password: true,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onChangeFile(e) {
    e.preventDefault();
    setImage(e.target.files[0]);
    setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
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

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    // updateTutorProfile(data, formData, token);
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
      <form className="profile__card-body" onSubmit={handleSubmit(onSubmit)}>
        <h1>hello internet citizen this is your tech-prep id</h1>
        <div className="profile__card-body-container">
          <div className="profile__photo-container">
            <img src={previewPhoto} alt="" />
            <label htmlFor="upload" className="profile__button-photo">
              upload photo
            </label>
            <input
              type="file"
              id="upload"
              onChange={onChangeFile}
              hidden
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="profile__text-container">
            <div className="profile__input-container">
              <input
                type="text"
                disabled={isDisabled.name}
                {...register('name', {
                  required: true,
                  pattern:
                    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
                })}
                placeholder="Name"
              />
              <button className="profile__button-edit-name" onClick={handleClick}>
                edit
              </button>
            </div>
            {(errors.name?.type === 'required' && <p>Name is required</p>) ||
              (errors.name?.type === 'pattern' && <p>Name must only contain letters</p>)}
            <div className="profile__input-container">
              <input
                type="email"
                disabled={isDisabled.email}
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                placeholder="Email"
              />
              <button className="profile__button-edit-email" onClick={handleClick}>
                edit
              </button>
            </div>
            {(errors.email?.type === 'required' && <p>Email is required</p>) ||
              (errors.email?.type === 'pattern' && <p>Please enter a valid email</p>)}
            <div className="profile__input-container">
              <input
                disabled={isDisabled.password}
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 5,
                })}
                placeholder="Password"
              />
              <button className="profile__button-edit-password" onClick={handleClick}>
                edit
              </button>
            </div>
            {(errors.password?.type === 'required' && <p>Password is required</p>) ||
              (errors.password?.type === 'minLength' && <p>Password is to short</p>)}
            <button className="profile__button-submit">save changes</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Profile;
