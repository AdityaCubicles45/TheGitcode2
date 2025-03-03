import { createClient } from "convex/react";

const convex = createClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default convex;