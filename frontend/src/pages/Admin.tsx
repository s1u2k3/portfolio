import { useEffect, useState } from "react";

import api from "../services/api";

import "../styles/Admin.css";

function Admin() {

  const [contacts, setContacts] = useState<any[]>([]);

  const [search, setSearch] = useState("");


  const logout = () => {

    localStorage.removeItem("isAdmin");

    window.location.href = "/login";

  };


  const getMessages = async () => {

    try {

      const response = await api.get("/contact");

      setContacts(response.data);

    }

    catch (err) {

      console.log(err);

    }

  };


  const deleteMessage = async (id: string) => {

    try {

      await api.delete(

        `/contact/${id}`

      );

      getMessages();

    }

    catch (err) {

      console.log(err);

    }

  };


  const markAsRead = async (

    id: string

  ) => {

    try {

      await api.put(

        `/contact/${id}/read`

      );

      getMessages();

    }

    catch (err) {

      console.log(err);

    }

  };


  useEffect(() => {

    getMessages();

  }, []);


  const filteredContacts =

    contacts.filter(

      (item) =>

        item.name

          .toLowerCase()

          .includes(

            search

              .toLowerCase()

          )

        ||

        item.email

          .toLowerCase()

          .includes(

            search

              .toLowerCase()

          )

    );



  const total = contacts.length;

  const unread =

    contacts.filter(

      item => !item.read

    ).length;

  const read =

    contacts.filter(

      item => item.read

    ).length;



  return (

    <div className="admin-page">


      <div className="admin-header">

        <h1>

          Admin Dashboard

        </h1>


        <button

          className="logout-btn"

          onClick={logout}

        >

          Logout

        </button>

      </div>



      <div className="dashboard-cards">


        <div className="card">

          <h3>

            Total

          </h3>

          <p>

            {total}

          </p>

        </div>



        <div className="card">

          <h3>

            Unread

          </h3>

          <p>

            {unread}

          </p>

        </div>



        <div className="card">

          <h3>

            Read

          </h3>

          <p>

            {read}

          </p>

        </div>


      </div>



      <input

        type="text"

        className="search-box"

        placeholder=

        "Search by name or email"

        value={search}

        onChange={(e) =>

          setSearch(

            e.target.value

          )

        }

      />



      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Message</th>

              <th>Date</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>



          <tbody>

            {

              filteredContacts.map(

                (item: any) => (


                  <tr

                    key={item.id}

                  >

                    <td>

                      {item.name}

                    </td>


                    <td>

                      {item.email}

                    </td>


                    <td className="message-cell">

                      {

                        item.message

                      }

                    </td>


                    <td>

                      {

                        item.createdAt

                          ?

                          new Date(

                            item.createdAt

                          )

                            .toLocaleString()

                          :

                          "N/A"

                      }

                    </td>



                    <td>

                      {

                        item.read ?

                          <span

                            className="read"

                          >

                            Read

                          </span>

                          :

                          <button

                            className="read-btn"

                            onClick={() =>

                              markAsRead(

                                item.id

                              )

                            }

                          >

                            Mark Read

                          </button>

                      }

                    </td>



                    <td>

                      <button

                        className="delete-btn"

                        onClick={() =>

                          deleteMessage(

                            item.id

                          )

                        }

                      >

                        Delete

                      </button>

                    </td>


                  </tr>

                )

              )

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Admin;