import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import userReset from "../Layout/usersReset";

const Form = ({ newUser, updateInfo,apiGet, setupdateInfo,openForm,setopenForm }) => {
  const { register, handleSubmit, reset } = useForm();
  const Submit = (data) => {
    if (updateInfo) {
      updateCardById(data);
    } else {
      newUser(data);
    }
    reset(userReset);
  };
  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const updateCardById = (data) => {
    const url = `https://users-crud.academlo.tech/users/${updateInfo.id}/`;
    axios
      .patch(url, data)
      .then((res) => {
        console.log(res.data);
        apiGet();
        setupdateInfo();
      })
      .catch((err) => console.log(err));
  };
  console.log(updateInfo);

  return (
    <div className={`contain__card ${openForm && 'contain__card_scale' }`}>
      
      <div className="card">
        <div className="card-header">
          <h3 className="text-header">{updateInfo ? 'Update User' : 'Create User'}</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(Submit)}>
            <div className="form-group">
              <label>
                Firts Name:
                <input
                  {...register("first_name")}
                  className="form-control"
                  type="text"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Last name:
                <input
                  {...register("last_name")}
                  className="form-control"
                  type="text"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email:
                <input
                  {...register("email")}
                  className="form-control"
                  type="email"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Password:
                <input
                  {...register("password")}
                  className="form-control"
                  type="password"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Birthdate:
                <input
                  {...register("birthday")}
                  className="form-control"
                  type="date"
                />
              </label>
            </div>
            <button className="btn" onClick={()=>setopenForm(false)}>  {updateInfo ? 'Update User' : 'Create User'}</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Form;
