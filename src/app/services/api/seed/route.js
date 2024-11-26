import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");

  try {
    await servicesCollection.deleteMany();
    const response = await servicesCollection.insertMany(services);
    return Response.json(
      { message: "Services seeded successfully", data: response },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
