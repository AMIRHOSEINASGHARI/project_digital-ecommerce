type RegisterUserProps = {
  displayName: string;
  email: string;
  password: string;
};

type CreateAddress = {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  isDefault: boolean;
};

export type { RegisterUserProps, CreateAddress };
