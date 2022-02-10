import React from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const FavouritesList = ({ users, handleFavourites }) => {
  return (
    <S.FavouritesList>
      <S.List>
        {users.map((user, index) => {
          //  const uuid = user.login.uuid;
          // if(!favourites.includes(index)) return ""
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
        })}
      </S.List>
    </S.FavouritesList>
  );
};

export default FavouritesList;
