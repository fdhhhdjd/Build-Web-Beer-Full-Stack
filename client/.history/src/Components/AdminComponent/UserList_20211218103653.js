import React, { useState } from "react";
import { userRows } from "../../utils/DataChart";
import { AiFillDelete } from "../../Imports/Icons";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { UserLists } from "../../Styles/StylePages/Admin/UserLists";
import { useSelector } from "react-redux";
const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const { AdminUser } = useSelector((state) => state.admin);
  console.log(AdminUser);
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.name}
          </div>
        );
      },
    },
    // { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "sex",
    //   headerName: "Sex",
    //   width: 120,
    //   renderCell: (params) => {
    //     return <div className="userListUser">{params.row.sex}</div>;
    //   },
    // },
    // {
    //   field: "transaction",
    //   headerName: "Birth Day",
    //   width: 160,
    // },
    // {
    //   field: "address",
    //   headerName: "Address",
    //   width: 160,
    //   renderCell: (params) => {
    //     console.log(params);
    //     return <div className="userListUser">{params.row.address}</div>;
    //   },
    // },
    // {
    //   field: "phone",
    //   headerName: "Phone",
    //   width: 160,
    //   renderCell: (params) => {
    //     console.log(params);
    //     return <div className="userListUser">{params.row.phone}</div>;
    //   },
    // },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <AiFillDelete
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <>
      <UserLists />
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
        {AdminUser.map((item) => {
          console.log(item.name);
        })}
      </div>
    </>
  );
};

export default UserList;
