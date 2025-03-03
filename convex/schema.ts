import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    age: v.number(),
    githubId: v.string(),
    email: v.string(),
    experience: v.string(), // You can use v.number() if storing years of experience
    walletAddress: v.string(),
    web3Project: v.string(),
  }).index("by_email", ["email"]), // Add an index for unique email lookup
});