import React from 'react';
import { Link } from 'react-router-dom';

import {
  CardWrapper,
  CardImage,
  CardDescription,
  CardDescriptionWrapper,
  CardInfoWrapper,
  CardPrice,
  MainCardInfo,
  CardTitle,
  IconBar,
  CollectionName,
  ShoppingBasketImageWrapper,
} from './styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/ItemsCollection/reducer';

function Card({ edited, id, price, title, description, collection }) {
  const dispatch = useDispatch();

  function deleteCollectionItem(propId) {
    dispatch(deleteItem(propId));
  }
  return (
    <CardWrapper data-testid="card-component">
      {!edited && (
        <IconBar role="menubar">
          <Link to={`/item/change/${id}`}>
            <ModeEditIcon sx={{ fontSize: 25 }} />
          </Link>
          <DeleteForeverIcon
            onClick={() => deleteCollectionItem({ id })}
            sx={{ fontSize: 25, color: 'white', cursor: 'pointer' }}
            data-testid="delete-item__icon"
          />
        </IconBar>
      )}
      <CardImage price={price} edited={edited}>
        {!edited && (
          <ShoppingBasketImageWrapper>
            <ShoppingBasketSharpIcon
              sx={{
                display: 'none',
                fontSize: 25,
                color: 'white',
                cursor: 'pointer',
              }}
            />
          </ShoppingBasketImageWrapper>
        )}
      </CardImage>

      <CardInfoWrapper>
        <MainCardInfo>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{price ? `$${price}` : 'Not For Sale'}</CardPrice>
        </MainCardInfo>
        {collection && (
          <CollectionName>Collection: {collection}</CollectionName>
        )}

        {description && (
          <CardDescriptionWrapper>
            <CardDescription>{description}</CardDescription>
          </CardDescriptionWrapper>
        )}
      </CardInfoWrapper>
    </CardWrapper>
  );
}

export default Card;
