// bcryptjs
import { ICartItem } from "@/types";
import { compare, hash } from "bcryptjs";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const shorterText = (
  text: string,
  maxCharacter: number,
  dot?: boolean
): string => {
  const t = String(text);

  if (t.length > maxCharacter) {
    return dot
      ? `${t.substring(0, maxCharacter)}...`
      : `${t.substring(0, maxCharacter)}`;
  } else {
    return text;
  }
};

const applyDiscount = (price: number, discount: number): number => {
  const discounted_value = (price * discount) / 100;
  const final_value = price - discounted_value;

  return +final_value.toFixed(2);
};

const jsonParser = (data: unknown) => {
  const parsedData = JSON.parse(JSON.stringify(data));
  return parsedData;
};

const errorMessage = (error: unknown) => {
  let errorMessage: string;

  if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unknown error occurred.";
  }

  return errorMessage;
};

const isInCart = (items: ICartItem[], productId: string) => {
  const itemIndex = items.findIndex((item) => item.product._id === productId);

  if (itemIndex > -1) {
    return items[itemIndex].quantity;
  } else {
    return 0;
  }
};

export {
  hashPassword,
  verifyPassword,
  shorterText,
  applyDiscount,
  jsonParser,
  errorMessage,
  isInCart,
};
