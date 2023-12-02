import NavBar from 'components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { Text, Wrapper, WrapperList } from './Favorites.styled';
import CarItem from 'components/CarItem/CarItem';
import { LoadMore } from 'pages/Catalog/Catalog.styled';

export default function Favorites() {
  const favoriteCars = useSelector(selectFavorites);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const loadMore = () => {
    const startIndex = page * 8;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 8);

    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 8);
    setCars(initialCars);
  }, [favoriteCars]);

  return (
    <>
      <NavBar />
      <Wrapper>
        <WrapperList>
          {cars.length ? (
            cars.map((favorite, index) => (
              <CarItem key={index} data={favorite} />
            ))
          ) : (
            <Text>Favorite list is already empty</Text>
          )}
          <LoadMore variant="text" onClick={loadMore}>
            Load more
          </LoadMore>
        </WrapperList>
      </Wrapper>
    </>
  );
}
