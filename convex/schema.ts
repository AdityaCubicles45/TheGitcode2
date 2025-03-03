// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   formSubmissions: defineTable({
//     firstName: v.string(),
//     lastName: v.string(),
//     email: v.string(),
//     company: v.string(),
//     message: v.string(),
//     selectedOption: v.string(),
//   }).index("by_email", ["email"]),
// });


import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Rename table to formSubmissions to better represent its purpose
  formSubmissions: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    company: v.string(),
    message: v.string(),
    selectedOption: v.string(),
  }).index("by_email", ["email"]),
});