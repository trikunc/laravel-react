import React, { useEffect, useState } from 'react'

const URL = "https://gorest.co.in/public-api/users";

const TestCoding = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(URL);
  const [maxPage, setMaxPage] = useState(1);
  const [page, setPage] = useState(1);

  const [selectedFilter, setSelectedFilter] = useState(null)
  const [searchFilter, setSearchFilter] = useState('')



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
        setMaxPage(json.meta.pagination.pages);
        setPage(json.meta.pagination.page);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  let filterData = () => {
    if (!selectedFilter && searchFilter === '') return data
    let filtered = data

    if (selectedFilter) {
      filtered = data.filter((value) => {
        return value.name === selectedFilter
      })
    }

    if (searchFilter === '') return filtered

    return filtered.filter((value) => {
      return value.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
    })
  }

  let filterData2 = () => {
    return data.filter(user =>
      user.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      user.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchFilter.toLowerCase()) ||
      user.status.toLowerCase().includes(searchFilter.toLowerCase())

    )
  }

  console.log(data);
  console.log("url=", url);

  const firstPage = () => {
    setUrl(`${URL}?page=${1}`);
  };

  const prevPage = () => {
    setUrl(`${URL}?page=${page - 1}`);
  };

  const nextPage = () => {
    setUrl(`${URL}?page=${page + 1}`);
  };

  const lastPage = () => {
    setUrl(`${URL}?page=${maxPage}`);
  };

  const handleDel = (id) => {
    const newData = data.filter(item => item.id !== id);
    console.log("newData=", newData);
    setData(newData);
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center ">
      <h1>Employee Data</h1>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search for..."
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <div>
        <div>
          <table className="m-4">
            <thead>
              <tr>
                <th className="p-2">Id</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Gender</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterData2().map((item) => (
                <tr>
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2">{item.gender}</td>
                  <td className="p-2 text-gree">{item.status}</td>
                  <td className="p-2 text-gree">
                    <button onClick={() => handleDel(item.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center">
          <div>
            Page {page} of {maxPage}
          </div>
          <div>
            <button
              onClick={() => firstPage()}
              disabled={page == 1}
              type="button"
              className="m-2"
            >
              First
            </button>
            <button
              onClick={() => prevPage()}
              disabled={page == 1}
              type="button"
            >
              Prev
            </button>
            <button
              onClick={() => nextPage()}
              disabled={page == maxPage}
              type="button"
            >
              Next
            </button>
            <button
              onClick={() => lastPage()}
              disabled={page == maxPage}
              type="button"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCoding

