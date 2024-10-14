import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";


const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    variant: "outline",
    placeholder: "Outline Input",
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    placeholder: "Solid Input",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    placeholder: "Ghost Input",
  },
};


export const NavyOutline: Story = {
  args: {
    variant: "outline",
    colorscheme: "navy",
    placeholder: "Navy Outline Input",
  },
};

export const MintSolid: Story = {
  args: {
    variant: "solid",
    colorscheme: "mint",
    placeholder: "Mint Solid Input",
  },
};

export const YellowGhost: Story = {
  args: {
    variant: "ghost",
    colorscheme: "yellow",
    placeholder: "Yellow Ghost Input",
  },
};


export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small Input",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium Input",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large Input",
  },
};

export const Disabled: Story = {
  args: {
    variant: "outline",
    placeholder: "Disabled Input",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    variant: "outline",
    placeholder: "Input with Error",
    className: "border-red-500",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    variant: "outline",
    placeholder: "Password",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    variant: "outline",
    placeholder: "Email Address",
  },
};
