import React, { useState } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";

import * as S from "./style";
import CheckBox from "components/CheckBox";

import { CSVLink } from "react-csv";
const headers = [
  { label: "First Name", key: "name.first" },
  { label: "Last Name", key: "name.last" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "name.phone" },
  { label: "Birth Date", key: "dob.date" },
  { label: "Age", key: "dob.age" },
  { label: "Country", key: "location.city" },
  { label: "City", key: "location.country" },
  { label: "City", key: "location.country" },
  { label: "Time Zone Offset", key: "location.timezone.offset" },
  { label: "Free Text", key: "freeTextInput" },
];
const FavouritesList = ({ users, handleFavourites, countries, nationalities }) => {

  const [selectedNationalities, setSelectedNationalities] = useState([]);

  const handleCheckboxClick = (nat) => {
    if (window.event.target.checked) {
      setSelectedNationalities(selectedNationalities => [...selectedNationalities, nat]);
    } else {
      setSelectedNationalities(selectedNationalities.length === 1 ?
        [] : selectedNationalities.filter((natItem) => natItem !== nat));
    }
  }

  return (
    <S.FavouritesList>
      <S.Filters>
        {countries.map((country, index) => {
          return (<CheckBox key={index}
            label={country} onChange={() => handleCheckboxClick(nationalities[index])} />)
        })}
      </S.Filters>
      {users?.length && <S.CSVLinkrWrapper >
        <CSVLink data={users} headers={headers}>
          Download to CSV
          <GetAppIcon color="primary" />
        </CSVLink>
      </S.CSVLinkrWrapper> || ""}
      <S.List>
        {users?.length ? users.map((user, index) => {
          if (selectedNationalities.length > 0 && selectedNationalities.indexOf(user.nat) < 0) return ""
          else
            return (
              <S.User
                key={index}
              >
                <S.UserPicture src={user?.picture.large} alt="" />
                <S.UserInfo>
                  <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                    {user?.location.city} {user?.location.country}
                  </Text>
                </S.UserInfo>
                <S.IconButtonWrapper isVisible={true} onClick={() => handleFavourites(user, index)}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            )
        }) : <Text size="40px" bold>
          No Favourite found
        </Text>}
      </S.List>
    </S.FavouritesList>
  );
};

export default FavouritesList;
