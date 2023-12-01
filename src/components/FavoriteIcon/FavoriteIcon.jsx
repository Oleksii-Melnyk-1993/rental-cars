import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/slice';
import {
  FavoriteFill,
  FavoriteStroke,
  FavoriteWrap,
} from './FavoriteIcon.styled';

export default function FavoriteIcon({ data }) {
  const dispatch = useDispatch();

  const favCars = useSelector(selectFavorites);

  const isChecked = favCars.favorites.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };

  return (
    <FavoriteWrap>
      <Checkbox
        icon={<FavoriteStroke />}
        checkedIcon={<FavoriteFill />}
        onChange={handleToggleFavorite}
      />
    </FavoriteWrap>
  );
}
