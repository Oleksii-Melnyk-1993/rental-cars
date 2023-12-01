import { useState } from 'react';
import {
  Image,
  ImageWrap,
  Item,
  List,
  Span,
  Text,
  Title,
  TitleWrap,
  Wrapper,
} from './CarItem.styled';
import FavoriteIcon from 'components/FavoriteIcon/FavoriteIcon';
import Button from 'components/Button/Button';
import MainModal from 'components/Modal/Modal';

export default function CarItem({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <ImageWrap>
        <FavoriteIcon data={data} />
        <Image src={data.image} />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {data.make}
          <Span>{data.model}</Span>, {data.year}
        </Title>
        <Text>{data.rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{data.address.split(',')[1]}</Item>
        <Item>{data.address.split(',')[2]}</Item>
        <Item>{data.rentalCompany}</Item>
        <Item>{data.type}</Item>
        <Item>{data.model}</Item>
        <Item>{data.mileage}</Item>
        <Item>{data.accessories[0]}</Item>
      </List>
      <Button onClick={handleOpen} text="Learn more" width="274px" />
      {open && <MainModal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
