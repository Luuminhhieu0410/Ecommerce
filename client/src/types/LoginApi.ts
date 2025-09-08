export interface User {
  id: string | null;
  email: string | null;
  password_hash: string | null;
  full_name: string | null;
  phone: string | null;
  is_verified: boolean | null;
  created_at: string | null;
}
export interface UserLoginApi {
  data: User;
  access_token: string;
};
