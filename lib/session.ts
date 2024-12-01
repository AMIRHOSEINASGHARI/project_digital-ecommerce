// next
import { cookies } from "next/headers";
// jsonwebtoken
import { verify } from "jsonwebtoken";

const SECRET_KEY = process.env.SESSION_SECRET_KEY;

export const getServerSession = (): Session | null => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore?.get("accessToken")?.value;

    if (!accessToken) return null;

    const session = verify(accessToken, SECRET_KEY!) as Session;

    return session;
  } catch (error) {
    console.error(error);
    return null;
  }
};

interface Session {
  username: string;
  userId: string;
  avatar: string;
  [key: string]: unknown;
}
