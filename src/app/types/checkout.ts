// types/checkout.ts
export interface ShippingAddress {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }
  
  export interface UserInfo {
    name: string;
    email: string;
    phone?: string;
  }
  
  export interface CheckoutFormData extends UserInfo {
    shippingAddress: ShippingAddress;
  }