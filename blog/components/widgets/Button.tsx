export type ButtonProps = {
    text: string;
};

const Button = ({ text }: ButtonProps) => (
    <button tw="text-lg font-medium">{text}</button>
);

export default Button;
