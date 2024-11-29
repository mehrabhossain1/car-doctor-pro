import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if the user is exists
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json(
        { message: "User already exist" },
        { status: 304 }
      );
    }

    // bcrypt
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);

    const response = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User created successfully", data: response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
