import { Spinner } from './styles/loading';

const Loading = ({ children, ...restProps }) => (
  <div {...restProps}>{children}</div>
);

Loading.Spinner = () => <Spinner />;

export default Loading;
