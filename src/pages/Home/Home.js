import { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import useFavorites from "utils/useFavorites"
import * as S from "./style";
import FavouriteList from "components/FavouritesList";
import { Grid } from "@material-ui/core";
const countries = ["Brazil", "Australia", "Canada", "Germany", "Norway", "United States"];
const nationalities = ["BR", "AU", "CA", "DE", "NO", "US"];

const Home = (props) => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();

  const {
    favoritesUsers,
    favoritesUUIDs,
    switchFavorites,
  } = useFavorites()

  const handleFetch = async (nationalities, page) => {
    await fetchUsers(nationalities, page)
  }



  return (
    <S.Home>
      <S.Content>
        <Grid container>
          <Grid item xs={12}>

            <Grid container justify="center">
              <Grid item>
                <S.Header>
                  <Text size="5rem" bold>
                    {props.tab === 0 ? "PplFinder" : "Favourites"}
                  </Text>
                </S.Header>
                {props.tab === 0 ?
                  <UserList
                    users={users}
                    isLoading={isLoading}
                    favourites={favoritesUUIDs}
                    handleFavourites={switchFavorites}
                    handleFetch={handleFetch}
                    countries={countries}
                    nationalities={nationalities}
                  />

                  : <FavouriteList
                    users={favoritesUsers}
                    favourites={favoritesUUIDs}
                    handleFavourites={switchFavorites}
                    countries={countries}
                    nationalities={nationalities}
                  />
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </S.Content>
    </S.Home>
  );
};

export default Home;
