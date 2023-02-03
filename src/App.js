import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Search from './component/search';
import Button from './component/button';
import SearchCountry from './component/searchCountry';
import UserList from './component/userList';
import Pagination from './component/pagination';
import { BiCloudDownload } from 'react-icons/bi';
import { IoIosSwitch } from 'react-icons/io';
import { CSVLink } from 'react-csv';
import SelectCountry from './component/SelectCountry';
import CircleIcon from '@mui/icons-material/Circle';

// import './user.css';

const url = 'https://randomuser.me/api/?results=15';
const countryUrl = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';
function App() {
  const showRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [buttonGender, setButtonGender] = useState([]);
  const [genders, setGenders] = useState([]);
  const [activeGenderList, setActiveGenderList] = useState('All Users');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [country, setCountry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategory, setShowCategory] = useState(false);
  const [postsPerPage] = useState(3);
  const [countries, setCountries] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      const fetchUser = result.results;
      setUsers(fetchUser);
      setButtonGender(fetchUser);
      // setSearchUser(fetchUser[0])
      let buttonSort = fetchUser.map((user) => user.gender);
      buttonSort = ['all', ...new Set(buttonSort)];
      setGenders(buttonSort);
      setLoading(false);
      setError(false);
      let countrySort = fetchUser.map((user) => user.location.country);
      setCountries(countrySort);

      const search = fetchUser.filter((user) => {
        console.log(user.name.first);
        return (
          user.name.first.toLowerCase().includes(inputValue.toLowerCase()) ||
          user.name.last.toLowerCase().includes(inputValue.toLowerCase())
        );
      });

      setUsers(search);
      const countrySearch = fetchUser.filter((user) => {
        console.log(user.location.country);
        return user.location.country
          .toLowerCase()
          .includes(category.toLowerCase());
      });
      setUsers(countrySearch);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [inputValue, category]);
  const handleShowCountry = () => {
    setShowCategory(!showCategory);
    if (showCategory) {
      showRef.current.style.left = '0px';
    }
  };
  const fitterButton = (gender) => {
    const genderUser = buttonGender.filter((user) => user.gender === gender);
    setUsers(genderUser);

    setActiveGenderList(`${gender} User`);
    //  setButtonGender(genderUser)
    if (gender === 'all') {
      setUsers(buttonGender);
      setActiveGenderList('All Users');
    }
  };

  // get the index of the last post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    let lastPage = Math.ceil(users.length / postsPerPage);
    if (currentPage < 1) {
      setCurrentPage(lastPage);
    }
    if (currentPage > lastPage) {
      setCurrentPage(1);
    }
  }, [users, currentPage]);

  const handleInputSearch = (e) => {
    setInputValue(e.target.value);
  };

  const csvData = users.map((user) => {
    const {
      gender,
      name: { title, first, last },
      location: {
        street: { number, name },
        city,
        state,
        country,
        postcode,
        coordinates: { latitiude, longitude },
        timezone: { offset, description },
      },
      email,
      login: { username, password },
      dob: { age },
      phone,
      cell,
      registered: { date },
      nat,
    } = user;
    return {
      gender,
      title,
      first,
      last,
      number,
      name,
      city,
      state,
      country,
      postcode,
      latitiude,
      longitude,
      offset,
      description,
      email,
      username,
      password,
      phone,
      cell,
      age,
      date,
      nat,
    };
  });
  return (
    <section>
      <div className="user">
        <h3 className="header">
          Hello, <span>Juwon</span>
        </h3>
        <p> Welcome to your dashboard, kindly sort through the user base </p>
        <Search inputValue={inputValue} handleInputSearch={handleInputSearch} />
        <h2> Show users</h2>
        <Button fitterButton={fitterButton} genders={genders} />
      </div>
      <div className="users">
        <h3>{activeGenderList}</h3>
        <p>Filter by</p>
        <div className="search-country">
          <SearchCountry
            inputValue={inputValue}
            handleInputSearch={handleInputSearch}
          />
          <SelectCountry
            countries={countries}
            category={category}
            setCategory={setCategory}
          />
          <button className={showCategory ? 'switch-show' : 'switch'}>
            <CircleIcon
              className={showCategory ? 'circle-show' : 'circle'}
              onClick={() => setShowCategory(!showCategory)}
            />
          </button>
        </div>

        <UserList
          users={currentPosts}
          setShowCategory={setShowCategory}
          showCategory={showCategory}
        />
        <div className="footer">
          <CSVLink className="download" data={csvData}>
            <BiCloudDownload className="download-icon" /> Download results
          </CSVLink>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={users.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
