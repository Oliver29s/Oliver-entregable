import axios from "axios";
import React from "react";

const CardsUsers = ({ user, apiGet,setupdateInfo }) => {
  const hanbdleDelete = () => {
    const url = `https://users-crud.academlo.tech/users/${user.id}/`;
    axios
      .delete(url)
      .then((res) => {
        apiGet(); console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

 const handleUpdate = () => setupdateInfo(user)

 
 
  return (
    <div>
      <div>
        <p>{`${user["first_name"]} ${user["last_name"]}`} </p>
        <p>{user.email}</p>
        <p>{user.birthday}</p>
      </div>
      <button className="bx bxs-message-alt-x" onClick={hanbdleDelete}></button>
      <button className="bx bxs-edit-alt" onClick={handleUpdate}></button>
    </div>
  );
};

export default CardsUsers;
