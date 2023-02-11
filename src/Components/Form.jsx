import React from "react";
import { useForm } from "react-hook-form";
import userReset from "../Layout/usersReset";

const Form = ({ newUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    newUser(data);
    reset(userReset);
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="text-header">Create</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>
                Name:
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
            <button className="btn"> Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
