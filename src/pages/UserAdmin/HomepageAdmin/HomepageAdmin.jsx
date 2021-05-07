import React from "react";
import * as usersService from "../../../utilities/users-service";
import ItemTable from "../../../Components/ItemTable/ItemTable";
import { Link, useHistory } from "react-router-dom";
import plusIcon from "../../../pictures/plus.png";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "./HomepageAdmin.css";

export default function HomepageAdmin({ showItems, handleDelete, isAdmin }) {
  // const history = useHistory();
  // console.log(isAdmin)
  // if (!isAdmin){
  //   history.push('/');
  // }

  const items = showItems.map((item) => (
    <tr>
      <ItemTable item={item} handleDelete={handleDelete} />
    </tr>
  ));

  return (
    <main className="HomepageAdmin">
      <aside>
        <AdminMenu />
      </aside>
      <div>
        <h1>Admin CP</h1>
        <table>
          <tr>
            <th>ITEM ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>ACTION</th>
          </tr>

          {items}
        </table>

        <Link to="/admin/new">
          <img src={plusIcon} alt="add new item" />
        </Link>
      </div>
    </main>
  );
}
