import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <InfinitySpin />
    </LoaderContainer>
  );
}
