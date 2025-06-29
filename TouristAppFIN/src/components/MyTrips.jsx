import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./tipke/Pagination";

function MYtrips() {
  const [putovi, postaviPut] = useState([]);
  const [search, setSearch] = useState('');
  const [editedID, setEditedID] = useState(-1);
  const [im, postaviIM] = useState("");
  const [vr, postaviVr] = useState("");
  const [nov, postaviNov] = useState("");
  const [ljud, postaviLjud] = useState("");
  const [lok, postaviLok] = useState("");
  const [tran, postaviTran] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // 

  useEffect(() => {
    axios.get("http://localhost:3000/putevi/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(putovi => { postaviPut(putovi.data) })
      .catch(error => console.log(error));
  }, []);

  const handleEdit = (id) => {
    axios.get('http://localhost:3000/putevi/' + id)
      .then(res => {
        postaviIM(res.data.name);
        postaviVr(res.data.timeTravel);
        postaviNov(res.data.budget);
        postaviLjud(res.data.people);
        postaviLok(res.data.location);
        postaviTran(res.data.transport);
      }).catch(err => console.log(err));
    setEditedID(id);
  };

  const handleUpdate = () => {
    if (im !== "" && nov > 0 && ljud > 0 && lok !== "" && tran !== "") {
      axios.put('http://localhost:3000/putevi/' + editedID, {
        "name": im, "timeTravel": vr, "budget": nov, "people": ljud, "location": lok, "transport": tran
      })
        .then(res => {console.log(res);
          setEditedID(-1);
          location.reload();
        })
        .catch(err => console.log(err));
    }
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/putevi/' + id)
      .then(res => {console.log(res);
        location.reload();
      }).catch(err => console.log(err));
  };

  // Filtriranje
  const filteredPutovi = putovi.filter(put => {
    return search.toLowerCase() === "" ? put : put.name.toLowerCase().includes(search.toLowerCase());
  });

  // Paginacija
  const indexOfLastTrip = currentPage * rowsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - rowsPerPage;
  const currentTrips = filteredPutovi.slice(indexOfFirstTrip, indexOfLastTrip);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Trip Name:</th>
            <th>Time travel:</th>
            <th>Budget:</th>
            <th>People traveling:</th>
            <th>Location:</th>
            <th>Transport:</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTrips.map(put => {
            if (put._id === editedID) {
              return (
                <tr key={put._id}>
                  <td><input type="text" value={im} onChange={(e) => postaviIM(e.target.value)} /></td>
                  <td><input type="date" value={vr} onChange={(e) => postaviVr(e.target.value)} /></td>
                  <td><input type="text" value={nov} onChange={(e) => postaviNov(e.target.value)} /></td>
                  <td><input type="text" value={ljud} onChange={(e) => postaviLjud(e.target.value)} /></td>
                  <td><input type="text" value={lok} onChange={(e) => postaviLok(e.target.value)} /></td>
                  <td><input type="text" value={tran} onChange={(e) => postaviTran(e.target.value)} /></td>
                  <td><button className="btnEdit" onClick={handleUpdate}>Save</button></td>
                </tr>
              );
            } else {
              return (
                <tr key={put._id}>
                  <td>{put.name}</td>
                  <td>{`${(new Date(put.timeTravel)).getDate()}/${(new Date(put.timeTravel)).getMonth() + 1}/${(new Date(put.timeTravel)).getFullYear()}`}</td>
                  <td>{put.budget}</td>
                  <td>{put.people}</td>
                  <td>{put.location}</td>
                  <td>{put.transport}</td>
                  <td>
                    <button className="btnEdit" onClick={() => handleEdit(put._id)}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="btnTrash" onClick={() => handleDelete(put._id)}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <Pagination
        totalItems={filteredPutovi.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default MYtrips;
