import { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import { addToFavourites, removeFromFavourites, getAllFavourites } from "../../utils/fav_storage"
import useFavorites from "utils/useFavorites"
import * as S from "./style";
import FavouriteList from "components/FavouritesList";
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
        <S.Header>
          <Text size="64px" bold>
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

      </S.Content>
    </S.Home>
  );
};

export default Home;
