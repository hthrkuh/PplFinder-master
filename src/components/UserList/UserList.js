import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import useFavorites from "utils/useFavorites";

const countries = ["Brazil", "Australia", "Canada", "Germany", "Norway", "United States"];
const nationalities = ["BR", "AU", "CA", "DE", "NO", "US"];
const UserList = ({ users, isLoading, handleFetch, favourites, handleFavourites }) => {
  // const [hoveredUserId, setHoveredUserId] = useState();
  const [selectedNationalities, setSelectedNationalities] = useState([]);

  const {
    handleMouseEnter,
    handleMouseLeave,
    hoveredUserId,
  } = useFavorites()


  const handleCheckboxClick = (nat) => {
    if (window.event.target.checked) {
      setSelectedNationalities(selectedNationalities => [...selectedNationalities, nat]);
      handleFetch([...selectedNationalities, nat])
    } else {
      setSelectedNationalities(selectedNationalities.length === 1 ?
        [] : selectedNationalities.filter((natItem) => natItem !== nat));
      handleFetch()
    }
  }

  const handleClickFavourites = (index) => {
    handleFavourites(index);
  }

  const [page, setPage] = useState(1);
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleScroll = async (e) => {
    // checks position on list: if reached bottom -> load more users
    const x = e.target.scrollHeight - e.target.scrollTop
    const y = e.target.clientHeight;
    console.log(x, y)
    const bottom = x === y
    if (handleLoadMore && bottom) {
      handleLoadMore()
    }
  };
  useEffect(() => {
    async function more() {
      await handleFetch(selectedNationalities, page)
    }
    more()
  }, [page])

  useEffect(() => {
    setPage(1);
  }, [selectedNationalities])

  return (
    <S.UserList>
      <S.Filters>
        {countries.map((country, index) => {
          return (<CheckBox key={index}
            label={country} onChange={() => handleCheckboxClick(nationalities[index])} />)
        })}
      </S.Filters>
      <S.List onScroll={handleScroll}>
        {users.map((user, index) => {

          const uuid = user.login.uuid;
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
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
              <S.IconButtonWrapper isVisible={
                favourites.includes(uuid) ? true :
                  (index === hoveredUserId)}
                onClick={() => handleClickFavourites(user, index)}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
