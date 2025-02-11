import React from "react";
import { FormProps } from "antd";
import PropTypes from "prop-types";
import { FormInstance } from "antd/lib/form";
import FormBuilderItems from "./FormBuilderItems";
import { StyledForm } from "./Form.styles";

const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${label} is required!",
};

interface CustomFormProps extends FormProps {
    form: FormInstance;
}

const CustomForm = ({ form: inForm, ...props }: CustomFormProps) => {
    const [form] = StyledForm.useForm(inForm);
    return <StyledForm validateMessages={validateMessages} form={form} {...props} />;
};

CustomForm.defaultProps = {
    name: "form",
    colon: false,
    layout: "vertical",
    labelAlign: "left",
    hideRequiredMark: true,
    initialValues: {},
    scrollToFirstError: true,
};

CustomForm.propTypes = {
    name: PropTypes.string.isRequired,
    colon: PropTypes.bool,
    layout: PropTypes.oneOf(["horizontal", "inline", "vertical"]),
    labelAlign: PropTypes.oneOf(["left", "right"]),
    hideRequiredMark: PropTypes.bool,
    initialValues: PropTypes.object,
    preserve: PropTypes.bool,
    scrollToFirstError: PropTypes.bool,
};

CustomForm.Provider = StyledForm.Provider;
CustomForm.useForm = StyledForm.useForm;
CustomForm.Items = FormBuilderItems;

CustomForm.useForceUpdate = () => {
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);
    return forceUpdate;
};

export default CustomForm;
