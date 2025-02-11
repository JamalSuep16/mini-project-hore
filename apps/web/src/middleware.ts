import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

async function verifyJwtToken(token: string) {
  try {
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    );

    return verifiedToken.payload;
  } catch (error) {
    console.error(error);
  }
}

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const verifiedToken = verifyJwtToken(accessToken!);

  if (!accessToken || !verifiedToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path"],
};
