import { Button as AntButton } from "antd";
import { NativeButtonProps } from "antd/lib/button/button";
import { TooltipPlacement } from "antd/lib/tooltip";
import * as React from "react";
import clsx from "clsx";
import styled from "styled-components";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { LoadingOutlined } from "@ant-design/icons";
import Icon from "../Icon";
import "./style.less";
import Tooltip from "../Tooltip";
import { CustomIconProps, IconName } from "../Icon/Icon";

const defaultSize = "default";
const styleMap = {
    small: {
        fontSize: "11px",
        lineHeight: "13px",
        letterSpacing: "0.11px",
    },
    default: {
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "0.14px",
    },
    large: {
        fontSize: "16px",
        lineHeight: "19px",
        letterSpacing: "0.16px",
    },
};

const Button: React.FC<NativeButtonProps> = styled(AntButton).attrs((props: any) => ({
    size: props.size || defaultSize,
}))`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => styleMap[props.size]?.fontSize || styleMap[defaultSize].fontSize};
    line-height: ${(props) => styleMap[props.size]?.lineHeight || styleMap[defaultSize].lineHeight};
    letter-spacing: ${(props) => styleMap[props.size]?.letterSpacing || styleMap[defaultSize].letterSpacing};
`;

export interface CustomButtonProps extends Omit<NativeButtonProps, "type"> {
    className?: string;
    tooltipMessage?: React.ReactNode;
    tooltipPlacement?: TooltipPlacement;
    type?: "link" | "text" | "default" | "primary" | "ghost" | "dashed" | "barebone";
    /**
     * @deprecated use `iconProps={{styleOverride: {}}}`
     */
    styleOverride?: Record<string, string>;
    loading?: boolean;
    disabled?: boolean;
    /**
     * @deprecated use `iconProps={{name: "name"}}`
     */
    iconName?: IconName;
    /**
     * @deprecated use `iconProps={{size: size}}`
     */
    iconSize?: number;
    iconProps?: CustomIconProps;
    children?: React.ReactNode;
    size?: SizeType;
}

const defaultIconSize = 24;

function CustomButton({
    className = "",
    tooltipMessage = "",
    tooltipPlacement = "bottom",
    type = "default",
    styleOverride = {},
    loading = false,
    disabled = false,
    iconName,
    iconSize = defaultIconSize,
    iconProps,
    children,
    ...props
}: CustomButtonProps) {
    const IconComponent = () => {
        // ? --inline style is expected by antd
        if (loading) {
            // ? need to subtract 6px because antd's icon has no padding while our icon has.
            const loadingIconSize = `calc(${iconSize || iconProps?.size || defaultIconSize}px - 6px)`;
            return (
                <LoadingOutlined style={{ fontSize: loadingIconSize, height: loadingIconSize, marginRight: "2px" }} />
            );
        }
        return iconName || iconProps ? (
            <Icon size={iconSize} name={iconName} styleOverride={styleOverride} active={!disabled} {...iconProps} />
        ) : null;
    };

    const button =
        type === "barebone" ? (
            <Button disabled={disabled} className={clsx("skeleton-btn", className, type)} {...props}>
                <IconComponent />
                {children}
            </Button>
        ) : (
            <Button disabled={disabled} className={clsx("skeleton-btn", className)} type={type} {...props}>
                <IconComponent />
                {children}
            </Button>
        );

    return tooltipMessage ? (
        <Tooltip placement={tooltipPlacement} title={tooltipMessage}>
            <span>{button}</span>
        </Tooltip>
    ) : (
        button
    );
}

export default CustomButton;