

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    experience: v.string(), // Storing years of experience as a number
    github: v.string(),
    twitter: v.string(),
    linkedin: v.string(),
    portfolio: v.string(),
    walletAddress: v.string(),
  }).index("by_email", ["email"]), // Indexing email for unique lookup
});
