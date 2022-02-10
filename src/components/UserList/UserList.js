import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import useFavorites from "utils/useFavorites";
import { Grid } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const UserList = ({ users, isLoading, handleFetch, favourites, handleFavourites, nationalities, countries
}) => {
  const [selectedNationalities, setSelectedNationalities] = useState([]);
  const classes = useStyles();
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

    <Grid container justify="center" className={classes.root} >
      <Grid item justify="center" xs={12}>
        <Grid container justify="center" sm={12} >
          <Grid item xl={12}>
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
                      <div style={{ height: "100%" }}>
                        <S.UserPicture src={user?.picture.large} alt="" />
                      </div>

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
          </Grid>
        </Grid>
      </Grid>
    </Grid >

  );
};

export default UserList;
