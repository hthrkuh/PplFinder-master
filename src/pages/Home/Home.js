import { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import { addToFavourites, removeFromFavourites, getAllFavourites } from "../../utils/fav_storage"
import useFavorites from "utils/useFavorites"
import * as S from "./style";
import FavouriteList from "components/FavouritesList";

const Home = (props) => {
  const { users, isLoading, fetchUsers, handleLoadMore } = usePeopleFetch();

  const {
    favoritesUsers,
    favoritesUUIDs,
    switchFavorites,
    // isUserInFavorites,
    // handleMouseEnter,
    // handleMouseLeave,
    // hoveredUserId,
  } = useFavorites()

  // const [favourites, setFavourites] = useState([]);

  const handleFetch = async (nationalities, page) => {
    await fetchUsers(nationalities, page)
  }


  // useEffect(() => {
  //   setFavourites(getAllFavourites());
  // }, [])


  // const handleClickFavourites = (index) => {
  //   if (!favourites.includes(index)) {
  //     addToFavourites(index)
  //     let new_favourites = favourites.splice(0);
  //     new_favourites.push(index)
  //     setFavourites(new_favourites);

  //   } else {
  //     //remove fav item
  //     removeFromFavourites(index)
  //     let new_favourites = favourites.splice(0);
  //     new_favourites.splice(new_favourites.indexOf(index), 1)
  //     setFavourites(new_favourites);
  //   }
  // }
  // debugger
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
            handleLoadMore={handleLoadMore}
          // page={page}
          />

          : <FavouriteList
            users={favoritesUsers}
            favourites={favoritesUUIDs}
            handleFavourites={switchFavorites} />
        }

      </S.Content>
    </S.Home>
  );
};

export default Home;
