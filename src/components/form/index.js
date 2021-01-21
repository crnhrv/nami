import {
  Container,
  Title,
  Label,
  Input,
  Submit,
  Base,
  LabelHead,
  Select,
  Option,
  Link,
  Text,
  TooltipBase,
  TooltipLink,
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

Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Form.Tooltip = ({ children, ...restProps }) => {
  return (
    <>
      <TooltipBase />
      <TooltipLink {...restProps}>{children}</TooltipLink>
    </>
  );
};

Form.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

Form.LabelHead = ({ children, ...restProps }) => {
  return <LabelHead {...restProps}>{children}</LabelHead>;
};

Form.Input = ({ ...restProps }) => {
  return <Input {...restProps}></Input>;
};

Form.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};

Form.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

export default Form;
