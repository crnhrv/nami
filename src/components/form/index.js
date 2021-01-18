import {
  Container,
  Title,
  Text,
  Label,
  Input,
  Submit,
  Base,
  LabelHead,
  Select,
  Option,
  Link,
} from './styles/form';

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Form.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

Form.LabelHead = ({ children, ...restProps }) => {
  return <LabelHead {...restProps}>{children}</LabelHead>;
};

Form.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};

Form.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

Form.Input = ({ ...restProps }) => {
  return <Input {...restProps}></Input>;
};

Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default Form;
