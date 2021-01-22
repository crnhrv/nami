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
} from './styles/settings';

const Settings = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Settings.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

Settings.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Settings.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Settings.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Settings.Tooltip = ({ children, ...restProps }) => {
  return (
    <>
      <TooltipBase />
      <TooltipLink {...restProps}>{children}</TooltipLink>
    </>
  );
};

Settings.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

Settings.LabelHead = ({ children, ...restProps }) => {
  return <LabelHead {...restProps}>{children}</LabelHead>;
};

Settings.Input = ({ ...restProps }) => {
  return <Input {...restProps}></Input>;
};

Settings.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};

Settings.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

Settings.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

export default Settings;
